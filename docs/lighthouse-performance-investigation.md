# Lighthouse Performance Investigation

## Problem

Lighthouse mobile performance score of ~75/100 with a 1,160ms "element render delay" on the text-based navbar logo (`< Iker />`), identified as the LCP element.

## Methodology

Systematic elimination on a `perf/lcp-test` branch, stripping components one by one and measuring via PageSpeed Insights on Vercel previews.

## Test Results

| Test                                                | Score | TBT  | LCP Delay | LCP Element |
| --------------------------------------------------- | ----- | ---- | --------- | ----------- |
| Baseline                                            | 75    | -    | 1,160ms   | navbar logo |
| Remove Exo_2 font                                   | 75    | -    | 1,290ms   | navbar logo |
| Remove all client JS (PHProvider, GTM, ClientLogic) | 95    | 40ms | 1,330ms   | navbar logo |
| + Strip CSS & backdrop-filter                       | 95    | 40ms | 1,040ms   | image       |

## Conclusions

### Font is NOT the issue

- `next/font/google` defaults to `display: 'swap'` — text renders immediately with a fallback font
- Removing Exo_2 entirely had zero impact on score or render delay

### Custom CSS is NOT the issue

- Total render-blocking CSS is only 9.6 KiB (two files)
- Stripping 548 lines of CSS (animations, toastify, checkbox, scrollbar, forms) reduced render delay by ~300ms but didn't change the score

### Client-side JavaScript IS the bottleneck

- Removing PHProvider, GTM, and ClientLogic jumped the score from 75 to 95
- Main culprits:
  - **PostHog** (105 KiB): recorder.js (63 KiB, 355-615ms main thread), surveys.js (30 KiB), dead-clicks (5 KiB)
  - **Next.js hydration**: ~700ms across multiple long tasks
  - **next-intl / react-hook-form chunk**: 133.5 KiB (98.3 KiB unused)

### ~1,300ms LCP render delay is Next.js framework overhead

- Persistent across ALL tests (even with everything stripped)
- Caused by render-blocking CSS download + JS parsing on Lighthouse's simulated slow 4G
- Not fixable in application code

### PostHog deferral: marginal gains, major tradeoffs

- Deferring PostHog init with `requestIdleCallback` moved its execution out of the critical rendering path
- Score improved to 80-85 range, but:
  - Session replays miss the first ~6 seconds of user interaction
  - TBT still high because PostHog recorder blocks main thread for 385-615ms whenever it runs
  - Lighthouse TBT counts ALL long tasks throughout page lifecycle, not just during rendering
- **Verdict**: Not worth the tradeoff if session replays are important

### PostHog Provider wrapper causes DOM issues when deferred

- When PostHog loads, PHProvider switches from `<>{children}</>` to `<PostHogProvider>{children}</PostHogProvider>`
- This React tree structure change triggers reconciliation that strips CSS classes added via direct DOM manipulation (IntersectionObserver adding `.visible` to `.animate-hidden` elements)
- Only manifests in production where PostHog is enabled, not locally

## Final Decision

Kept only one change: moved GTM from outside `<body>` to inside `<body>` (valid HTML). All other changes reverted — the performance cost is inherent to the tech stack (Next.js 14 + PostHog + next-intl).

## Potential Future Optimizations (diminishing returns)

- **Upgrade Next.js 14 to 15+**: Better chunking, reduced hydration overhead, React Server Components improvements
- **Audit chunk 933** (133.5 KiB, 98.3 KiB unused): Likely next-intl or react-hook-form — could be code-split further
- **Fix image sizes**: Images served at 750x750 for 380x380 display (50 KiB savings)
- **PostHog optimization**: Disable unused features (surveys, dead-clicks) if not needed to reduce JS payload
