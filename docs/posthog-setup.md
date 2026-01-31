# PostHog Analytics Setup

This project uses [PostHog](https://posthog.com/) for analytics with a Cloudflare Worker reverse proxy.

## Why Cloudflare Worker?

**Why not Next.js rewrites?**
PostHog's docs recommend Next.js rewrites for Vercel, but this causes excessive Edge Request usage on Vercel Pro plans. Every PostHog request counts as an Edge Request.

**Why not a simple CNAME record?**
A CNAME record with Cloudflare proxy enabled causes CORS errors. Cloudflare's proxy doesn't add the required headers.

**Solution:** Cloudflare Worker proxy (free tier works).

## Cloudflare Worker Setup

1. Go to **Compute (Workers)** → **Workers & Pages** → **Create**
2. Click **"Hello World"** template
3. Name it, click **Deploy**
4. Click **Edit code** → paste code from [`cloudflare/posthog-worker.js`](../cloudflare/posthog-worker.js) → **Deploy**
5. Go to **Settings** → **Domains & Routes** → **Add Custom Domain** → `i.ikerromero.com`

The Worker code is based on [PostHog's official guide](https://posthog.com/docs/advanced/proxy/cloudflare) with CORS headers added (see comments in file for why).

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

1. Visit `https://i.ikerromero.com/decide` — should return JSON (not 404 or error)
2. Check production site console — no CORS errors
3. Check PostHog dashboard — events should appear

**Note:** If you see CORS errors after deploying Worker changes, clear browser cache (Ctrl+Shift+R) — old responses without CORS headers may be cached.
