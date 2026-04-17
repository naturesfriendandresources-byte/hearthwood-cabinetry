/**
 * scope-analyze.js — Netlify Serverless Function
 * Receives { fileData: "<base64>", mediaType: "image/jpeg|application/pdf" }
 * Runs 3 parallel Claude calls (drywall, paint, flooring agents)
 * Returns { drywall: {...}, paint: {...}, flooring: {...} }
 *
 * Environment variable required: ANTHROPIC_API_KEY
 */

'use strict';

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };
}

// ---- Content block builder (image vs. PDF) ----
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

  drywall: `You are a professional drywall estimator. You will receive a construction plan image or PDF. Extract all information needed to estimate a drywall scope of work.

Analyze for:
- Room names and dimensions (length × width × ceiling height)
- All wall surfaces requiring drywall (partition walls, exterior walls, special areas)
- Ceiling surfaces
- Drywall type: standard (dry areas), moisture_resistant (kitchens, baths, laundry), fire_rated (garage walls/ceilings), abuse_resistant (hallways, schools)

Calculate:
- Wall sq ft per room: perimeter × ceiling height, subtract 21 sq ft per door opening and 15 sq ft per window unless exact dimensions are shown
- Ceiling sq ft per room: room footprint
- Sheet count: total sq ft ÷ 32 (standard 4×8 sheet)
- If ceiling height is not shown, assume 9 ft

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string — what was clear vs. estimated",
  "total_wall_sqft": number,
  "total_ceiling_sqft": number,
  "total_sqft": number,
  "sheet_count_estimate": number,
  "rooms": [
    {
      "room_name": "string",
      "wall_sqft": number,
      "ceiling_sqft": number,
      "drywall_type": "standard" | "moisture_resistant" | "fire_rated" | "abuse_resistant",
      "notes": "string or null"
    }
  ],
  "scope_notes": "string — key assumptions, special conditions, items not visible on plan"
}`,

  paint: `You are a professional paint estimator. You will receive a construction plan image or PDF. Extract all information needed to estimate a paint scope of work.

Analyze for:
- Room names and dimensions (length × width × ceiling height)
- Paintable wall surfaces (drywall, plaster, concrete block — exclude tile areas)
- Ceiling surfaces
- Trim: baseboards (room perimeter), door casings (17 LF each), window casings (14 LF each), crown molding if indicated
- Special finishes: accent walls, wainscoting, painted cabinetry, textured surfaces

Calculate:
- Wall sq ft per room: gross wall area minus door (21 sq ft) and window (15 sq ft) openings
- Ceiling sq ft per room: room footprint
- Trim LF per room: baseboard perimeter + (17 × door count) + (14 × window count)
- If ceiling height is not shown, assume 9 ft

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string — what was clear vs. estimated",
  "total_wall_sqft": number,
  "total_ceiling_sqft": number,
  "total_trim_lf": number,
  "rooms": [
    {
      "room_name": "string",
      "wall_sqft": number,
      "ceiling_sqft": number,
      "trim_lf": number,
      "special_finishes": "string or null",
      "notes": "string or null"
    }
  ],
  "scope_notes": "string — painting assumptions, surface conditions, finish recommendations"
}`,

  flooring: `You are a professional flooring estimator. You will receive a construction plan image or PDF. Extract all information needed to estimate a flooring scope of work.

Analyze for:
- Room names and square footage (length × width)
- Flooring type per room: hardwood, lvp_lvt (luxury vinyl plank/tile), tile, carpet, concrete, or unknown if not indicated
- Room-to-room transitions (doorways where flooring type changes)
- Step-downs, raised platforms, or pattern indicators

Calculate:
- Net sq ft per room: room footprint
- Add waste factor: 10% for hardwood/lvp_lvt, 15% for tile, 5% for carpet
- Transition strips: count doorways between rooms with different flooring types

Return ONLY valid JSON — no markdown, no explanation, no code fences:
{
  "confidence": "high" | "medium" | "low",
  "confidence_note": "string — what was clear vs. estimated",
  "total_sqft_net": number,
  "total_sqft_with_waste": number,
  "transition_strips": number,
  "rooms": [
    {
      "room_name": "string",
      "sqft_net": number,
      "sqft_with_waste": number,
      "flooring_type": "hardwood" | "lvp_lvt" | "tile" | "carpet" | "concrete" | "unknown",
      "waste_factor_pct": number,
      "notes": "string or null"
    }
  ],
  "scope_notes": "string — flooring type assumptions, subfloor conditions if noted, special installation notes"
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

// ---- JSON parser with fallback ----
function safeParse(text, trade) {
  try {
    const clean = text
      .replace(/^```(?:json)?\s*/i, '')
      .replace(/\s*```$/i, '')
      .trim();
    return JSON.parse(clean);
  } catch (_) {
    // Try to extract a JSON object from the response
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

  let fileData, mediaType;
  try {
    ({ fileData, mediaType } = JSON.parse(event.body || '{}'));
  } catch (e) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'Bad Request — invalid JSON body' }),
    };
  }

  if (!fileData || !mediaType) {
    return {
      statusCode: 400,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'fileData and mediaType are required' }),
    };
  }

  const isPdf        = mediaType === 'application/pdf';
  const contentBlock = buildContentBlock(fileData, mediaType);

  try {
    // Run all 3 agents in parallel
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
      body: JSON.stringify({ error: 'Analysis failed — please try again.' }),
    };
  }
};
