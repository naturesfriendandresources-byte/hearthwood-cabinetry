/**
 * agreements.js — Netlify Serverless Function
 * Handles agreement storage so all devices share the same data (no more localStorage-only).
 *
 * GET  /.netlify/functions/agreements           → all agreements
 * GET  /.netlify/functions/agreements?status=X  → filtered by status
 * GET  /.netlify/functions/agreements?id=AGR-X  → single agreement
 * POST /.netlify/functions/agreements           → upsert (body: { agreement: {...} })
 *
 * Storage: Supabase — table nfr_agreements
 * Env vars required: SUPABASE_URL, SUPABASE_SERVICE_KEY
 */

'use strict';

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  };
}

async function fetchAgreements(supabaseUrl, serviceKey, opts) {
  const { status, id } = opts || {};
  let url = `${supabaseUrl}/rest/v1/nfr_agreements?order=created_at.desc`;
  if (id)     url += `&id=eq.${encodeURIComponent(id)}`;
  if (status) url += `&status=eq.${encodeURIComponent(status)}`;

  const res = await fetch(url, {
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
    },
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Supabase fetch failed: ${res.status} ${t}`);
  }
  const rows = await res.json();
  // Return the full agreement objects stored in the `data` column
  return rows.map(r => r.data);
}

async function upsertAgreement(supabaseUrl, serviceKey, agr) {
  const row = {
    id:         agr.id,
    created_by: agr.created_by,
    created_at: agr.created_at,
    status:     agr.status,
    updated_at: new Date().toISOString(),
    data:       agr,
  };

  const res = await fetch(`${supabaseUrl}/rest/v1/nfr_agreements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Prefer': 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(row),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Supabase upsert failed: ${res.status} ${t}`);
  }
}

exports.handler = async function (event) {
  const origin = event.headers?.origin || event.headers?.referer || '*';

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders(origin), body: '' };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SERVICE_KEY  = process.env.SUPABASE_SERVICE_KEY;

  if (!SUPABASE_URL || !SERVICE_KEY) {
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: 'Supabase env vars not set' }),
    };
  }

  try {
    if (event.httpMethod === 'GET') {
      const params = event.queryStringParameters || {};
      const agreements = await fetchAgreements(SUPABASE_URL, SERVICE_KEY, {
        status: params.status,
        id:     params.id,
      });
      return {
        statusCode: 200,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
        body: JSON.stringify(agreements),
      };
    }

    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body || '{}');
      if (!body.agreement || !body.agreement.id) {
        return {
          statusCode: 400,
          headers: corsHeaders(origin),
          body: JSON.stringify({ error: 'Missing agreement or agreement.id' }),
        };
      }
      await upsertAgreement(SUPABASE_URL, SERVICE_KEY, body.agreement);
      return {
        statusCode: 200,
        headers: { ...corsHeaders(origin), 'Content-Type': 'application/json' },
        body: JSON.stringify({ ok: true }),
      };
    }

    return { statusCode: 405, headers: corsHeaders(origin), body: 'Method not allowed' };

  } catch (err) {
    console.error('agreements function error:', err);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: err.message }),
    };
  }
};
