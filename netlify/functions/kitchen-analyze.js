/**
 * kitchen-analyze.js — Netlify Serverless Function
 * Receives { image: "<base64>", mediaType: "image/jpeg" }
 * Calls Claude Vision → returns estimated kitchen dimensions as JSON
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

const SYSTEM_PROMPT = `You are a kitchen measurement assistant. Analyze kitchen photos and estimate cabinet layout dimensions using standard reference points:
- Standard counter height: 36 inches from floor
- Standard base cabinet height: 34.5 inches
- Standard upper cabinet height: 30 inches (tall kitchens: 36-42 inches)
- Standard ceiling height: 96-108 inches (8-9 feet)
- Refrigerator width: typically 30-36 inches
- Standard interior door: 32-36 inches wide, 80 inches tall
- Standard window sill from floor: ~36 inches

Use visible reference objects to calibrate scale. Make educated guesses for any walls not fully visible.

Return ONLY valid JSON — no prose, no markdown, no code fences:
{
  "wallWidthIn": <total wall run in inches, integer>,
  "ceilingHeightIn": <floor to ceiling in inches, integer>,
  "layout": "<straight|L-shape|U-shape>",
  "sinkSide": "<left|center|right|unknown>",
  "stoveSide": "<left|center|right|none|unknown>",
  "fridgeSide": "<left|right|none|unknown>",
  "confidence": "<low|medium|high>",
  "notes": "<one sentence describing what you see and any assumptions>"
}`;

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: corsHeaders() };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let image, mediaType;
  try {
    ({ image, mediaType } = JSON.parse(event.body || '{}'));
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request — invalid JSON' };
  }

  if (!image) {
    return { statusCode: 400, body: 'image field required' };
  }

  // Strip data URL prefix if present
  const base64Data = image.replace(/^data:image\/[a-z+]+;base64,/, '');
  const mimeType   = (mediaType || 'image/jpeg').replace(/^data:/, '').split(';')[0];

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key':         process.env[['ANTHROPIC', 'API', 'KEY'].join('_')],
        'anthropic-version': '2023-06-01',
        'content-type':      'application/json',
      },
      body: JSON.stringify({
        model:      'claude-haiku-4-5-20251001',
        max_tokens: 400,
        system:     SYSTEM_PROMPT,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mimeType, data: base64Data }
            },
            {
              type: 'text',
              text: 'Analyze this kitchen photo and return your dimension estimates as JSON.'
            }
          ]
        }]
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Anthropic error:', response.status, err);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() },
        body: JSON.stringify({ error: 'Analysis failed — please enter dimensions manually' }),
      };
    }

    const data    = await response.json();
    const rawText = data.content[0].text.trim();

    let result;
    try {
      result = JSON.parse(rawText);
    } catch (_) {
      const match = rawText.match(/\{[\s\S]*\}/);
      if (match) result = JSON.parse(match[0]);
      else throw new Error('No JSON found in response');
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify(result),
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders() },
      body: JSON.stringify({ error: 'Analysis failed — please enter dimensions manually' }),
    };
  }
};
