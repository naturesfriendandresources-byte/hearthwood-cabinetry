# Training progress backend — schema and expansion plan

Live data for training: video watch % and quiz results are sent from the employee portal to this backend; the manager dashboard reads from it.

---

## Supabase setup (one-time)

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:

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

3. In Supabase: **Settings → API** copy **Project URL** and **service_role** key (not anon).
4. In Netlify: **Site → Environment variables** add:
   - `SUPABASE_URL` = Project URL
   - `SUPABASE_SERVICE_KEY` = service_role key

---

## Event types (current)

| event_type       | When | payload example |
|------------------|------|------------------|
| video_progress   | User watches admin video (at 25, 50, 75, 80, 100%) | `{ percentWatched: 80 }` |
| quiz_unlocked    | User reached 80% video | `{}` |
| quiz_passed      | User passed quiz | `{ score: 3, total: 3 }` |
| module_complete  | Admin module done (video + quiz) | `{}` |

---

## API

- **POST** `/.netlify/functions/training-progress`  
  Body: `{ employee, moduleId, eventType, payload?, dateStr? }`  
  Records one event.

- **GET** `/.netlify/functions/training-progress?employee=maria&limit=50`  
  Returns `{ events: [ ... ] }` (newest first).

---

## Expansion plan

- **More modules:** Same table; use `module_id` (e.g. `admin-1`, `mozaik-w8d1`) and more `event_type` values.
- **Summary table:** Optional `nfr_training_summary` (employee, module_id, date_str, percent_watched, quiz_passed, completed_at) updated by a trigger or a second function for fast manager dashboards.
- **Auth:** Restrict POST to same-origin or add a simple API key in header; restrict GET to manager role (e.g. check session server-side or via another function).
- **Exports:** Add GET `/training-progress/export?from=&to=` for CSV/Excel later.
