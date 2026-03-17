/**
 * auth.js — NFR Staff Portal
 * Unified auth module. Load on every protected page.
 * Exposes window.NFRAuth (new API) and window.auth (backwards-compat for training JS).
 */

(function () {
  'use strict';

  // ── User config ────────────────────────────────────────────────────────────
  // portals[] controls which dashboard cards each user sees AND which pages they can access.

  const NFR_ROLES = {
    'owner': {
      portals: ['agreements','po','jen','calculator','contract','training-manager','curriculum'],
    },
    'office-design-coordinator': {
      portals: ['agreements','po','training-employee'],
    },
    'field-manager': {
      portals: ['training-employee'],
    },
    'warehouse-cnc-operator': {
      portals: ['scott-training', 'inventory'],
    },
    'accounting': {
      portals: ['jen', 'training-employee', 'inventory'],
    },
  };

  const NFR_USERS = {
    jose:  { name: 'Jose Martinez', role: 'owner' },
    maria: { name: 'Maria',         role: 'office-design-coordinator' },
    jen:   { name: 'Jen',           role: 'accounting' },
    scott: { name: 'Scott',         role: 'warehouse-cnc-operator' },
    jorge: { name: 'Jorge',         role: 'field-manager' },
  };

  // ── Default passwords — work on any device on first login ─────────────────
  // After first login on any device, password is saved to localStorage automatically.
  // To change: update the value here and redeploy.
  const DEFAULT_PASSWORDS = {
    jose:  btoa(unescape(encodeURIComponent('NFRjose2024'))),
    maria: btoa(unescape(encodeURIComponent('maria'))),
    jorge: btoa(unescape(encodeURIComponent('jorge'))),
    scott: btoa(unescape(encodeURIComponent('scott'))),
    jen:   btoa(unescape(encodeURIComponent('jen'))),
  };

  // ── Password storage (base64, keyed by username) ───────────────────────────
  // Compatible with the existing nfr_staff_passwords store from old index.html.

  function getPwStore()   { return JSON.parse(localStorage.getItem('nfr_staff_passwords') || '{}'); }
  function savePwStore(o) { localStorage.setItem('nfr_staff_passwords', JSON.stringify(o)); }
  function encode(pw)     { return btoa(unescape(encodeURIComponent(pw))); }

  function hasPassword(username) { return !!getPwStore()[username]; }
  function checkPassword(username, pw) { return getPwStore()[username] === encode(pw); }
  function setPassword(username, pw) {
    var s = getPwStore();
    s[username] = encode(pw);
    savePwStore(s);
  }

  // ── Login ──────────────────────────────────────────────────────────────────
  // First-time: if no password set, we set it from what they typed and log in (one step).
  // rememberMe: persist session in localStorage so they stay logged in.

  function login(username, password, rememberMe) {
    var u = NFR_USERS[username];
    if (!u) return { ok: false, reason: 'unknown-user' };
    var encoded = encode(password || '');
    if (!hasPassword(username)) {
      // New device — check against default password
      if (DEFAULT_PASSWORDS[username] && encoded !== DEFAULT_PASSWORDS[username]) {
        return { ok: false, reason: 'bad-password' };
      }
      if (!password || password.length < 4) return { ok: false, reason: 'password-too-short' };
      setPassword(username, password); // Save to localStorage so future logins are fast
    } else if (!checkPassword(username, password)) {
      return { ok: false, reason: 'bad-password' };
    }

    var roleDef = NFR_ROLES[u.role];
    if (!roleDef) return { ok: false, reason: 'unknown-role' };

    var employeeKey = (u.role === 'owner') ? null : username;

    var session = {
      user:       username,
      name:       u.name,
      role:       u.role,
      employee:   employeeKey,
      portals:    roleDef.portals,
      loggedInAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem('nfr_session', JSON.stringify(session));
      if (rememberMe) {
        localStorage.setItem('nfr_session', JSON.stringify(session));
        localStorage.setItem('nfr_remember_me', '1');
      } else {
        localStorage.removeItem('nfr_session');
        localStorage.removeItem('nfr_remember_me');
      }
    } catch (e) {
      return { ok: false, reason: 'storage-error' };
    }

    // Write training backwards-compat session keys so training JS files work unchanged.
    var isManager      = roleDef.portals.indexOf('training-manager')  !== -1;
    var isEmployee     = roleDef.portals.indexOf('training-employee') !== -1;
    var isScottTraining = roleDef.portals.indexOf('scott-training')   !== -1;
    if (isManager) {
      sessionStorage.setItem('tp_role',     'manager');
      sessionStorage.setItem('tp_employee', '');
      sessionStorage.setItem('tp_name',     u.name);
    } else if (isEmployee) {
      sessionStorage.setItem('tp_role',     'employee');
      sessionStorage.setItem('tp_employee', employeeKey || '');
      sessionStorage.setItem('tp_name',     u.name);
    } else if (isScottTraining) {
      sessionStorage.setItem('tp_role',     'employee');
      sessionStorage.setItem('tp_employee', employeeKey || '');
      sessionStorage.setItem('tp_name',     u.name);
    }

    return { ok: true, session: session };
  }

  // ── Logout ─────────────────────────────────────────────────────────────────

  function logout() {
    try {
      sessionStorage.removeItem('nfr_session');
      sessionStorage.removeItem('tp_role');
      sessionStorage.removeItem('tp_employee');
      sessionStorage.removeItem('tp_name');
      localStorage.removeItem('nfr_session');
      localStorage.removeItem('nfr_remember_me');
    } catch (e) { /* ignore */ }
    window.location.href = 'index.html';
  }

  // ── Session ────────────────────────────────────────────────────────────────

  function getSession() {
    try {
      var s = sessionStorage.getItem('nfr_session');
      if (s) return JSON.parse(s);
      if (localStorage.getItem('nfr_remember_me') && localStorage.getItem('nfr_session')) {
        var persisted = JSON.parse(localStorage.getItem('nfr_session'));
        sessionStorage.setItem('nfr_session', localStorage.getItem('nfr_session'));
        var roleDef = NFR_ROLES[persisted.role];
        if (roleDef) {
          var isManager = roleDef.portals.indexOf('training-manager') !== -1;
          var isEmployee = roleDef.portals.indexOf('training-employee') !== -1;
          var isScott = roleDef.portals.indexOf('scott-training') !== -1;
          if (isManager) {
            sessionStorage.setItem('tp_role', 'manager');
            sessionStorage.setItem('tp_employee', '');
            sessionStorage.setItem('tp_name', persisted.name);
          } else if (isEmployee || isScott) {
            sessionStorage.setItem('tp_role', 'employee');
            sessionStorage.setItem('tp_employee', persisted.employee || '');
            sessionStorage.setItem('tp_name', persisted.name);
          }
        }
        return persisted;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  // ── requireAuth ────────────────────────────────────────────────────────────
  // Call at the top of every protected page: NFRAuth.requireAuth('portal-key');
  // Redirects to index.html if not logged in or user lacks access to that portal.

  function requireAuth(portalKey) {
    var session = getSession();
    if (!session) {
      window.location.replace('index.html');
      return null;
    }
    if (portalKey && session.portals.indexOf(portalKey) === -1) {
      window.location.replace('index.html');
      return null;
    }
    return session;
  }

  // ── canAccess ──────────────────────────────────────────────────────────────
  // Returns bool — use for conditional UI without redirecting.

  function canAccess(portal) {
    var session = getSession();
    return !!(session && session.portals.indexOf(portal) !== -1);
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  window.NFRAuth = {
    login:        login,
    logout:       logout,
    getSession:   getSession,
    requireAuth:  requireAuth,
    canAccess:    canAccess,
    // Internals exposed for index.html first-time setup flow
    hasPassword:  hasPassword,
    setPassword:  setPassword,
    users:        NFR_USERS,
    roles:        NFR_ROLES,
  };

  // ── Backwards-compat: window.auth ──────────────────────────────────────────
  // Training JS files (training-employee.js, training-manager.js) call:
  //   auth.requireAuth('employee') / auth.requireAuth('manager')
  //   auth.logout
  //   auth.getSession()
  // The tp_role/tp_employee/tp_name keys are written at login above.

  window.auth = {
    requireAuth: function (role) {
      // role = 'employee' | 'manager' (training portal convention)
      var portalKey = role === 'manager' ? 'training-manager' : 'training-employee';
      var session   = requireAuth(portalKey);
      if (!session) return null;
      // Return in training-portal session shape
      return {
        role:     sessionStorage.getItem('tp_role')     || role,
        employee: sessionStorage.getItem('tp_employee') || '',
        name:     sessionStorage.getItem('tp_name')     || session.name,
      };
    },
    logout:     logout,
    getSession: function () {
      return {
        role:     sessionStorage.getItem('tp_role')     || '',
        employee: sessionStorage.getItem('tp_employee') || '',
        name:     sessionStorage.getItem('tp_name')     || '',
      };
    },
  };

})();
