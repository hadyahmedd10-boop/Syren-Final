-- Testimonials Table Schema
create table testimonials ( 
   id uuid default uuid_generate_v4() primary key, 
   name text not null, 
   country text, 
   rating int check (rating >= 1 and rating <= 5), 
   message text not null, 
   approved boolean default false, 
   created_at timestamp with time zone default now() 
 );

-- Enable Row Level Security (RLS)
alter table testimonials enable row level security;

-- Policy to allow anyone to insert a testimonial (for the contact form)
create policy "Allow public to insert testimonials" 
on testimonials for insert 
with check (true);

-- Policy to allow anyone to read approved testimonials
create policy "Allow public to read approved testimonials" 
on testimonials for select 
using (approved = true);
