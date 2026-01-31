# PostHog Analytics Setup

This project uses [PostHog](https://posthog.com/) for analytics with a Cloudflare Worker reverse proxy.

## Why Cloudflare Worker?

**Why not Next.js rewrites?**
PostHog's docs recommend Next.js rewrites for Vercel, but this causes excessive Edge Request usage on Vercel Pro plans. Every PostHog request counts as an Edge Request.

**Why not a simple CNAME record?**
A CNAME record with Cloudflare proxy enabled causes CORS errors. Cloudflare's proxy doesn't add the required headers.

**Solution:** Cloudflare Worker proxy (free tier works).

## Setup

Follow the [official Cloudflare Worker guide](https://posthog.com/docs/advanced/proxy/cloudflare) (Option 1: Cloudflare Workers).

Use the **EU region** code variant and subdomain `i.ikerromero.com`.

## Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://i.yourdomain.com
NEXT_PUBLIC_ENABLE_POSTHOG=true
```

- `.env.local`: Set `NEXT_PUBLIC_ENABLE_POSTHOG=false` to disable locally
- Vercel: Set `NEXT_PUBLIC_ENABLE_POSTHOG=true` for production

## Code

**`src/utils/PostHogProvider.tsx`** — Initialized with `ui_host: 'https://eu.posthog.com'` so toolbar links work correctly.

## Verification

1. `curl https://i.yourdomain.com/decide` returns JSON
2. No CORS errors in browser console
3. Events appear in PostHog dashboard
