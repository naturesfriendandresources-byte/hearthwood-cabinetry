/**
 * training-progress.js — Netlify Serverless Function
 * POST: record training progress (video %, quiz pass). GET: fetch recent events for manager live view.
 * Storage: Supabase (set SUPABASE_URL and SUPABASE_SERVICE_KEY in Netlify env).
 * Plan: expand with more event types and tables as needed.
 */

'use strict';

const FUNCTION_PATH = '/.netlify/functions/training-progress';

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };
}

async function insertEvent(supabaseUrl, serviceKey, row) {
  const res = await fetch(`${supabaseUrl}/rest/v1/nfr_training_events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Supabase insert failed: ${res.status} ${t}`);
  }
}

async function fetchEvents(supabaseUrl, serviceKey, opts) {
  const { employee, limit = 50 } = opts || {};
  let url = `${supabaseUrl}/rest/v1/nfr_training_events?order=created_at.desc&limit=${limit}`;
  if (employee) url += `&employee=eq.${encodeURIComponent(employee)}`;
  const res = await fetch(url, {
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
    },
  });
  if (!res.ok) throw new Error(`Supabase fetch failed: ${res.status}`);
  return res.json();
}

exports.handler = async (event, context) => {
  const origin = event.headers.origin || event.headers.Origin || '*';
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_KEY;

  if (!supabaseUrl || !serviceKey) {
    const body = JSON.stringify({
      error: 'Backend not configured',
      hint: 'Set SUPABASE_URL and SUPABASE_SERVICE_KEY in Netlify environment variables.',
    });
    return {
      statusCode: 503,
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      body,
    };
  }

  try {
    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      const { employee, moduleId, eventType, payload, dateStr } = body;
      if (!employee || !moduleId || !eventType) {
        return {
          statusCode: 400,
          headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
          body: JSON.stringify({ error: 'Missing employee, moduleId, or eventType' }),
        };
      }
      await insertEvent(supabaseUrl, serviceKey, {
        employee,
        module_id: moduleId,
        event_type: eventType,
        payload: payload || {},
        date_str: dateStr || null,
      });
      return {
        statusCode: 204,
        headers: corsHeaders(origin),
        body: '',
      };
    }

    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters || {};
      const events = await fetchEvents(supabaseUrl, serviceKey, {
        employee: params.employee,
        limit: parseInt(params.limit, 10) || 50,
      });
      return {
        statusCode: 200,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
        body: JSON.stringify({ events }),
      };
    }

    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: '',
    };
  } catch (err) {
    console.error('training-progress error', err);
    return {
      statusCode: 500,
      headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
