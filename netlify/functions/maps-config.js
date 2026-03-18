/**
 * maps-config.js — Serves Google Maps API key from Netlify env vars.
 * Agreement portal fetches this on load; key never stored client-side.
 *
 * Environment variable required:
 *   GOOGLE_MAPS_KEY — set in Netlify → Site settings → Environment variables
 */

'use strict';

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({ key: process.env.GOOGLE_MAPS_KEY || '' }),
  };
};
