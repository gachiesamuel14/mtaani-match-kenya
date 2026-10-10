# Mtaani Match - Kenya Location-Based Dating

Location-based matchmaking platform for people in Kenya.

## Features (planned / in progress)

- User registration & login (Supabase Auth)
- Profile setup with photos, bio, interests, county, tribe, religion
- GPS / location-based discovery
- Swipe / like / match
- Real-time chat (Supabase Realtime or Stream)
- Photo uploads
- Notifications
- Safety / report system
- Optional premium + M-Pesa
- Localized: counties, Sheng, student/professional/church modes

## Tech Stack

- Frontend: Next.js (App Router) + React + Tailwind CSS
- Backend / DB / Auth / Storage / Realtime: Supabase (recommended)
- Hosting: Netlify (connected to this GitHub repo)
- Maps/Location: Browser Geolocation API + optional Google Maps

## Getting Started

1. Clone the repo
2. `npm install`
3. Copy `.env.example` to `.env.local` and add your Supabase keys
4. `npm run dev`

## Deploy to Netlify

This repo is set up for Netlify continuous deployment.

- Build command: `next build`
- Publish directory: `.next` (handled by @netlify/plugin-nextjs)
- See `netlify.toml`

## Next Steps

1. Create a Supabase project
2. Set up tables for users, profiles, matches, messages
3. Implement auth
4. Add location permissions and distance calculation (Haversine)
5. Integrate real chat
6. Add M-Pesa via Safaricom Daraja API for premium

Built for Kenyans, by Kenyans. Karibu!
