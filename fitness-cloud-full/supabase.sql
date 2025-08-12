
-- Minimal schema aligning with app code (user_id uses authing_sub string)
create extension if not exists "pgcrypto";
create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid default gen_random_uuid() primary key,
  authing_sub text unique,
  email text,
  name text,
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists logs (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  date date not null,
  rpe int,
  duration int,
  cardio int,
  bodyweight numeric,
  bodyfat numeric,
  exercises text,
  notes text,
  created_at timestamptz default now()
);

create table if not exists coach_access (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references profiles(id) on delete cascade,
  coach_id uuid not null references profiles(id) on delete cascade,
  created_at timestamptz default now()
);
create unique index if not exists coach_access_uniq on coach_access(user_id, coach_id);
