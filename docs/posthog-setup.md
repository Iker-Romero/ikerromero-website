# PostHog Analytics Setup

This project uses [PostHog](https://posthog.com/) for analytics with a Cloudflare reverse proxy.

> **Note:** See the official docs for reference:
> - [Deploy a reverse proxy](https://posthog.com/docs/advanced/proxy) — Main guide
> - [Cloudflare proxy](https://posthog.com/docs/advanced/proxy/cloudflare) — Cloudflare-specific setup

## Why Cloudflare Instead of Next.js Rewrites?

PostHog's docs recommend Next.js rewrites for Vercel, but **this causes excessive Edge Request usage** on Vercel Pro plans. Every PostHog request counts as an Edge Request.

Using a Cloudflare subdomain proxy:
- Routes traffic through Cloudflare (free)
- Doesn't consume Vercel Edge Requests
- Bypasses ad blockers (requests go to your domain)

## Setup

### 1. Create Cloudflare Subdomain

1. Go to Cloudflare DNS for your domain
2. Add a **CNAME** record:
   - **Name:** `i` (creates `i.yourdomain.com`)
   - **Target:** `eu.i.posthog.com` (or `us.i.posthog.com` for US region)
   - **Proxy status:** Proxied (orange cloud)

### 2. Configure Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://i.yourdomain.com
```

### 3. Code Configuration

**`src/utils/PostHogProvider.tsx`**
```tsx
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,  // Your Cloudflare subdomain
  ui_host: 'https://eu.posthog.com',
  person_profiles: 'identified_only'
})
```

## Development vs Production

PostHog is **disabled in development** to:
- Avoid ad blocker issues locally
- Not pollute analytics with dev traffic
- Save on request quotas

The provider returns children directly without PostHog wrapper in development mode.

## Verification

1. Deploy to production
2. Open browser DevTools → Network tab
3. Trigger a page view
4. Look for requests to `i.yourdomain.com`
5. Check PostHog dashboard for events
