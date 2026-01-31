# PostHog Analytics Setup

This project uses [PostHog](https://posthog.com/) for analytics.

## Ad Blocker Bypass

Ad blockers (Brave Shield, uBlock Origin, etc.) block requests to PostHog's domains (`eu.i.posthog.com`). To ensure analytics work for all users, we use a reverse proxy.

### How It Works

1. PostHog SDK sends requests to `/i/*` (same domain)
2. Next.js rewrites proxy these to PostHog's servers
3. Ad blockers don't block first-party requests

### Configuration

**`src/utils/PostHogProvider.tsx`**
```tsx
posthog.init(key, {
  api_host: '/i',  // Routes through our domain
  ui_host: 'https://eu.posthog.com'
})
```

**`next.config.js`**
```js
async rewrites() {
  return [
    { source: '/i/static/:path*', destination: 'https://eu-assets.i.posthog.com/static/:path*' },
    { source: '/i/:path*', destination: 'https://eu.i.posthog.com/:path*' }
  ]
}
```

## Local Development

For local development, ad blockers still block requests because the rewrite happens server-side but the browser sees the initial request.

**Solution:** Disable your ad blocker for `http://localhost:3333/`

## Environment Variables

```
NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

Get your key from: PostHog Dashboard → Project Settings → Project API Key
