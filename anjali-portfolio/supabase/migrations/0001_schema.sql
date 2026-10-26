-- Anjali portfolio schema. Run in the Supabase SQL editor.
create extension if not exists pgcrypto;

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null, slug text not null unique, description text not null,
  image_url text, technologies text[] not null default '{}',
  repository_url text, live_demo_url text,
  featured boolean not null default false, sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create table public.certificates (
  id uuid primary key default gen_random_uuid(),
  title text not null, issuer text, issue_date date,
  category text not null default 'Other' check (category in ('Development','AI / ML','Cloud','Security','Other')),
  file_url text, verification_url text, created_at timestamptz not null default now()
);
create table public.experiences (
  id uuid primary key default gen_random_uuid(),
  title text not null, organization text, description text,
  start_date date, end_date date,
  category text not null check (category in ('hackathon','project','training','certification','award')),
  proof_url text, created_at timestamptz not null default now()
);
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 254),
  subject text not null check (char_length(subject) between 3 and 150),
  message text not null check (char_length(message) between 10 and 2000),
  created_at timestamptz not null default now()
);
create index projects_sort_idx on public.projects (sort_order);
create index certificates_category_idx on public.certificates (category);
create index contact_email_time_idx on public.contact_messages (lower(email), created_at desc);

alter table public.projects enable row level security;
alter table public.certificates enable row level security;
alter table public.experiences enable row level security;
alter table public.contact_messages enable row level security;

-- Public read for portfolio content.
create policy "public read projects" on public.projects for select using (true);
create policy "public read certificates" on public.certificates for select using (true);
create policy "public read experiences" on public.experiences for select using (true);

-- Admin = authenticated user whose app_metadata.role is 'admin'.
-- Set it in the dashboard or with the service role: auth.users.raw_app_meta_data = '{"role":"admin"}'.
-- app_metadata cannot be edited by users, unlike user_metadata.
create function public.is_admin() returns boolean language sql stable as
$$ select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin' $$;

create policy "admin write projects" on public.projects for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin write certificates" on public.certificates for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin write experiences" on public.experiences for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admin read messages" on public.contact_messages for select to authenticated using (public.is_admin());
create policy "admin delete messages" on public.contact_messages for delete to authenticated using (public.is_admin());
-- No anon policy on contact_messages: visitors cannot read or insert directly.

-- Visitors submit through this function only. It validates, blocks bots (honeypot)
-- and limits each email to 3 messages per hour.
create function public.submit_contact(p_name text, p_email text, p_subject text, p_message text, p_website text default '')
returns void language plpgsql security definer set search_path = public as $$
begin
  if coalesce(p_website, '') <> '' then return; end if;  -- honeypot: silently drop bots
  if (select count(*) from contact_messages
      where lower(email) = lower(p_email) and created_at > now() - interval '1 hour') >= 3 then
    raise exception 'rate limit exceeded';
  end if;
  if (select count(*) from contact_messages where created_at > now() - interval '1 minute') >= 20 then
    raise exception 'rate limit exceeded';
  end if;
  insert into contact_messages (name, email, subject, message)
  values (trim(p_name), trim(p_email), trim(p_subject), trim(p_message));
end $$;
revoke all on function public.submit_contact from public;
grant execute on function public.submit_contact to anon, authenticated;
