/**
 * scope-analyze.js — Netlify Serverless Function
 * Receives { driveUrl: "https://drive.google.com/..." }
 * Downloads the file from Google Drive, runs 3 parallel Claude calls
 * Returns { drywall: {...}, paint: {...}, flooring: {...} }
 *
 * Environment variable required: ANTHROPIC_API_KEY
 * File must be shared: "Anyone with the link can view"
 */

'use strict';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

// ---- Parse Google Drive URL → file ID ----
function parseDriveFileId(url) {
  // https://drive.google.com/file/d/FILE_ID/view
  const m1 = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (m1) return m1[1];
  // https://drive.google.com/open?id=FILE_ID
  const m2 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m2) return m2[1];
  // https://drive.google.com/uc?id=FILE_ID
  const m3 = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m3) return m3[1];
  return null;
}

// ---- Download file from Google Drive ----
async function downloadFromDrive(fileId) {
  const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const res = await fetch(directUrl, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
    redirect: 'follow',
  });

  if (!res.ok) {
    throw new Error(`Google Drive returned ${res.status}. Make sure the file is shared as "Anyone with the link."`);
  }

  const contentType = res.headers.get('content-type') || '';

  // If Google returned HTML, it's showing a virus-scan warning page
  if (contentType.includes('text/html')) {
    const html = await res.text();

    // Extract confirm token and retry
    const confirmMatch = html.match(/[?&]confirm=([a-zA-Z0-9_-]+)/);
    if (confirmMatch) {
      const confirmUrl = `https://drive.google.com/uc?export=download&id=${fileId}&confirm=${confirmMatch[1]}`;
      const confirmed  = await fetch(confirmUrl, { redirect: 'follow' });
      if (!confirmed.ok) throw new Error('Google Drive download failed after confirm step.');
      const confirmedType = confirmed.headers.get('content-type') || 'application/pdf';
      const buffer        = await confirmed.arrayBuffer();
      return { buffer, contentType: confirmedType };
    }

    // No confirm token — file may not be publicly shared
    throw new Error('Google Drive did not allow the download. Make sure the file is shared as "Anyone with the link can view."');
  }

  const buffer = await res.arrayBuffer();
  return { buffer, contentType };
}

// ---- Detect Claude-safe media type ----
function normalizeMediaType(rawType) {
  if (!rawType) return 'application/pdf';
  if (rawType.includes('pdf'))  return 'application/pdf';
  if (rawType.includes('jpeg') || rawType.includes('jpg')) return 'image/jpeg';
  if (rawType.includes('png'))  return 'image/png';
  if (rawType.includes('webp')) return 'image/webp';
  if (rawType.includes('gif'))  return 'image/gif';
  // Default to PDF for unknown types (plans are usually PDFs)
  return 'application/pdf';
}

// ---- Build Claude content block ----
function buildContentBlock(base64Data, mediaType) {
  if (mediaType === 'application/pdf') {
    return {
      type: 'document',
      source: { type: 'base64', media_type: 'application/pdf', data: base64Data },
    };
  }
  return {
    type: 'image',
    source: { type: 'base64', media_type: mediaType, data: base64Data },
  };
}

// ---- System prompts ----
const SYSTEM_PROMPTS = {

  drywall: `You are a professional drywall estimator. Analyze this construction plan and extract all information needed for a drywall scope of work.

Analyze for:
- Room names and dimensions (length × width × ceiling height)
- All wall surfaces requiring drywall
- Ceiling surfaces
- Drywall type: standard (dry areas), moisture_resistant (kitchens/baths/laundry), fire_rated (garage walls/ceilings), abuse_resistant (hallways)

Calculate:
- Wall sq ft per room: perimeter × ceiling height, subtract 21 sq ft per door and 15 sq ft per window
- Ceiling sq ft per room: room footprint
- Sheet count: total sq ft ÷ 32 (4×8 sheet)
- Assume 9 ft ceilings if not shown

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string",
  "total_wall_sqft": number,
  "total_ceiling_sqft": number,
  "total_sqft": number,
  "sheet_count_estimate": number,
  "rooms": [{ "room_name": "string", "wall_sqft": number, "ceiling_sqft": number, "drywall_type": "standard|moisture_resistant|fire_rated|abuse_resistant", "notes": "string or null" }],
  "scope_notes": "string"
}`,

  paint: `You are a professional paint estimator. Analyze this construction plan and extract all information needed for a paint scope of work.

Analyze for:
- Room names and dimensions
- Paintable wall surfaces (drywall, plaster, concrete block — exclude tile)
- Ceiling surfaces
- Trim: baseboards (room perimeter LF), door casings (17 LF each), window casings (14 LF each), crown if indicated
- Special finishes: accent walls, wainscoting, painted cabinetry

Calculate:
- Wall sq ft: gross wall minus door (21 sq ft) and window (15 sq ft) openings
- Ceiling sq ft: room footprint
- Trim LF: baseboard perimeter + casings
- Assume 9 ft ceilings if not shown

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string",
  "total_wall_sqft": number,
  "total_ceiling_sqft": number,
  "total_trim_lf": number,
  "rooms": [{ "room_name": "string", "wall_sqft": number, "ceiling_sqft": number, "trim_lf": number, "special_finishes": "string or null", "notes": "string or null" }],
  "scope_notes": "string"
}`,

  flooring: `You are a professional flooring estimator. Analyze this construction plan and extract all information needed for a flooring scope of work.

Analyze for:
- Room names and sq ft (length × width)
- Flooring type per room: hardwood, lvp_lvt, tile, carpet, concrete, or unknown
- Doorway transitions between different flooring materials
- Step-downs or special areas

Calculate:
- Net sq ft per room
- With waste: 10% hardwood/LVP, 15% tile, 5% carpet
- Transition strips: count doorways between different flooring types

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string",
  "total_sqft_net": number,
  "total_sqft_with_waste": number,
  "transition_strips": number,
  "rooms": [{ "room_name": "string", "sqft_net": number, "sqft_with_waste": number, "flooring_type": "hardwood|lvp_lvt|tile|carpet|concrete|unknown", "waste_factor_pct": number, "notes": "string or null" }],
  "scope_notes": "string"
}`,
};

// ---- Claude API call ----
async function callClaude(systemPrompt, contentBlock, isPdf) {
  const headers = {
    'x-api-key':         process.env[['ANTHROPIC', 'API', 'KEY'].join('_')],
    'anthropic-version': '2023-06-01',
    'content-type':      'application/json',
  };
  if (isPdf) headers['anthropic-beta'] = 'pdfs-2024-09-25';

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system:     systemPrompt,
      messages: [{
        role: 'user',
        content: [
          contentBlock,
          { type: 'text', text: 'Analyze this construction plan and return the scope of work as specified. Return ONLY valid JSON.' },
        ],
      }],
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Anthropic API ${response.status}: ${errText.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

// ---- Safe JSON parser ----
function safeParse(text, trade) {
  try {
    const clean = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
    return JSON.parse(clean);
  } catch (_) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) {
      try { return JSON.parse(match[0]); } catch (_2) {}
    }
    return { error: true, trade, message: 'Could not parse agent response', raw: text.slice(0, 300) };
  }
}

// ---- Handler ----
exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders() };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let driveUrl;
  try {
    ({ driveUrl } = JSON.parse(event.body || '{}'));
  } catch (e) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'Bad Request — invalid JSON body' }),
    };
  }

  if (!driveUrl) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'driveUrl is required' }),
    };
  }

  // Extract file ID from Drive URL
  const fileId = parseDriveFileId(driveUrl);
  if (!fileId) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'Could not read a Google Drive file ID from that URL. Paste the full share link.' }),
    };
  }

  let base64Data, mediaType;

  try {
    const { buffer, contentType } = await downloadFromDrive(fileId);
    mediaType   = normalizeMediaType(contentType);
    base64Data  = Buffer.from(buffer).toString('base64');
  } catch (err) {
    console.error('Drive download error:', err.message);
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: err.message }),
    };
  }

  const isPdf        = mediaType === 'application/pdf';
  const contentBlock = buildContentBlock(base64Data, mediaType);

  try {
    const [drywallText, paintText, flooringText] = await Promise.all([
      callClaude(SYSTEM_PROMPTS.drywall,   contentBlock, isPdf),
      callClaude(SYSTEM_PROMPTS.paint,     contentBlock, isPdf),
      callClaude(SYSTEM_PROMPTS.flooring,  contentBlock, isPdf),
    ]);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({
        drywall:  safeParse(drywallText,  'drywall'),
        paint:    safeParse(paintText,    'paint'),
        flooring: safeParse(flooringText, 'flooring'),
      }),
    };

  } catch (err) {
    console.error('scope-analyze error:', err);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'Analysis failed — ' + (err.message || 'please try again.') }),
    };
  }
};
