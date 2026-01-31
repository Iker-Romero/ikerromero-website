# PostHog Analytics Setup

This project uses [PostHog](https://posthog.com/) for analytics with a self-hosted reverse proxy.

> **Note:** This is a self-hosted proxy setup. PostHog cannot help troubleshoot configuration issues. See the official docs for reference:
> - [Deploy a reverse proxy](https://posthog.com/docs/advanced/proxy) — Main guide
> - [Next.js rewrites](https://posthog.com/docs/advanced/proxy/nextjs) — Recommended for Vercel + Next.js (via their platform quiz)

## Why a Reverse Proxy?

Ad blockers (Brave Shield, uBlock Origin, etc.) block requests to known analytics domains like `eu.i.posthog.com`. A reverse proxy routes requests through your own domain, which ad blockers haven't cataloged. This typically increases event capture by 10-30%.

## How It Works

1. PostHog SDK sends requests to `/i/*` (your domain)
2. Next.js rewrites proxy these to PostHog's servers (server-side)
3. Browser only sees requests to your domain — ad blockers don't block

## Configuration

### `next.config.js`

```js
export default withNextIntl({
  reactStrictMode: false,
  skipTrailingSlashRedirect: true,  // Required: PostHog API uses trailing slashes
  async rewrites() {
    return [
      {
        source: '/i/static/:path*',
        destination: 'https://eu-assets.i.posthog.com/static/:path*'
      },
      {
        source: '/i/:path*',
        destination: 'https://eu.i.posthog.com/:path*'
      }
    ]
  }
})
```

**Key points:**
- Static assets rewrite must come first (Next.js evaluates in order)
- `skipTrailingSlashRedirect` prevents Next.js from redirecting URLs with trailing slashes, which would break PostHog's API endpoints like `/e/`
- Replace `eu` with `us` for US region

### `src/utils/PostHogProvider.tsx`

```tsx
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
  api_host: '/i',
  ui_host: 'https://eu.posthog.com',
  person_profiles: 'identified_only'
})
```

**Key points:**
- `api_host: '/i'` — Routes through your domain (the proxy path)
- `ui_host` — Must point to PostHog's actual domain for toolbar features

## Local Development

For local development, ad blockers still block the initial request before the server-side rewrite happens.

**Solution:** Disable your ad blocker for `http://localhost:3333/`

## Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
```

Get your key from: PostHog Dashboard → Project Settings → Project API Key

## Troubleshooting

### 503 or 400 errors
Some hosting platforms modify headers during rewrites. This setup works on Vercel. If issues occur, try [Next.js proxy middleware](https://posthog.com/docs/advanced/proxy/nextjs-middleware).

### Trailing slash conflicts with SEO
The `skipTrailingSlashRedirect` setting can cause pages to be accessible at both `/page` and `/page/`. Solutions:
- Handle redirects in Next.js middleware for non-PostHog routes
- Use `<link rel="canonical">` to specify preferred URLs
- Ensure sitemap only includes one URL format

### 401 errors
Usually indicates a region mismatch. Ensure rewrites use `eu` or `us` matching your PostHog project region.
