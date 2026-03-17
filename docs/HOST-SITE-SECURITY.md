# Host site security (hearthwoodcabinetry.com)

What we do to keep the live site and staff portal secure. **Add to this list; don’t remove without saying why.**

---

## HTTPS

- Netlify serves the site over **HTTPS** by default. No action needed unless you use a custom domain without SSL (Netlify provides free TLS).
- Staff portal and all pages should be loaded over HTTPS so passwords and session data aren’t sent in the clear.

---

## Secrets and env vars

- **No API keys, passwords, or secrets in the repo.** Nothing in `staff/` or `netlify/functions/` should contain live keys.
- **Backend secrets** (e.g. Supabase): set only in **Netlify → Site configuration → Environment variables**. Used by serverless functions (e.g. `training-progress.js`); never exposed to the browser.
- **Staff portal passwords:** Jose issues them and records in `team/staff-portal-logins.md` (gitignored). Passwords are stored in the user’s browser (localStorage) after first sign-in; we don’t send them to our server. See `team/sops/staff-portal-login-and-passwords.md`.

---

## Access control

- **Staff pages:** Protected by `NFRAuth` in `staff/js/auth.js`. User must sign in; role determines which portals (agreements, training, etc.) they see. No role = no access to protected pages.
- **Training progress API:** Netlify function reads/writes Supabase. No auth on the function today; consider adding a shared secret or Netlify Identity later if you need to restrict who can POST. GET is used by the manager dashboard (live progress).
- **GitHub:** Repo is under NFR’s org. Push only with approval (github-push-with-approval). Add collaborators explicitly.

---

## What to do when adding features

- **New env vars** (e.g. another API): add in Netlify env only; reference in code as `process.env.VAR_NAME` in functions only.
- **New staff pages:** Use `NFRAuth.requireAuth('portal-key')` and add the key to the right role in `auth.js`.
- **Sensitive data:** Never log or expose Supabase keys, passwords, or PII in client-side JS or in repo history.

---

## Quick checklist

| Item | Status |
|------|--------|
| HTTPS for site and staff | Netlify default |
| No secrets in repo | Enforced |
| Supabase keys in Netlify env only | Yes |
| Staff passwords: Jose issues, stored off-repo | Yes |
| Role-based portal access (NFRAuth) | Yes |
| Push to GitHub with approval | Yes (skill) |
