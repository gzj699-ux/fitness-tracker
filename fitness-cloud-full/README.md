
# Fitness Cloud (Full, Authing + Supabase)

## Env Vars
Copy `.env.example` to `.env.local` (for local) or set on Vercel:
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE (Server only)
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- AUTHING_ISSUER / AUTHING_CLIENT_ID / AUTHING_CLIENT_SECRET

## Routes
- /login — sign in via Authing (WeChat/Apple) or Email
- /dashboard — add/view logs (per-user)
- /coach — coach read-only summary (authorized students)
