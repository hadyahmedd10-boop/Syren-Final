-- Testimonials Table Schema
create table testimonials ( 
   id uuid default uuid_generate_v4() primary key, 
   name text not null, 
   email text, 
   message text not null, 
   rating int check (rating >= 1 and rating <= 5), 
   approved boolean default false, 
   created_at timestamp with time zone default now() 
 );

-- Enable Row Level Security (RLS)
alter table testimonials enable row level security;

-- Policy to allow only authenticated service role to insert testimonials
-- Public submissions must go through the /api/testimonials/submit route
create policy "Allow service role to manage testimonials" 
on testimonials for all 
using (auth.jwt()->>'role' = 'service_role');

-- Policy to allow anyone to read approved testimonials
create policy "Allow public to read approved testimonials" 
on testimonials for select 
using (approved = true);

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
