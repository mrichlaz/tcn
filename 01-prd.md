# Product Requirements Document — PT. Telaga Cahaya Nusantara Corporate Website

## 1. Document Control

| Field | Value |
|---|---|
| Document | Product Requirements Document (PRD) v0.1 |
| Project | TCN Corporate Website (tcn-corp.com) |
| Client | PT. Telaga Cahaya Nusantara (TCN) |
| Author | General Agent (Mavis) |
| Status | **Draft v0.1** — pending stakeholder review |
| Last updated | 2026-06-19 |
| Source of truth | `/workspace/website-project/context/business-context.md` (cross-doc consistency rules §Cross-Document) |
| Companion docs | 02-system-design.md, 03-dev-plan.md, 04-seo-strategy.md |

---

## 2. Executive Summary

We are building a bilingual (Bahasa Indonesia + English) corporate website for **PT. Telaga Cahaya Nusantara (TCN)** — an Indonesian general trading and construction company headquartered in Makassar with a Jakarta office — to replace today's PDF-only presence on `tcn-corp.com` (context §1). The site is the digital front door for three audiences: domestic procurement managers at mining and energy majors, EPC contractors sourcing aluminum structure and epoxy flooring subcontractors, and international buyers running supplier due diligence. Success means TCN ranks on page one of Google for high-intent Indonesian industrial-supply queries, surfaces its full 11-category product catalog (context §3), and converts qualified visitors into RFQ inquiries routed to the sales lead.

---

## 3. Background & Problem Statement

TCN today has a registered domain (`tcn-corp.com`), an 8-page company-profile PDF, and a 116-page product catalog PDF — but no first-class website (context §1). Indonesian industrial buyers discover suppliers almost exclusively through Google search (*"industrial trading supplier Indonesia"*, *"epoxy coating contractor Sulawesi"*, *"aluminum structure installer Jakarta"*), so a PDF-only presence is invisible to that funnel. Procurement teams expect a modern site to (a) confirm the supplier is legitimate, (b) show who else they serve, (c) detail products and capabilities, and (d) offer a low-friction RFQ path.

The website must therefore:

1. **Establish credibility** via a client logo wall (context §5: Vale, Freeport, Antam, Amman Mineral, Donggi Senoro, Hexindo, Kalla, Fast Food Indonesia / KFC operator, others).
2. **Surface the full catalog** — 4 construction capabilities and 11 trading categories, including TCN's own-brand Lighting and Flashlights lines (context §3).
3. **Generate qualified RFQs** routed to sales lead Ardiansyah (context §2) with enough context to be actionable.
4. **Be reachable in both languages** — id-ID primary, en secondary (context §6).

---

## 4. Goals & Non-Goals

### Goals (v1)

| ID | Goal | Measurable target |
|---|---|---|
| G-1 | Generate qualified RFQ leads | ≥ 8 RFQ submissions / month by month 6; ≥ 20 / month by month 12 |
| G-2 | Build brand authority in Indonesian industrial trading | Rank top 10 for 20 priority Indonesian keywords by month 6 (SEO Strategy) |
| G-3 | Multilingual reach (id-ID + en) | 100% of pages available in both languages with correct `hreflang` |
| G-4 | Fast page loads on Indonesian mobile networks | LCP < 2.5 s on 4G throttled Moto G4 (NFR-001) |

### Non-Goals (v1)

- **E-commerce checkout** — this is a corporate site, not a store. RFQs only.
- **Customer login portal / account area** — out of scope; revisit at v2.
- **Live chat widget** — WhatsApp click-to-chat covers the need for v1; live chat deferred to v2.
- **Mobile native apps** — responsive web only.
- **Multi-currency pricing display** — quotations handled by sales via email.
- **Inventory/stock-level display** — TCN is a trading supplier, not a warehouse-front store.

---

## 5. Target Users & Personas

### Persona A — Procurement Manager, Mining/Energy Major (Domestic, id-ID)

Buyer at Vale, Freeport, Antam, Amman, or Donggi Senoro (context §5). **Goal**: find a vetted Indonesian supplier for a category (pumps, valves, PPE, electrical) and request a quote fast. **Pain**: hard to vet unknown suppliers; PDFs get lost in email. **Tasks**: scan logo wall → drill into trading category → download catalog → submit RFQ or open WhatsApp.

### Persona B — Project Engineer / EPC Contractor (Domestic, id-ID)

Engineer at an EPC or industrial builder sourcing subcontractors for aluminum, stainless, building, or epoxy flooring (context §3A). **Goal**: confirm TCN has done similar work, then request a site visit. **Pain**: subcontractor credentials are hard to verify; needs photos of past work. **Tasks**: view Projects → read About → open Construction detail → submit RFQ with project specs.

### Persona C — International Buyer / Supplier-DD Reviewer (en)

Foreign procurement or compliance officer doing supplier due diligence on TCN before issuing an international PO. **Goal**: confirm legal entity, contacts, capabilities, English responsiveness. **Pain**: most Indonesian SMEs have no English site; PDFs not indexed. **Tasks**: land on `/en/home` → switch language → read About → view Clients → use Contact form.

---

## 6. Functional Requirements

Each requirement is testable. Acceptance criteria are stated inline.

**FR-001 — Home / Hero Page.** Home (`/id/beranda`, `/en/home`) presents the value proposition ("General Trader & Contractor — one-stop industrial supply + installation"), primary CTA "Minta Penawaran / Request a Quote" → RFQ page, secondary CTA "Unduh Katalog / Download Catalog" → PDF. A client logo strip + 3-tile Services overview must be visible in the first viewport on desktop (1366×768) and within first scroll on mobile (360×800).

**FR-002 — About / Company Profile.** `/id/tentang`, `/en/about` with Vision, Mission, Values (context §4), Company History timeline (client to provide), and Locations (both offices with map links). First mention "PT. Telaga Cahaya Nusantara", then "TCN" (Cross-Document Rule 1).

**FR-003 — Services Overview.** `/id/layanan`, `/en/services` shows the dual-engine split from context §3: Construction & Installation (4) vs Trading (11). Each tile → detail page (FR-004).

**FR-004 — Service Detail Pages.** One per category. Construction: 4 sub-pages. Trading: 11 sub-pages (mechanical, electrical, instruments & control, survey & safety, lighting, flashlights, aluminum structure, pre-fab / capsule, forklift Heli, etc.). Each page lists 3–6 sample products and ends with "Request Quote for This Category" CTA.

**FR-005 — Products / Catalog.** `/id/produk`, `/en/products` is a categorized index of product lines with thumbnail, short description, "details" link, plus a prominent "Download Full Catalog (PDF, 116 pages)" button.

**FR-006 — Projects / Portfolio.** `/id/proyek`, `/en/projects` displays case-study cards (project, client, category, year, hero image, 2-paragraph summary). Initial cases are client to provide (§9); CMS schema + empty-state copy must allow non-technical staff to add cases later.

**FR-007 — Clients Page.** `/id/klien`, `/en/clients` displays a responsive logo grid of all reference clients from context §5 plus testimonial blocks (quote + name + title) as placeholders.

**FR-008 — Contact Page.** `/id/kontak`, `/en/contact` displays both offices (context §2), a contact form (name, email, phone, message, captcha), `info@tcn-corp.com`, and phone numbers. Submissions email sales lead Ardiansyah (context §2) and persist in CMS.

**FR-009 — RFQ / Quote Request Form.** `/id/rfq`, `/en/rfq` — **primary conversion goal**. Fields: company, contact name, email, phone, project location, product/service category (dropdown from FR-004 taxonomy), expected quantity, timeline, free-text specs, file upload (PDF/DWG/image ≤ 10 MB). Server validation + captcha + rate limiting + email to `ardiansyah@tcn-corp.com` + CMS persistence.

**FR-010 — Language Switcher + hreflang.** Header switcher toggles id-ID (default) ↔ en. Every page has a paired URL, with `<link rel="alternate" hreflang="id">`, `hreflang="en">`, and `x-default` pointing to id-ID root.

**FR-011 — Site Search.** Basic keyword search across products, services, projects. Results: title + 1-line excerpt + URL. Search input in header (icon → modal on mobile, inline on desktop).

**FR-012 — WhatsApp Click-to-Chat.** Fixed bottom-right button opens `wa.me/<number>` with a pre-filled greeting. *Open*: official WhatsApp number — see §12.

**FR-013 — SEO Surface.** Human-readable slugs; `sitemap.xml` (both languages); `robots.txt`; canonical URLs; Open Graph + Twitter Card meta; JSON-LD `Organization` on home + `LocalBusiness` on contact.

---

## 7. Non-Functional Requirements

| ID | Requirement | Acceptance |
|---|---|---|
| NFR-001 | **Performance** | Lab-tested LCP < 2.5 s, CLS < 0.1, INP < 200 ms on Moto G4 + 4G (1.6 Mbps down, 750 ms RTT) via Lighthouse mobile preset; all three Core Web Vitals pass. |
| NFR-002 | **Accessibility** | WCAG 2.1 AA: axe-core / Lighthouse a11y ≥ 95; keyboard-navigable; color-contrast ≥ 4.5:1; form labels associated; alt text on all images. |
| NFR-003 | **Mobile responsiveness** | Layout adapts cleanly 320 px → 1920 px; ≥ 70 % of expected Indonesian traffic is mobile (context); tested on iOS Safari + Android Chrome + Samsung Internet. |
| NFR-004 | **Browser support** | Last 2 stable versions of Chrome, Safari, Firefox, Samsung Internet, plus current Edge. No IE. |
| NFR-005 | **SEO** | Server-rendered HTML (no client-only rendering for indexable content); per-page meta + structured data; `hreflang` correct; XML sitemap auto-generated on publish. |
| NFR-006 | **Security** | HTTPS-only (HSTS); no exposed `/admin` on public hostname (admin on separate subdomain or behind auth); captcha (hCaptcha or reCAPTCHA v3) on Contact and RFQ forms; rate limit ≥ 5 submissions / IP / 10 min; file-upload type + size whitelist; CSRF tokens on forms; security headers (CSP, X-Frame-Options, Referrer-Policy). |
| NFR-007 | **i18n architecture** | id-ID primary, en secondary. All user-facing strings externalised; no hard-coded copy in templates; locale-aware date/number formatting; no machine-translated placeholder strings — every en page is reviewed. |
| NFR-008 | **CMS** | Non-technical staff can: edit page copy, upload images, add a project case-study, add a client logo, publish without a code deploy. Content changes do not require a developer or release train. Audit log of edits. |

---

## 8. Information Architecture / Sitemap

Bilingual tree; id-ID is `x-default`. Top-level pairs: `/id/beranda` ↔ `/en/home`, `/id/tentang` ↔ `/en/about`, `/id/layanan` ↔ `/en/services`, `/id/produk` ↔ `/en/products`, `/id/proyek` ↔ `/en/projects`, `/id/klien` ↔ `/en/clients`, `/id/kontak` ↔ `/en/contact`, `/id/rfq` ↔ `/en/rfq`, `/id/pencarian?q=…` ↔ `/en/search?q=…`, `/id/kebijakan-privasi` ↔ `/en/privacy-policy`, `/id/syarat-ketentuan` ↔ `/en/terms`.

Services subtree:

- **Construction** (`/id/layanan/konstruksi` ↔ `/en/services/construction`): `struktur-aluminium` ↔ `aluminum-stainless` · `bangunan-interior` ↔ `building-interior` · `pipa-flensa-katup` ↔ `piping-flanges-valves` · `epoxy-coating` ↔ `epoxy-coating`.
- **Trading** (`/id/layanan/perdagangan` ↔ `/en/services/trading`): `mekanikal` ↔ `mechanical` · `elektrikal` ↔ `electrical` · `instrumentasi-kontrol` ↔ `instruments-control` · `survei-keamanan` ↔ `survey-safety` · `pencahayaan` ↔ `lighting` · `senter` ↔ `flashlights` · `struktur-aluminium` ↔ `aluminum-structure` · `bangunan-prefabrikasi` ↔ `prefab-building` · `forklift-heli` ↔ `forklift-heli`.

Auxiliary (no language prefix): `/sitemap.xml`, `/robots.txt`, `/og-image.png`, `/catalog.pdf` (full 116-page catalog — FR-005).

---

## 9. Content Requirements

Items the client must supply before launch. "TBD" is acceptable for draft review; hard deadline is content freeze for QA.

| # | Asset | Deadline |
|---|---|---|
| C-1 | TCN logo (SVG + PNG, light + dark) — placeholder permitted until this | T-21 d |
| C-2 | High-res photos of both offices (≥ 1920×1080) | T-21 d |
| C-3 | Company history / timeline copy (id + en), 5–8 milestones | T-14 d |
| C-4 | Project case studies (initial 3–6) with photos + client permission | T-14 d |
| C-5 | Written permission to use each client logo (Vale, Freeport, Antam, …) | T-14 d |
| C-6 | Testimonials (≥ 3) with name, title, company, quote | T-14 d |
| C-7 | 116-page product catalog PDF (final, web-optimized) | T-21 d |
| C-8 | Legal entity registration (NIB / NPWP / AKTA pendirian) for footer | T-14 d |
| C-9 | Vision / Mission / Values copy review & sign-off (draft from context §4) | T-21 d |
| C-10 | WhatsApp number for click-to-chat (FR-012) | T-14 d |

---

## 10. Success Metrics / KPIs

Measured via Google Analytics 4 + Search Console + server-side form logs.

| Timeframe | Metric | Target |
|---|---|---|
| **Month 3** | Indexed pages | ≥ 40 (sitemap submitted; both languages indexed) |
|  | Organic sessions / month | ≥ 200 |
|  | RFQ submissions | ≥ 3 / month |
|  | Bounce rate (home) | ≤ 65 % |
|  | Lighthouse mobile perf score | ≥ 80 |
| **Month 6** | Top-10 rankings for priority id-ID keywords | ≥ 20 |
|  | Organic sessions / month | ≥ 800 |
|  | RFQ submissions | ≥ 8 / month |
|  | WhatsApp click-throughs | ≥ 30 / month |
|  | Lighthouse mobile perf score | ≥ 90 |
| **Month 12** | Organic sessions / month | ≥ 2,500 |
|  | RFQ submissions | ≥ 20 / month |
|  | RFQ-to-quoted conversion (sales-side) | ≥ 50 % |
|  | Multilingual reach (`en/*` share) | ≥ 15 % |

Targets are conservative for an Indonesian B2B industrial niche; SEO Strategy will refine keyword list.

---

## 11. Out of Scope (v1)

The following are explicitly **not** part of v1 to prevent scope creep:

1. E-commerce checkout, payment gateway, shopping cart.
2. Customer login / account portal.
3. Live chat widget (deferred to v2; WhatsApp covers v1).
4. Native mobile apps (iOS / Android).
5. Multi-currency pricing display.
6. Inventory / stock-level display.
7. Marketplace integrations (Tokopedia, Alibaba, etc.).
8. Blog / news publishing workflow (deferred — add in v1.1 if content cadence supports).
9. CRM integration beyond email (HubSpot / Salesforce sync deferred to v2).
10. Multi-region / multi-language beyond id-ID and en.

---

## 12. Open Questions

Every conflict / unknown in the context, plus items a stakeholder must clarify before dev starts.

| # | Item | Why it matters |
|---|---|---|
| OQ-1 | **Makassar address** — context §2 gives "HRS Building Lt. 4, Jl. Karunrung No. 23 A, 90113" as primary, but the catalog cover shows "Jl. Boulevard Komp. Lili Ruko Cempaka No. 1, 90231". Which is the *current* operating address? | FR-002, FR-008 |
| OQ-2 | **Jakarta postcode** — profile PDF shows 18270, catalog shows 12870. 12870 is the correct Jakarta Selatan postcode, but client must confirm. | FR-008, footer |
| OQ-3 | **Official WhatsApp number** for click-to-chat (FR-012) — not in context §2. | FR-012 launch blocker |
| OQ-4 | **Director / Owner name** — context does not name a Director; only Ardiansyah as Sales Lead. Required for footer + About leadership. | FR-002, footer |
| OQ-5 | **Legal entity registration**: NIB, NPWP, AKTA pendirian — none in context. Required for footer and the "Established Indonesian PT" trust signal (context §7). | FR-002, footer |
| OQ-6 | **Client logo usage rights** — context §5 lists 14 reference clients but does not confirm TCN has written permission. Vale, Freeport, Antam are publicly listed and enforce brand-use policies. | FR-007 launch blocker |
| OQ-7 | **CMS preference** — NFR-008 requires non-technical editing; no platform specified. Shortlist: headless WordPress, Strapi, Sanity, Payload, or markdown-based (Astro/Next + MDX). | NFR-008 |
| OQ-8 | **Hosting preference** — local Indonesian (IDCloudHost, Niagahoster) for latency vs. global (Vercel, Cloudflare Pages). Affects NFR-001 LCP. | NFR-001 |
| OQ-9 | **Initial Projects / portfolio content** — context has no case studies. Without C-4 (§9), Projects page launches empty. | FR-006 |
| OQ-10 | **Domain & DNS control** — who holds the `tcn-corp.com` registrar? Required for HTTPS provisioning. | NFR-006 |
| OQ-11 | **TCN Lighting / Flashlights as own brand** — context §3 lists these as TCN's own brand lines. Manufacturing (own factory) or private-label? Affects positioning. | FR-004, FR-005 |
| OQ-12 | **UU PDP compliance** — does TCN need to comply with Indonesia's personal-data law for form submissions + GA4? Drives cookie-consent scope. | NFR-006, FR-008, FR-009 |

---

## 13. Stakeholders & Approvals

| Role | Name | Responsibility | Sign-off scope |
|---|---|---|---|
| **Client — Sales Lead** | Ardiansyah (`ardiansyah@tcn-corp.com`, +62 811 447846 — context §2) | Day-to-day client contact; RFQ recipient; content review for services & products | FR-003, FR-004, FR-005, FR-009 |
| **Client — Director / Owner** | **TBD — see Open Question OQ-4** | Final approval on vision/mission wording, brand usage, launch | All sections; final go-live |
| **Internal — Project Manager** | TBD | Schedule, scope, stakeholder coordination | This PRD + all companion docs |
| **Internal — Tech Lead** | TBD (System Design author) | Stack, architecture, security, performance | System Design + Dev Plan sign-off |
| **Internal — Design Lead** | TBD | Visual identity, UX, accessibility | FR-001, FR-002, FR-007, NFR-002, NFR-003 |
| **Internal — SEO Lead** | TBD (SEO Strategy author) | Keyword research, structured data, hreflang | SEO Strategy + FR-013, NFR-005 |
| **Legal / Compliance** | TBD (client-side) | Logo permissions, UU PDP, entity disclosures | OQ-5, OQ-6, OQ-12 |

**Approval cadence**: PRD v0.1 → client review (1 week) → v0.2 → Director sign-off → freeze → System Design & Dev Plan begin.
