-- schema_inquiries.sql

-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- 1. Contact Inquiries Table
create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  pathname text,
  source text default 'website',
  metadata jsonb default '{}'::jsonb
);

-- Enable RLS for contact_inquiries
alter table public.contact_inquiries enable row level security;

-- Policies for contact_inquiries (Private: Service Role only)
drop policy if exists "Allow anon insert contact_inquiries" on public.contact_inquiries;
drop policy if exists "Deny anon select contact_inquiries" on public.contact_inquiries;
drop policy if exists "Allow service role full access contact_inquiries" on public.contact_inquiries;

create policy "Service role full access contact_inquiries" 
on public.contact_inquiries for all 
to service_role 
using (true) 
with check (true);

-- 2. Quote Requests Table
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  trip_dates text,
  budget text,
  message text not null,
  source text default 'website',
  status text not null default 'pending',
  metadata jsonb default '{}'::jsonb
);

-- Enable RLS for quote_requests
alter table public.quote_requests enable row level security;

-- Policies for quote_requests (Private: Service Role only)
drop policy if exists "Allow anon insert quote_requests" on public.quote_requests;
drop policy if exists "Deny anon select quote_requests" on public.quote_requests;
drop policy if exists "Allow service role full access quote_requests" on public.quote_requests;

create policy "Service role full access quote_requests" 
on public.quote_requests for all 
to service_role 
using (true) 
with check (true);

-- Create indexes on created_at for performance
create index if not exists idx_contact_inquiries_created_at on public.contact_inquiries (created_at desc);
create index if not exists idx_quote_requests_created_at on public.quote_requests (created_at desc);
