# 02 — System Design: TCN Corporate Website

## 1. Document Control

| Field | Value |
|---|---|
| Document | System Design |
| Project | PT. Telaga Cahaya Nusantara (TCN) corporate website |
| Version | 0.1 (Draft) |
| Author | General (engineering) |
| Status | Draft — pending PRD v0.1 sign-off |
| Last updated | 2026-06-19 |
| Inputs | `business-context.md`, PRD v0.1 (parallel draft) |
| Companion docs | `01-prd.md` (WHAT), `03-seo-strategy.md` (targeting), `04-dev-plan.md` (WHEN) |

---

## 2. Executive Summary

We propose a **statically generated, headless-CMS-backed Next.js 14 site** deployed on Vercel's edge network with Sanity as content backend, Cloudinary for media, and a `next-intl` bilingual layer (id-ID primary, en secondary). The design optimizes for three known constraints: (a) Indonesian mobile 4G performance, (b) non-technical staff editing content without redeploys, and (c) qualified RFQ lead capture — so form submissions fan out to email, WhatsApp, Google Sheets, and HubSpot Free CRM in parallel. Total lean-tier operating cost is **under USD 30/month** for v1.

---

## 3. Architecture Overview

```
                          ┌──────────────────────────────────────┐
                          │        END USERS (Indonesia)         │
                          │ Procurement, EPC engineers, intl.    │
                          │ Chrome / Safari / Samsung Internet   │
                          └──────────────────┬───────────────────┘
                                             │ HTTPS
                                             ▼
   ┌─────────────────────────────────────────────────────────────────────┐
   │  EDGE  (Vercel Edge Network + Cloudflare DNS for tcn-corp.com)     │
   │   • TLS 1.3, HSTS, Brotli                                           │
   │   • Static assets + next/image CDN                                  │
   │   • Edge Middleware: locale routing, rate-limit, security headers   │
   └──────────────────────────────────┬──────────────────────────────────┘
            ┌─────────────────────────┼─────────────────────────┐
            ▼                         ▼                         ▼
   ┌─────────────────┐    ┌────────────────────┐    ┌──────────────────┐
   │  NEXT.JS 14     │    │   i18n LAYER       │    │  SANITY CMS      │
   │  App Router     │◄──►│  next-intl         │    │  (Studio behind  │
   │  SSG + ISR      │    │  /[locale]/...     │    │   Cloudflare     │
   │  RSC + ISR      │    │  default=id-ID     │    │   Access)        │
   └────────┬────────┘    └────────────────────┘    └────────┬─────────┘
            │ API routes (Edge / Node)                       │ on-publish webhook
            ▼                                                ▼
   ┌─────────────────────────────────────────────────────────────────────┐
   │  INTEGRATIONS                                                       │
   │  • Resend (email)     • WhatsApp Cloud API (notifications)          │
   │  • HubSpot Free CRM   • Google Sheets (RFQ backup)                  │
   │  • hCaptcha           • Plausible Analytics                         │
   │  • Sentry             • UptimeRobot                                 │
   └──────────────────────────────────┬──────────────────────────────────┘
                                      ▼
                          ┌──────────────────────┐
                          │ CLOUDINARY (images)  │
                          └──────────────────────┘
```

**Request flow.** Visitor hits `tcn-corp.com/id/layanan/konstruksi`. Edge Middleware enforces locale, rate limit, and security headers, then serves pre-rendered HTML (revalidated via ISR every 60 s, or instantly via Sanity on-publish webhook). Client components hydrate; `next/image` lazy-loads from Cloudinary CDN; any RFQ POST hits `/api/rfq` which fans out to four destinations.

---

## 4. Technology Stack Decision

| Layer | PICK | Rationale | Alternative considered | Trade-off |
|---|---|---|---|---|
| **Frontend** | **Next.js 14 (App Router)** | SSG + ISR + RSC + first-class i18n routing; built-in `next/image` CDN; best Vercel DX | Astro (weaker CMS plugins); plain React SPA (poor SEO) | Vercel coupling — mitigated by `output: 'standalone'` if we move hosts |
| **Styling** | **Tailwind CSS + shadcn/ui** | Fast iteration, accessible primitives, copy-paste components (no version lock) | CSS Modules, Mantine, MUI | Tailwind class noise — mitigated by design tokens |
| **CMS** | **Sanity (hosted)** | Free tier (3 users, 10k docs, 10 GB assets), real-time preview, document-level i18n via plugin, GROQ | **Strapi** (self-hosted OSS) | Sanity = vendor lock; Strapi = we own DB + backups |
| **Database** | **Sanity Content Lake (managed)** | Built-in, no ops | Strapi + Postgres on Supabase free tier | Implicit inside CMS |
| **Hosting** | **Vercel (PICK v1)** | Best Next.js DX, preview deploys per PR, edge middleware | **IDCloudHost / Niagahoster VPS** if data-residency required | Vercel = data outside ID; VPS = we own SSL + scaling |
| **CDN** | **Vercel Edge Network** | Free with Vercel; 100+ POPs incl. Singapore | Cloudflare (cheaper at scale; richer WAF) | Free v1; revisit > 50k visits/day |
| **Forms / RFQ** | **Next.js Route Handler → Resend + WhatsApp Cloud API + Sheets + HubSpot** | One POST fans out; no single-vendor outage | HubSpot Forms only | Slightly more glue code |
| **CRM (RFQ intake)** | **HubSpot Free CRM** | Free forever ≤ 1M contacts, native Gmail/WhatsApp integration | Notion DB, Pipedrive free | API rate limits at scale — fine v1 |
| **Analytics** | **Plausible** | No cookie banner (no PII), 9 KB script, UU-PDP / GDPR friendly | GA4 (free but cookie + consent flow) | USD 9/mo after trial |
| **Search** | **Pagefind (PICK v1)** | Static, free, runs at build, no infra | **Algolia DocSearch** if catalog > 200 SKUs | Pagefind = weaker typo tolerance |
| **Email** | **Resend** | Modern API, 100/day free, great DX | Zoho SMTP (cheaper at volume, ID residency) | 100/day cap; Zoho needs manual DNS |
| **WhatsApp** | **WhatsApp Cloud API (free tier)** | 1,000 service convos/mo free; native templates | Twilio WhatsApp (better DX, paid) | Cloud API = rougher UI |
| **Images** | **Cloudinary** | 25 credits/mo free, AVIF/WebP auto, folder mgmt | Sanity image pipeline (cheaper, fewer transforms) | USD 0 over free tier |
| **Translations** | **Sanity structured fields** (document-internationalization plugin) | Editors see EN + ID side-by-side | JSON files in repo (no CMS, breaks non-tech editing) | Plugin learning curve |
| **Error tracking** | **Sentry Free (5k events/mo)** | Source maps, performance, alerts | LogRocket (heavier, paid) | Event cap OK for marketing site |
| **Uptime** | **UptimeRobot Free** | 50 monitors, 5-min checks | Better Uptime (paid) | 5-min granularity acceptable |
| **Dep scanning** | **GitHub Dependabot + npm audit** | Built-in, weekly PRs | Snyk Free (200 tests/mo cap) | Enough for v1 |
| **Domain + DNS** | **Cloudflare Registrar + Cloudflare DNS** | At-cost reg, free DNS, DDoS shield | Niagahoster (cheapest .id) | Client decides |

**Stack philosophy.** Every pick either has a free tier generous enough for v1 or is one-time. No paid SaaS needs a contract pre-launch.

---

## 5. Information Architecture & Routing

Next.js App Router uses locale as a top-level segment. **Default = `id-ID`** (Bahasa Indonesia is primary market); `en` is explicit.

```
app/
├── [locale]/
│   ├── layout.tsx              ← <html lang>, providers, Header/Footer
│   ├── page.tsx                ← Home
│   ├── tentang/                ← About   (en: /en/about)
│   ├── layanan/
│   │   ├── page.tsx            ← Services overview (2 lines, 11 cats)
│   │   ├── konstruksi-dan-instalasi/[slug]/page.tsx
│   │   └── trading/[slug]/page.tsx
│   ├── produk/
│   │   ├── page.tsx            ← Catalog (PDF download)
│   │   └── [category]/page.tsx
│   ├── proyek/[slug]/page.tsx  ← Case studies
│   ├── klien/                  ← Logo wall + testimonials
│   ├── kontak/                 ← Contact + RFQ form
│   ├── cari/                   ← Pagefind search results
│   └── rfq/success/page.tsx
├── api/
│   ├── rfq/route.ts            ← POST → email + WA + Sheets + HubSpot
│   ├── revalidate/route.ts     ← Sanity webhook → revalidateTag()
│   └── health/route.ts
└── sitemap.ts / robots.ts
```

**Locale detection (Edge Middleware):** URL has locale → use it; else `Accept-Language` (`id*` → id-ID); else default. Manual switcher in Header writes `NEXT_LOCALE` cookie.

URL slugs follow the PRD: `/id/layanan/konstruksi-dan-instalasi/struktur-aluminium` ↔ `/en/services/construction-installation/aluminium-structure`.

---

## 6. Data Model (Sanity content types)

| Type | Key fields (type, i18n) | Description |
|---|---|---|
| `siteSettings` (singleton) | `companyName` (fixed), `tagline` (loc), `contact` (fixed), `socialLinks` (fixed), `defaultLocale` (fixed) | Global config: phone, email, addresses, social |
| `page` | `slug` (fixed), `title` (loc), `seo` (loc), `blocks` (loc portable-text) | Generic marketing pages |
| `serviceLine` | `slug` (fixed), `name` (loc), `intro` (loc) | "Construction & Installation" / "Trading" |
| `service` | `slug` (fixed), `name` (loc), `line` (ref), `shortDescription` (loc), `longDescription` (loc PT), `heroImage`, `gallery`, `relatedProducts` | 11 categories per context §3 |
| `productCategory` | `slug` (fixed), `name` (loc), `parent` (self-ref), `description` (loc) | Hierarchical catalog |
| `product` | `slug` (fixed), `name` (loc), `category` (ref), `brand` (fixed), `summary` (loc), `specs[]` (loc labels), `images`, `datasheetPdf` | Catalog items |
| `project` | `slug` (fixed), `title` (loc), `client` (ref), `industry` (fixed), `summary` (loc), `body` (loc PT), `gallery`, `year`, `services[]` | Case studies (content TBD) |
| `client` | `name` (fixed), `logo`, `website` (fixed), `permissionToDisplayLogo` (fixed, gates rendering), `testimonial` (loc) | Logo wall + testimonial bundle |
| `testimonial` | `quote` (loc), `authorName` (fixed), `authorRole` (loc), `client` (ref), `rating` | Standalone if not tied to a client |
| `teamMember` | `name` (fixed), `role` (loc), `bio` (loc), `photo`, `email` (fixed) | About-page staff |
| `rfqSubmission` (write-only) | `name`, `company`, `email`, `phone`, `serviceInterest`, `message`, `locale`, `timestamp`, `sourceUrl` | Captured to Sheets + HubSpot; never in Sanity |

**i18n rule.** Sanity plugin `@sanity/document-internationalization`: one parent + N locale children per translatable document, joined by `__i18n_lang`. Editors toggle EN/ID tabs in Studio.

---

## 7. Component / Module Breakdown

**Atoms** (`components/ui/`): `Button` (variants: primary, secondary, ghost, whatsapp), `Card` (service, product, project), `Badge`, `Input`, `Textarea`, `Select`, `Checkbox`, `Skeleton`.

**Feature components** (`components/features/`): `Hero` (headline + 2 CTAs), `ServiceGrid`/`ServiceDetail`, `ProductCatalog`/`ProductCard` (with "Request datasheet"), `ClientLogoWall` (gated by `permissionToDisplayLogo === true`), `TestimonialCarousel` (auto-play + `prefers-reduced-motion`), `ProjectCard`/`ProjectGallery` (lightbox), `RFQForm` (multi-step: About you → Need → Files+confirm; hCaptcha, honeypot, optimistic UI), `ContactSection` (both offices, phone, email, optional map), `LanguageSwitcher` (dropdown, cookie-persisted), `WhatsAppButton` (floating bottom-right, page-aware pre-fill), `PdfDownloadButton` (full catalog), `SearchDialog` (Cmd-K / `/`), `Breadcrumbs` (JSON-LD aware).

**Layout shells** (`components/layout/`): `Header` (sticky, transparent→solid on scroll), `Footer` (4 cols), `PageLayout`, `SectionContainer`, `LocalizedLink`.

**Server-only modules** (`lib/`): `sanity/client.ts`, `sanity/queries.ts` (GROQ per type), `sanity/image.ts`, `i18n/config.ts`, `rfq/submit.ts` (fan-out), `email/templates/` (React Email), `analytics/plausible.ts`.

---

## 8. SEO Architecture

Every page is SSG or ISR (`revalidate: 60` + Sanity webhook for instant updates); no client-only above-the-fold rendering. **sitemap.xml** built via Next.js `sitemap.ts`; submitted to Google Search Console + Bing Webmaster. **robots.txt** allows all except `/api/`, `/studio/`, `/_next/` and references the sitemap. JSON-LD per page type: `Organization` (site-wide), `LocalBusiness` × 2 (Makassar HQ + Jakarta) with addresses from context §2, `WebSite` with `SearchAction`, `BreadcrumbList` (non-home), `Service` (service detail), `Product` (product page), `FAQPage` (≥ 3 Q&A), `Article` (project case study). OpenGraph + Twitter Card via `generateMetadata()` (title, description, canonical, og:image 1200×630, `id_ID` / `en_US`). Canonical URLs + **hreflang** (`id-ID`, `en`, `x-default`); validated monthly in Search Console. Alt text is a **required** Sanity asset field; build fails if hero/product images lack alt.

---

## 9. Performance Plan

| Target | Mechanism |
|---|---|
| LCP < 2.5 s on Moto G4 + 4G throttling | SSG + edge CDN + `priority` on hero `next/image` |
| CLS < 0.1 | `width`/`height` on every `<img>`; reserved aspect ratio for hero |
| INP < 200 ms | RSC for static parts; defer non-critical client JS |
| Image weight | AVIF → WebP → JPEG; lazy below fold; blur-up placeholder |
| Fonts | Self-host **Plus Jakarta Sans** Latin subset, 2 weights; `font-display: swap`; preload 400/700 |
| JS budget | ≤ 50 KB compressed 3rd-party (Plausible 9 KB + hCaptcha ~30 KB) |
| Code splitting | Per-route; dynamic import for `RFQForm`, `SearchDialog`, lightbox |
| Cache headers | Assets: `public, max-age=31536000, immutable`; HTML: `s-maxage=3600, swr` |

---

## 10. Security Plan

- **HTTPS only** + HSTS `max-age=63072000; includeSubDomains; preload`. HTTP→HTTPS redirect.
- **CSP**: `default-src 'self'; img-src 'self' cdn.sanity.io res.cloudinary.com data:; script-src 'self' plausible.io js.hcaptcha.com; frame-src js.hcaptcha.com; connect-src 'self' plausible.io api.resend.com graph.facebook.com; style-src 'self' 'unsafe-inline';` — tightened per env.
- **Rate limit** on `/api/rfq` via Vercel Edge Middleware + **Upstash Redis Free (10k req/day)** — 5/min/IP, 20/hour/IP; 429 on breach.
- **Honeypot** + **hCaptcha** (free, privacy-friendly) on RFQ. Hidden `website` field — reject if filled.
- **CMS admin** at `studio.tcn-corp.com` behind **Cloudflare Access** (free ≤ 50 users); never exposed at `/admin` on the public site.
- **Secrets** — all API keys in Vercel env vars; build fails if `RESEND_API_KEY`, `WHATSAPP_TOKEN`, `SANITY_API_READ_TOKEN`, `HUBSPOT_TOKEN` are unset in prod.
- **Dependency scanning** — GitHub Dependabot (weekly) + `npm audit --production` in CI.
- **Backups** — Sanity weekly export → private GitHub repo via scheduled Action.

---

## 11. Accessibility Plan (WCAG 2.1 AA)

Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`). Skip-to-content link as first focusable element. Keyboard-reachable interactive elements; visible focus ring (`focus-visible:ring-2`). Color contrast — body ≥ 4.5:1, large text 3:1, non-text UI 3:1 (validated via tokens). Form labels via `<label>` or `aria-label`; errors via `aria-describedby`. Alt text required on content images; decorative = `alt=""`. `prefers-reduced-motion` disables carousel, smooth-scroll, parallax. `<html lang>` set per route. axe-core in CI (`@axe-core/playwright`); manual NVDA + VoiceOver pass pre-launch.

---

## 12. Observability & Operations

| Concern | Tool | Cadence |
|---|---|---|
| Uptime | UptimeRobot Free | 5-min HTTP check; email + Telegram alert |
| Errors | Sentry Free | Real-time; Slack/Telegram webhook on new issue |
| Analytics | Plausible | Real-time dashboard |
| Deploy logs | Vercel | 30-day retention |
| CMS backups | Sanity export → Google Drive (Vercel Cron) | Weekly, 12-week retention |
| Form intake | Sheets (live) + HubSpot Free CRM (live) | Immediate |
| Status page (v2) | Better Uptime / Instatus | Quarterly summary |

**Runbook.** P1 site-down (> 5 min): Vercel → roll back to last green; Sentry → top error → fix-forward vs revert; CMS → verify webhook fired. RFQ delivery failure: Sheets is source of truth (last write wins); Resend retries 3×; WhatsApp retry via queue.

---

## 13. Environments & Branching

```
main        ──► production   (tcn-corp.com)
staging     ──► preview      (staging.tcn-corp.com)
feat/*      ──► preview      (feat-<hash>.vercel.app per PR)
```

- **Dev** — local `next dev` + local Sanity Studio; seed via `sanity dataset import`.
- **Staging** — Vercel preview; Sanity `staging` dataset; reset weekly from prod export.
- **Production** — Vercel production; Sanity `production` dataset; protected by Cloudflare Access.
- **Content staging** — editors draft in `staging` dataset → preview at `staging.tcn-corp.com` → click "Publish to prod" (custom Sanity Studio action).
- **PR previews** — auto-built by Vercel; visual diff via Vercel screenshots.

---

## 14. Cost Estimate

USD, mid-2026. Free-tier limits monthly unless noted.

| Item | Lean (v1, < 10k visits/mo) | Scale (~50k visits/mo) |
|---|---|---|
| Vercel hosting | **Free** (Hobby: 100 GB BW) | **USD 20/mo** (Pro: 1 TB BW) |
| Sanity CMS | **Free** (3 users, 10k docs, 10 GB) | **USD 15/mo** (Growth: 20 users, 100 GB) |
| Cloudinary | **Free** (25 credits ≈ 25 GB) | **USD 99/mo** (Plus) |
| Resend email | **Free** (100/day, 3k/mo) | **USD 20/mo** (50k emails) |
| WhatsApp Cloud API | **Free** (1,000 convos/mo) | ~USD 50/mo past free tier |
| Plausible Analytics | **USD 9/mo** (post-trial) | **USD 9/mo** (or self-host ~USD 5/mo) |
| UptimeRobot | **Free** | **Free** |
| Sentry | **Free** (5k events/mo) | **USD 26/mo** (Team, 50k events) |
| hCaptcha | **Free** (1M req/mo) | **Free** |
| Upstash Redis | **Free** (10k req/day) | ~USD 1–2/mo |
| Domain `tcn-corp.com` | **USD 12/yr** | same |
| **Monthly total** | **~USD 21/mo** | **~USD 240/mo** |

**Year-1 budget (lean):** ~USD 264 hosting + USD 12 domain + USD 500 contingency = **USD 776**.

---

## 15. Risks & Mitigations

| # | Risk | L | I | Mitigation |
|---|---|---|---|---|
| R-1 | **Vercel data-residency concerns** (clients want ID storage) | M | M | Document flows in privacy policy; offer self-host via `output: 'standalone'` on **IDCloudHost Jakarta VPS** (USD ~15/mo). Sanity has no ID region — flag in Open Questions. |
| R-2 | **CMS learning curve** for non-technical staff | H | H | 2-hour Sanity training; 1-page editor guide; restrict Studio to Editor/Admin roles; record Loom walkthroughs per content type. |
| R-3 | **WhatsApp template approval delay** (24–48h, can reject) | H | M | Submit all 3 templates at project start; email fallback ready; never block form submission on WA success. |
| R-4 | **Internet outage at HQ** blocks content updates | M | M | Studio works on any browser + connection; weekly scheduled backup via Vercel Cron in case manual edits skipped. |
| R-5 | **Indonesian 4G perf regression** (videos / heavy images later) | M | H | Performance budget in CI (Lighthouse + bundlephobia); reject PR if JS > 50 KB or LCP > 2.5 s. |
| R-6 | **Address discrepancies** (Makassar 90113 vs 90231, Jakarta 12870 vs 18270) | Confirmed | M | Block launch until client confirms both addresses in writing; show TBD in footer until then. |
| R-7 | **Client logo rights** — Vale/Freeport/Antam without permission | H | H (legal) | `permissionToDisplayLogo` boolean gates render; legal sign-off logged in stakeholder approval. |
| R-8 | **Sanity outage** takes site down | L | H | SSG + ISR keeps site up on Vercel cache even if Sanity API down; falls back to last successful build. |
| R-9 | **RFQ spam** despite hCaptcha | M | L | Honeypot + hCaptcha + rate-limit + Sheets spam flag + Resend SPF/DKIM; quarterly review. |

---

## 16. Open Questions

Client decisions required before kickoff:

1. **CMS** — Sanity (recommended) vs Strapi (if data-residency required).
2. **Hosting** — Vercel (recommended) vs Indonesian VPS (IDCloudHost / Niagahoster); affects CDN choice.
3. **Brand assets** — colors, typography, logo files (currently TBD per context §1).
4. **Domain** — who holds `tcn-corp.com` and can switch nameservers to Cloudflare?
5. **WhatsApp Business** — verified WBA already? Who is Meta Business admin?
6. **HubSpot admin** — who signs up for the Free CRM?
7. **Legal entity** — exact PT registration number for footer; NPWP if displayed.
8. **Office addresses** — confirm Makassar (90113 vs 90231) and Jakarta (12870 vs 18270); currently using 90113 + 12870.
9. **Sales contact display** — Ardiansyah's phone/email shown publicly, or routed via form only?
10. **Initial case studies** — 3–6 projects (text + photos + client permission) for Projects page.
11. **Client logo rights** — written permission for Vale, Freeport, Antam, Amman, Hexindo, Donggi Senoro, etc.
12. **Catalog PDF** — is the 116-page PDF final or updated quarterly? Affects cache strategy.
13. **Newsletter / blog** — confirm out-of-scope v1.
14. **Analytics** — Plausible default 24-month aggregated; need raw BigQuery export?
15. **Service categories** — 11 per context §3 — all 11 as separate detail pages, or grouped?

---

*End of System Design v0.1. Pending: PRD v0.1 sign-off, client answers to §16, then Dev Plan v0.1.*
