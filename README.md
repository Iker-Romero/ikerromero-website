# ikerromero.com

Personal portfolio website.

**Live:** [ikerromero.com](https://ikerromero.com)

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [next-intl](https://next-intl-docs.vercel.app/) (i18n: English/Spanish)
- [PostHog](https://posthog.com/) (analytics via Cloudflare Worker proxy)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [Nodemailer](https://nodemailer.com/) (contact form)
- Deployed on [Vercel](https://vercel.com/)

## Setup

1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in the values
3. Install dependencies and run:

```bash
npm install
npm run dev
```

Open [http://localhost:3333](http://localhost:3333)

## Environment Variables

See [`.env.example`](.env.example) for required variables.

Key variables:
- `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST` — Analytics
- `NEXT_PUBLIC_ENABLE_POSTHOG` — Set `false` locally, `true` in production
- `MONGODB_URI` — Database connection
- `NODEMAILER_EMAIL` / `NODEMAILER_PASSWORD` — Contact form

## Documentation

- [PostHog Analytics Setup](docs/posthog-setup.md) — Analytics config and Cloudflare Worker proxy
