# Supabase setup for training progress (one-time)

Do this once so the manager dashboard gets **live data** (video % watched, quiz pass) from the training portal.

---

## Step 1 — Create Supabase project

1. Go to [supabase.com](https://supabase.com) → Sign in or create account.
2. **New project** → Pick org, name (e.g. `nfr-training`), database password, region. Create.
3. Wait for the project to be ready.

---

## Step 2 — Create the table

1. In the Supabase dashboard: **SQL Editor** → **New query**.
2. Paste and run this (same as in `training-backend-schema.md`):

```sql
create table if not exists nfr_training_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  employee text not null,
  module_id text not null,
  event_type text not null,
  payload jsonb default '{}',
  date_str text
);

create index if not exists idx_nfr_training_events_created_at on nfr_training_events(created_at desc);
create index if not exists idx_nfr_training_events_employee on nfr_training_events(employee);
create index if not exists idx_nfr_training_events_date on nfr_training_events(date_str);
```

3. Confirm the table `nfr_training_events` appears under **Table Editor**.

---

## Step 3 — Get URL and key

1. **Settings** (gear) → **API**.
2. Copy:
   - **Project URL** (e.g. `https://xxxxx.supabase.co`)
   - **service_role** key (under "Project API keys" — use this one, not anon for the server function)

---

## Step 4 — Add to Netlify

1. Netlify → your **hearthwood-cabinetry** site → **Site configuration** → **Environment variables**.
2. **Add a variable** → **Add a single variable** (or "Add from .env").
3. Add:
   - Key: `SUPABASE_URL` → Value: your Project URL.
   - Key: `SUPABASE_SERVICE_KEY` → Value: your service_role key.
4. Save. Redeploy the site (or trigger a deploy) so the function picks up the new vars.

---

## Done

After deploy, the training portal will send video progress and quiz results to Supabase, and the manager **Live progress** section will show data (refreshes every 30s).
