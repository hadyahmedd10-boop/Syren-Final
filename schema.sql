-- Testimonials Table Schema
create table if not exists public.testimonials ( 
   id uuid primary key default gen_random_uuid(), 
   created_at timestamptz not null default now(), 
   name text not null, 
   email text, 
   rating int check (rating >= 1 and rating <= 5), 
   destination text, 
   experience_slug text, 
   message text not null, 
   approved boolean not null default false 
 ); 
 
 create index if not exists testimonials_approved_created_at_idx 
 on public.testimonials (approved, created_at desc);

-- Enable Row Level Security (RLS)
alter table public.testimonials enable row level security; 
 
 -- Public can read ONLY approved 
 drop policy if exists "Public read approved" on public.testimonials; 
 create policy "Public read approved" 
 on public.testimonials for select 
 using (approved = true); 
 
 -- Public can insert new testimonials (approved stays false) 
 drop policy if exists "Public insert" on public.testimonials; 
 create policy "Public insert" 
 on public.testimonials for insert 
 with check (approved = false); 
 
 -- Policy to allow authenticated service role to manage testimonials
 drop policy if exists "Allow service role to manage testimonials" on public.testimonials;
 create policy "Allow service role to manage testimonials" 
 on public.testimonials for all 
 using (auth.jwt()->>'role' = 'service_role');

-- Quote Requests Table
create table quote_requests (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  trip_dates text,
  budget text,
  message text not null,
  status text default 'pending',
  created_at timestamp with time zone default now()
);

-- Enable RLS for quote_requests
alter table quote_requests enable row level security;

-- Only service role can manage quote_requests (no public policies needed if using service role key in API)
-- But we can add a policy for admin read if needed in the future
create policy "Allow service role full access" 
on quote_requests for all 
using (auth.jwt()->>'role' = 'service_role');
