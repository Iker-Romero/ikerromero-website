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

## Cloudflare DNS Setup

### If Transferring Domain to Cloudflare

1. **Add your domain** in Cloudflare dashboard
2. **Clean up old records:**
   - Delete registrar-specific records (e.g., `_domainconnect` from Squarespace)
   - Keep your Vercel records (`A` record and `www` CNAME)
3. **Update nameservers** at your registrar to Cloudflare's (e.g., `nelly.ns.cloudflare.com`, `toby.ns.cloudflare.com`)
4. **Wait for propagation** — typically 1-2 hours, can take up to 24 hours
5. **Skip "Only allow Cloudflare IPs"** — Not applicable for Vercel (managed platform)

### Add PostHog CNAME Record

In Cloudflare DNS, add a new record:

| Field | Value |
|-------|-------|
| Type | `CNAME` |
| Name | `i` |
| Target | `eu.i.posthog.com` (or `us.i.posthog.com` for US) |
| Proxy status | **Proxied** (orange cloud) |
| TTL | Auto |

This creates `i.yourdomain.com` which proxies to PostHog through Cloudflare.

**Important:** The proxy status must be **Proxied** (orange cloud), not DNS only. This is what hides the PostHog origin from ad blockers.

## Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://i.yourdomain.com
```

Add these to:
- `.env.local` for local development
- Vercel project settings for production

Get your API key from: PostHog Dashboard → Project Settings → Project API Key

## Code Configuration

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

1. **Test DNS:** After propagation, visit `https://i.yourdomain.com` — should return a PostHog response (not 404)
2. **Deploy** to Vercel with the env vars set
3. **Check Network tab:** Requests should go to `i.yourdomain.com`, not `posthog.com`
4. **Enable ad blocker:** Events should still flow through
5. **PostHog dashboard:** Verify events appear
