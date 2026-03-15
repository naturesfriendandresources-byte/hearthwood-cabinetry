/**
 * nfr-assistant-widget.js — NFR Tools Portal
 * Self-contained floating chat widget. No dependencies.
 * Injects its own CSS and DOM. Posts to /.netlify/functions/nfr-assistant.
 */

(function () {
  'use strict';

  var FUNCTION_URL = '/.netlify/functions/nfr-assistant';
  var messages = [];

  // ── Session context ───────────────────────────────────────────────────────
  function getContext() {
    var page = window.location.pathname.split('/').pop() || 'unknown';
    var role = 'unknown';
    try {
      var s = JSON.parse(sessionStorage.getItem('nfr_session') || 'null');
      if (s && s.role) role = s.role;
    } catch (e) {}
    return { page: page, role: role };
  }

  // ── Styles ────────────────────────────────────────────────────────────────
  var styleEl = document.createElement('style');
  styleEl.textContent = [
    '#nfr-chat-bubble{',
      'position:fixed;bottom:24px;right:24px;',
      'width:52px;height:52px;border-radius:50%;',
      'background:#1C2B4A;color:#C9A96E;',
      'font-size:22px;font-weight:700;font-family:Lato,sans-serif;',
      'border:none;cursor:pointer;',
      'box-shadow:0 4px 16px rgba(0,0,0,.25);',
      'z-index:9998;',
      'display:flex;align-items:center;justify-content:center;',
      'transition:transform .15s,box-shadow .15s;',
    '}',
    '#nfr-chat-bubble:hover{transform:scale(1.08);box-shadow:0 6px 20px rgba(0,0,0,.32);}',

    '#nfr-chat-panel{',
      'position:fixed;bottom:88px;right:24px;',
      'width:360px;height:500px;',
      'background:#fff;border-radius:12px;',
      'box-shadow:0 8px 32px rgba(0,0,0,.22);',
      'z-index:9999;',
      'display:flex;flex-direction:column;overflow:hidden;',
      'transform:translateY(20px);opacity:0;pointer-events:none;',
      'transition:transform .2s ease,opacity .2s ease;',
      'font-family:Lato,sans-serif;',
    '}',
    '#nfr-chat-panel.nfr-open{transform:translateY(0);opacity:1;pointer-events:all;}',

    '.nfr-ch{',
      'background:#1C2B4A;color:#fff;',
      'padding:14px 16px;',
      'display:flex;align-items:center;justify-content:space-between;',
      'flex-shrink:0;',
    '}',
    '.nfr-ch-title{font-size:15px;font-weight:700;letter-spacing:.03em;}',
    '.nfr-ch-sub{font-size:11px;color:#C9A96E;margin-top:2px;}',
    '.nfr-ch-close{',
      'background:none;border:none;color:#8BA888;',
      'font-size:18px;cursor:pointer;',
      'padding:2px 6px;border-radius:4px;line-height:1;',
    '}',
    '.nfr-ch-close:hover{color:#fff;background:rgba(255,255,255,.1);}',

    '.nfr-cb{',
      'flex:1;overflow-y:auto;',
      'padding:16px;',
      'display:flex;flex-direction:column;gap:10px;',
    '}',

    '.nfr-msg{',
      'max-width:88%;padding:9px 13px;border-radius:10px;',
      'font-size:13.5px;line-height:1.5;word-wrap:break-word;',
    '}',
    '.nfr-msg-assistant{background:#f4f4f4;color:#222;align-self:flex-start;border-bottom-left-radius:3px;}',
    '.nfr-msg-user{background:#1C2B4A;color:#fff;align-self:flex-end;border-bottom-right-radius:3px;}',
    '.nfr-msg-typing{background:#f4f4f4;color:#888;align-self:flex-start;font-style:italic;font-size:13px;}',

    '.nfr-ci{',
      'border-top:1px solid #e8e8e8;',
      'padding:10px 12px;',
      'display:flex;gap:8px;flex-shrink:0;',
    '}',
    '.nfr-ci textarea{',
      'flex:1;border:1px solid #ddd;border-radius:8px;',
      'padding:8px 10px;font-family:Lato,sans-serif;font-size:13.5px;',
      'resize:none;outline:none;line-height:1.4;',
      'max-height:80px;overflow-y:auto;',
    '}',
    '.nfr-ci textarea:focus{border-color:#1C2B4A;}',
    '.nfr-ci button{',
      'background:#C9A96E;color:#1C2B4A;',
      'border:none;border-radius:8px;',
      'padding:8px 14px;font-weight:700;font-size:13px;',
      'cursor:pointer;transition:background .15s;white-space:nowrap;',
    '}',
    '.nfr-ci button:hover{background:#b8935a;}',
    '.nfr-ci button:disabled{opacity:.5;cursor:not-allowed;}',
  ].join('');
  document.head.appendChild(styleEl);

  // ── DOM ───────────────────────────────────────────────────────────────────
  var bubble = document.createElement('button');
  bubble.id = 'nfr-chat-bubble';
  bubble.title = 'NFR Assistant';
  bubble.setAttribute('aria-label', 'Open NFR Assistant');
  bubble.textContent = '?';

  var panel = document.createElement('div');
  panel.id = 'nfr-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'NFR Assistant chat');
  panel.innerHTML =
    '<div class="nfr-ch">' +
      '<div><div class="nfr-ch-title">NFR Assistant</div>' +
      '<div class="nfr-ch-sub">Portal help &amp; policy questions</div></div>' +
      '<button class="nfr-ch-close" id="nfr-cc" title="Close" aria-label="Close">&#x2715;</button>' +
    '</div>' +
    '<div class="nfr-cb" id="nfr-cb"></div>' +
    '<div class="nfr-ci">' +
      '<textarea id="nfr-ta" rows="2" placeholder="Ask a question\u2026"></textarea>' +
      '<button id="nfr-sb">Send</button>' +
    '</div>';

  document.body.appendChild(bubble);
  document.body.appendChild(panel);

  var chatBody = document.getElementById('nfr-cb');
  var textarea = document.getElementById('nfr-ta');
  var sendBtn  = document.getElementById('nfr-sb');
  var closeBtn = document.getElementById('nfr-cc');

  // ── Welcome message ───────────────────────────────────────────────────────
  appendMsg('assistant', 'Hi! I\'m the NFR Assistant. Ask me about portal access, training videos, policies, or any portal question.');

  // ── Helpers ───────────────────────────────────────────────────────────────
  function appendMsg(role, text) {
    var el = document.createElement('div');
    el.className = 'nfr-msg nfr-msg-' + role;
    el.textContent = text;
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;
    return el;
  }

  // ── Toggle ────────────────────────────────────────────────────────────────
  bubble.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('nfr-open');
    if (isOpen) textarea.focus();
  });

  closeBtn.addEventListener('click', function () {
    panel.classList.remove('nfr-open');
  });

  // ── Send ──────────────────────────────────────────────────────────────────
  function send() {
    var text = textarea.value.trim();
    if (!text || sendBtn.disabled) return;

    textarea.value = '';
    sendBtn.disabled = true;
    appendMsg('user', text);
    messages.push({ role: 'user', content: text });

    var typing = appendMsg('typing', 'NFR Assistant is typing\u2026');
    var ctx = getContext();

    fetch(FUNCTION_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages, page: ctx.page, role: ctx.role }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        chatBody.removeChild(typing);
        var reply = (data && data.reply)
          ? data.reply
          : 'Sorry, I could not get a response. Please try again or contact Jose directly.';
        appendMsg('assistant', reply);
        messages.push({ role: 'assistant', content: reply });
        sendBtn.disabled = false;
        textarea.focus();
      })
      .catch(function () {
        chatBody.removeChild(typing);
        appendMsg('assistant', 'Connection error. Please check your internet and try again.');
        sendBtn.disabled = false;
      });
  }

  sendBtn.addEventListener('click', send);
  textarea.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });

})();
