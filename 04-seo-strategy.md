# 04 — TCN Website SEO Strategy

> **Source of truth:** `business-context.md` (PT Telaga Cahaya Nusantara profile & catalog).
> **Sibling documents referenced:** `01-prd.md` (sitemap + personas + languages), `02-system-design.md` (Next.js 14 SSG + Sanity CMS + Plausible + hreflang architecture).
> If the PRD or System Design deliverable in this plan diverges from what is referenced here, the PRD wins on scope and System Design wins on architecture — open a new revision of this document.

---

## 1. Document Control

| Field | Value |
|---|---|
| Document | SEO Strategy — TCN Corporate Website |
| Version | 0.1 (Draft) |
| Author | General (SEO workstream) |
| Status | Draft for client + Verifier review |
| Last updated | 2026-06-19 |
| Companion docs | `01-prd.md` (sitemap), `02-system-design.md` (technical SEO architecture), `03-development-plan.md` (sequencing) |
| Next review | After PRD v0.2 lands; re-align sitemap URLs and page briefs |

---

## 2. Executive Summary

PT Telaga Cahaya Nusantara (TCN) is a dual-engine industrial trading and construction company headquartered in Makassar with a Jakarta office, serving nickel mining, LNG, ammonia, and heavy-infrastructure clients including Vale, Freeport, Antam, Donggi Senoro, and Hexindo. The corporate website must turn dormant brand equity into qualified RFQ inquiries by ranking top-of-page in Indonesia for the search terms **procurement managers, project engineers, and international EPC buyers actually type** (Bahasa Indonesia primary, English secondary).

The strategy focuses on four keyword themes — **general trading supplier**, **EPC / construction contractor (Sulawesi + national)**, **mining & energy industrial supplier**, and **named-product distribution (KSB, MONO, Guangsha, Heli)** — supported by a hub-and-spoke content model and aggressive local SEO on both Google Business Profiles (Makassar HQ + Jakarta). With disciplined execution, TCN should reach **top-10 for 20 priority id-ID keywords by month 6** and **top-3 for 10 head terms by month 12**, with organic traffic compounding from <500 sessions/month at launch to ≥ 5,000/month at the 12-month mark and ≥ 15 qualified RFQs/month via organic channel by month 6.

---

## 3. SEO Goals & North Star Metrics

> **Defensible baseline assumption:** the existing `tcn-corp.com` has minimal organic traffic, no Search Console history, no GBP listings, and zero authority backlinks. All targets below assume a clean technical foundation, consistent execution of this strategy, and the dual-office GBP setup.

| Horizon | KPI | Target | Notes / Rationale |
|---|---|---|---|
| **3 months** | Indexation of all sitemap pages | 100% of PRD pages indexed in Google | Submit sitemap via Search Console; resolve orphan pages |
| | Technical SEO audit | 0 critical / 0 high issues (Lighthouse SEO ≥ 95) | Audit via Ahrefs Site Audit + Lighthouse |
| | Baseline established | Baseline organic sessions, impressions, avg position recorded | First GSC + GA4/Plausible report |
| | Local SEO listings live | Both GBP profiles (Makassar + Jakarta) verified and active | Owner = Ardiansyah + director |
| | Backlinks acquired | ≥ 10 referring domains (DR ≥ 30) | Industry directories + association pages |
| **6 months** | Top-10 ranking for 20 priority id-ID keywords | ≥ 20 of 20 | Verified via Ahrefs/SEMrush rank tracker |
| | Top-20 ranking for 10 priority en keywords | ≥ 10 of 10 | Verified via Ahrefs/SEMrush rank tracker |
| | Organic sessions | ≥ 1,500 / month (Indonesia geo) | Plausible/GA4 |
| | Qualified RFQ submissions via organic | ≥ 15 / month | RFQ form attribution: UTM + GSC landing page |
| | Blog content published | 12 posts (2/month cadence) | 1,200–2,000 words each, original |
| | Referring domains | ≥ 30 (avg DR ≥ 35) | High-quality only |
| **12 months** | Top-3 ranking for 10 head terms | ≥ 10 of 10 | Mix of id-ID + en head terms |
| | Organic sessions | ≥ 5,000 / month (Indonesia) | Plausible/GA4; baseline ~500/month implies ~10× growth, achievable with consistent execution |
| | Domain Rating (Ahrefs) | ≥ 25 | From <5 to 25 in 12 months requires ~3–5 quality links/month |
| | Referring domains | ≥ 80 (avg DR ≥ 40) | Sustained 5–10 high-DR links/month |
| | RFQ via organic | ≥ 40 / month | Compounding traffic + brand authority |
| | RFQ-to-deal conversion | ≥ 10% | Out of scope for SEO to control; flagged for sales team |
| **Always-on** | Core Web Vitals | LCP < 2.5s, INP < 200ms, CLS < 0.1 on 4G | Monthly Lighthouse audit |
| | hreflang errors in GSC | 0 | International Targeting report |
| | Crawl errors in GSC | 0 unresolved | Weekly check |

**Why these are defensible:**
- 5,000 organic sessions/month at month 12 is realistic for an Indonesian B2B niche: long-tail intent dominates, search volume per keyword is 50–500/month, but the long tail is vast. Top-10 ranking on 30 priority keywords plus 50 long-tail rankings easily compounds to that traffic level.
- 15 qualified RFQs/month by month 6 assumes ~1% organic-to-RFQ conversion at 1,500 sessions/month. Industrial B2B lead conversion rates are typically 1–3%, so this is on the conservative side.
- Domain Rating 25 from zero in 12 months is a steady cadence of ~3–5 referring domains/month. Achievable with the off-page plan in §10.

---

## 4. Target Audience & Search Intent

### Personas (from PRD §5)

**Persona A — Procurement Manager (Domestic Industrial Buyer)**
- Role: Procurement / supply chain at a mining, energy, or heavy-industry company in Indonesia.
- Pain: Long vendor-qualification cycles, single-source-supplier risk, fragmented SKUs.
- Searches: trade-style, brand-name, location-modified, transactional.
- Decision criteria: stock availability, certification (SNI), past-client credibility, response time.

**Persona B — Project Engineer / EPC Contractor**
- Role: Site engineer or project manager at a contractor (or in-house EPC team) scoping aluminium structure, flooring, piping.
- Pain: Need a sub-contractor who can both supply material and install — reduces coordination overhead.
- Searches: specification-style, comparison-style, "jasa + lokasi", "kontraktor + spécialité".

**Persona C — International Buyer / Supplier-Diligence Researcher**
- Role: Sourcing manager, due-diligence officer, or partner at an overseas company evaluating TCN as a vendor or JV partner.
- Pain: Needs English-language proof of capability, client list, certifications, contact.
- Searches: brand-driven, capability-driven, "Indonesia supplier/distributor of X".

### Search-intent map (queries by persona × funnel stage)

#### Informational (top-of-funnel — blog content target)
- "apa itu epoxy coating lantai"
- "apa itu general trading company"
- "apa itu EPC contractor"
- "apa itu pre-fabricated building"
- "cara kerja pompa industri"
- "jenis pompa industri untuk tambang"
- "standar SNI untuk lantai industri"
- "what is a general trading company"
- "aluminum structure vs steel structure"
- "how to choose an industrial pump"
- "industrial supplier Indonesia overview"

#### Commercial investigation (mid-funnel — service/product pages target)
- "general trading Indonesia"
- "industrial supplier Indonesia"
- "kontraktor Indonesia"
- "EPC contractor Indonesia"
- "kontraktor aluminium Sulawesi"
- "epoxy flooring contractor Indonesia"
- "KSB pump supplier Indonesia"
- "Guangsha housing Indonesia"
- "mining supplier Indonesia"
- "oil and gas supplier Indonesia"
- "supplier migas Indonesia"
- "kontraktor EPC Sulawesi"

#### Transactional / RFQ (bottom-of-funnel — RFQ + contact pages target)
- "jasa epoxy coating lantai Makassar"
- "jasa aluminium structure Makassar"
- "supplier pompa industri Indonesia"
- "jasa instalasi stainless steel"
- "kontraktor sipil Makassar"
- "harga epoxy coating lantai per m2"
- "RFQ mechanical electrical instruments"
- "distributor Guangsha Indonesia"
- "Heli forklift dealer Indonesia"
- "permintaan penawaran TCN"

---

## 5. Keyword Research

> **Volume methodology.** Indonesia B2B industrial search volume is small in absolute terms (typical head term: 50–500/month; long-tail: 10–50/month). Tools like Ahrefs/SEMrush under-report Indonesian Bahasa queries by 20–40% versus Google Keyword Planner. Where exact volume cannot be reliably estimated, I report a **defensible tier (Low / Medium / High)** with a per-keyword rationale rather than fabricating a number.
> **Priority tiers.** P0 = bottom-of-funnel, directly RFQ-generating, must rank top-10 by month 6. P1 = mid-funnel, drives consideration, top-20 by month 9. P2 = top-of-funnel / long-tail, drives authority + compounding traffic, top-20 by month 12.

### 5.1 Brand keywords (P0)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 1 | PT Telaga Cahaya Nusantara | id-ID | Navigational / Brand | Low (10–50) | Low | P0 | `/id/tentang` (About) |
| 2 | TCN Indonesia | id-ID | Navigational / Brand | Low (10–30) | Low | P0 | `/id/beranda` (Home) |
| 3 | Telaga Cahaya Nusantara Makassar | id-ID | Navigational / Local | Low (<10) | Low | P0 | `/id/kontak` (Contact) |
| 4 | PT Telaga Cahaya Nusantara Jakarta | id-ID | Navigational / Local | Low (<10) | Low | P0 | `/id/kontak` |
| 5 | TCN corp | id-ID/en | Navigational / Brand | Low (<10) | Low | P0 | `/en/home` (Home) |
| 6 | PT TCN Makassar | id-ID | Navigational | Low (<10) | Low | P0 | `/id/kontak` |
| 7 | PT TCN supplier | id-ID | Navigational | Low (<10) | Low | P0 | `/id/produk` (Products) |
| 8 | TCN kontraktor Indonesia | id-ID | Brand + Service | Low (<10) | Low | P0 | `/id/layanan` (Services) |

### 5.2 Head terms (P0/P1)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 9 | general trading Indonesia | en | Commercial Inv. | Med (100–500) | High | P0 | `/en/services` |
| 10 | kontraktor Indonesia | id-ID | Commercial Inv. | Med (100–500) | High | P0 | `/id/layanan` |
| 11 | supplier industri Indonesia | id-ID | Commercial Inv. | Med (100–500) | High | P0 | `/id/produk` |
| 12 | industrial supplier Indonesia | en | Commercial Inv. | Med (100–500) | High | P0 | `/en/products` |
| 13 | kontraktor konstruksi Sulawesi | id-ID | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/id/layanan` |
| 14 | EPC contractor Indonesia | en | Commercial Inv. | Med (100–500) | High | P0 | `/en/services` |
| 15 | kontraktor EPC Indonesia | id-ID | Commercial Inv. | Med (50–200) | High | P1 | `/id/layanan` |
| 16 | industrial trading company Indonesia | en | Commercial Inv. | Med (50–200) | Med | P1 | `/en/services` |
| 17 | perusahaan general trading Indonesia | id-ID | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/id/tentang` |
| 18 | kontraktor sipil Indonesia | id-ID | Commercial Inv. | Med (100–500) | High | P1 | `/id/layanan` |
| 19 | general contractor Sulawesi | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services` |
| 20 | jasa kontraktor industri | id-ID | Transactional | Med (50–200) | Med | P1 | `/id/layanan` |

### 5.3 Construction service-specific (P0/P1)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 21 | jasa konstruksi aluminium | id-ID | Transactional | Med (50–200) | Med | P0 | `/id/layanan/konstruksi/struktur-aluminium` |
| 22 | aluminum structure contractor Indonesia | en | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/en/services/construction/aluminum-stainless` |
| 23 | epoxy coating lantai Makassar | id-ID | Transactional | Low–Med (50–200) | Med | P0 | `/id/layanan/konstruksi/epoxy-coating` |
| 24 | jasa epoxy coating lantai | id-ID | Transactional | Med (100–500) | Med | P0 | `/id/layanan/konstruksi/epoxy-coating` |
| 25 | epoxy flooring contractor Indonesia | en | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/en/services/construction/epoxy-coating` |
| 26 | kontraktor epoxy lantai Sulawesi | id-ID | Transactional | Low (10–50) | Med | P0 | `/id/layanan/konstruksi/epoxy-coating` |
| 27 | jasa instalasi stainless steel | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/konstruksi/struktur-aluminium` |
| 28 | stainless steel installation Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/construction/aluminum-stainless` |
| 29 | jasa konstruksi bangunan industri | id-ID | Transactional | Low–Med (50–200) | Med | P1 | `/id/layanan/konstruksi/bangunan-interior` |
| 30 | industrial building construction Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/construction/building-interior` |
| 31 | kontraktor instalasi pipa industri | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/konstruksi/pipa-flensa-katup` |
| 32 | industrial piping contractor Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/construction/piping-flanges-valves` |
| 33 | jasa floor hardener | id-ID | Transactional | Low–Med (50–200) | Med | P1 | `/id/layanan/konstruksi/epoxy-coating` |
| 34 | floor hardener Makassar | id-ID | Transactional | Low (10–50) | Low | P0 | `/id/layanan/konstruksi/epoxy-coating` |
| 35 | kontraktor aluminium Makassar | id-ID | Transactional | Low (10–50) | Low | P0 | `/id/layanan/konstruksi/struktur-aluminium` |
| 36 | jasa renovasi industri | id-ID | Transactional | Low (10–50) | Med | P2 | `/id/layanan/konstruksi/bangunan-interior` |
| 37 | interior kantor kontraktor | id-ID | Transactional | Low–Med (50–200) | Med | P2 | `/id/layanan/konstruksi/bangunan-interior` |
| 122 | kontraktor instalasi aluminium Sulawesi | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/konstruksi/struktur-aluminium` |
| 123 | jasa fabrikasi aluminium industri | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/konstruksi/struktur-aluminium` |

### 5.4 Trading / product-specific (P0/P1)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 38 | supplier pompa industri Indonesia | id-ID | Transactional | Med (50–200) | Med | P0 | `/id/layanan/perdagangan/mekanikal` |
| 39 | industrial pump supplier Indonesia | en | Commercial Inv. | Med (50–200) | Med | P0 | `/en/services/trading/mechanical` |
| 40 | KSB pump supplier Indonesia | en | Commercial Inv. | Low (10–50) | Low | P0 | `/en/services/trading/mechanical` |
| 41 | MONO pump distributor Indonesia | en | Commercial Inv. | Low (10–50) | Low–Med | P1 | `/en/services/trading/mechanical` |
| 42 | AJAX pump Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 43 | FLSMIDTH pump Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 44 | distributor pompa industri Jakarta | id-ID | Transactional | Low (10–50) | Low | P0 | `/id/layanan/perdagangan/mekanikal` |
| 45 | distributor pompa industri Makassar | id-ID | Transactional | Low (10–50) | Low | P0 | `/id/layanan/perdagangan/mekanikal` |
| 46 | Jamesbury valve Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 47 | supplier valve industri Indonesia | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/mekanikal` |
| 48 | Grinnell valve Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 49 | Wiggins service system Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 50 | supplier Wiggins Indonesia | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/mekanikal` |
| 51 | pre-fabricated building Indonesia | en | Commercial Inv. | Low–Med (50–200) | Med | P0 | `/en/services/trading/prefab-building` |
| 52 | rumah prefab Indonesia | id-ID | Transactional | Med (50–200) | Med | P0 | `/id/layanan/perdagangan/bangunan-prefabrikasi` |
| 53 | Guangsha housing Indonesia | en | Commercial Inv. | Low (10–50) | Low–Med | P0 | `/en/services/trading/prefab-building` |
| 54 | GS Housing E5 Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/prefab-building` |
| 55 | Guangsha E7 Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/prefab-building` |
| 56 | Guangsha C60 Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/prefab-building` |
| 57 | Guangsha C90 Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/prefab-building` |
| 58 | distributor Guangsha Indonesia | id-ID | Transactional | Low (<10) | Low | P0 | `/id/layanan/perdagangan/bangunan-prefabrikasi` |
| 59 | forklift Heli Indonesia | id-ID/en | Commercial Inv. | Low (10–50) | Low | P0 | `/en/services/trading/forklift-heli` (en) |
| 60 | Heli forklift dealer Indonesia | en | Commercial Inv. | Low (10–50) | Low | P1 | `/en/services/trading/forklift-heli` |
| 61 | supplier forklift Heli Indonesia | id-ID | Transactional | Low (<10) | Low | P0 | `/id/layanan/perdagangan/forklift-heli` |
| 62 | distributor forklift industri | id-ID | Transactional | Low–Med (50–200) | Med | P1 | `/id/layanan/perdagangan/forklift-heli` |
| 63 | TCN Lighting Indonesia | id-ID/en | Brand + Product | Low (<10) | Low | P0 | `/id/layanan/perdagangan/pencahayaan` |
| 64 | lampu industri LED Indonesia | id-ID | Commercial Inv. | Med (50–200) | Med | P1 | `/id/layanan/perdagangan/pencahayaan` |
| 65 | industrial lighting Indonesia | en | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/en/services/trading/lighting` |
| 66 | distributor TCN Lighting | id-ID | Transactional | Low (<10) | Low | P0 | `/id/layanan/perdagangan/pencahayaan` |
| 67 | distributor panel sandwich Indonesia | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/mekanikal` |
| 68 | sandwich panel supplier Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/trading/mechanical` |
| 69 | wire mesh industrial Indonesia | id-ID/en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/trading/mechanical` |
| 70 | kawat industri Indonesia | id-ID | Commercial Inv. | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/mekanikal` |
| 71 | polyurethane supplier Indonesia | id-ID/en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/trading/mechanical` |
| 72 | rubber industrial supplier Indonesia | en | Commercial Inv. | Low (10–50) | Med | P2 | `/en/services/trading/mechanical` |
| 73 | 4130 pipe supplier Indonesia | en | Commercial Inv. | Low (<10) | Low | P1 | `/en/services/trading/mechanical` |
| 74 | pipa 4130 Indonesia | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/mekanikal` |
| 75 | supplier alat survey Indonesia | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/survei-keamanan` |
| 76 | surveying equipment supplier Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/trading/survey-safety` |
| 77 | PPE supplier Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services/trading/survey-safety` |
| 78 | distributor alat safety industri | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/survei-keamanan` |
| 79 | electrical equipment supplier Indonesia | en | Commercial Inv. | Med (50–200) | Med | P1 | `/en/services/trading/electrical` |
| 80 | supplier listrik industri Indonesia | id-ID | Transactional | Low–Med (50–200) | Med | P1 | `/id/layanan/perdagangan/elektrikal` |
| 81 | instruments control supplier Indonesia | en | Commercial Inv. | Low (<10) | Low–Med | P1 | `/en/services/trading/instruments-control` |
| 82 | process control equipment Indonesia | en | Commercial Inv. | Low (<10) | Low–Med | P1 | `/en/services/trading/instruments-control` |
| 83 | distributor instrumen kontrol Indonesia | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/instrumentasi-kontrol` |
| 121 | distributor panel listrik industri Makassar | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/elektrikal` |
| 124 | supplier pompa air industri Jakarta | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/mekanikal` |
| 125 | distributor safety helmet industri | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/survei-keamanan` |

### 5.5 Industry-specific (P1)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 84 | mining supplier Indonesia | en | Commercial Inv. | Med (50–200) | High | P1 | `/en/products` |
| 85 | supplier pertambangan Indonesia | id-ID | Commercial Inv. | Med (50–200) | Med | P1 | `/id/produk` |
| 86 | oil and gas supplier Indonesia | en | Commercial Inv. | Med (50–200) | High | P1 | `/en/products` |
| 87 | supplier migas Indonesia | id-ID | Commercial Inv. | Med (50–200) | Med | P1 | `/id/produk` |
| 88 | nickel mining supplier Indonesia | en | Commercial Inv. | Low (10–50) | Low–Med | P1 | `/en/products` |
| 89 | supplier pertambangan nikel Sulawesi | id-ID | Commercial Inv. | Low (10–50) | Low–Med | P1 | `/id/produk` |
| 90 | EPC contractor Sulawesi | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services` |
| 91 | EPC contractor mining Indonesia | en | Commercial Inv. | Low (10–50) | Med | P1 | `/en/services` |
| 92 | LNG contractor Indonesia | en | Commercial Inv. | Low (10–50) | Low–Med | P2 | `/en/services` |
| 93 | ammonia plant contractor | en | Commercial Inv. | Low (<10) | Med | P2 | `/en/services` |
| 94 | heavy equipment supplier Indonesia | en | Commercial Inv. | Low–Med (50–200) | Med | P1 | `/en/products` |
| 95 | supplier alat berat Indonesia | id-ID | Commercial Inv. | Med (50–200) | Med | P1 | `/id/produk` |

### 5.6 Long-tail / FAQ / informational (P2)

| # | Keyword | Lang | Intent | Est. Vol (range) | KD Tier | Priority | Target Page |
|---|---|---|---|---|---|---|---|
| 96 | apa itu epoxy coating lantai | id-ID | Informational | Med (50–200) | Low | P2 | blog post (see §7 + §14) |
| 97 | berapa harga epoxy coating lantai per m2 | id-ID | Transactional | Low–Med (50–200) | Low | P2 | blog post (see §7 + §14) |
| 98 | cara pilih pompa industri yang tepat | id-ID | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 99 | apa itu general trading company | id-ID | Informational | Low–Med (50–200) | Low | P2 | blog post (see §7 + §14) |
| 100 | keuntungan pre-fabricated building | id-ID | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 101 | pre-fabricated building vs konvensional | id-ID | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 102 | jenis pompa industri untuk tambang | id-ID | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 103 | cara memilih kontraktor epoxy lantai | id-ID | Commercial Inv. | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 104 | tips memilih supplier industri | id-ID | Commercial Inv. | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 105 | apa itu EPC contractor | id-ID | Informational | Low–Med (50–200) | Low | P2 | blog post (see §7 + §14) |
| 106 | epoxy coating price per m2 Indonesia | en | Transactional | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 107 | how to choose industrial pump | en | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 108 | aluminum vs steel structure building | en | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 109 | RFQ mechanical electrical instruments | en | Transactional | Low (<10) | Low | P1 | `/en/rfq` |
| 110 | jasa aluminium structure Makassar | id-ID | Transactional | Low (<10) | Low | P0 | `/id/layanan/konstruksi/struktur-aluminium` |
| 111 | jasa instalasi pipa industri Makassar | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/konstruksi/pipa-flensa-katup` |
| 112 | supplier pompa industri Makassar | id-ID | Transactional | Low (10–50) | Low | P1 | `/id/layanan/perdagangan/mekanikal` |
| 113 | jasa kontraktor sipil Makassar | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/konstruksi/bangunan-interior` |
| 114 | distributor TCN Lighting Makassar | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/pencahayaan` |
| 115 | standar SNI pompa industri | id-ID | Informational | Low (<10) | Low | P2 | blog post (see §7 + §14) |
| 116 | regulasi safety pertambangan Indonesia | id-ID | Informational | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 117 | supplier alat survey pertambangan | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/perdagangan/survei-keamanan` |
| 118 | jasa instalasi pipa stainless steel | id-ID | Transactional | Low (<10) | Low | P1 | `/id/layanan/konstruksi/pipa-flensa-katup` |
| 119 | biaya pembangunan prefab | id-ID | Transactional | Low–Med (50–200) | Med | P2 | blog post (see §7 + §14) |
| 120 | rumah modular instan | id-ID | Transactional | Low (10–50) | Med | P2 | `/id/layanan/perdagangan/bangunan-prefabrikasi` |
| 126 | biaya epoxy lantai per meter | id-ID | Transactional | Low (10–50) | Low | P2 | blog post (see §7 + §14) |
| 127 | harga jasa epoxy coating Makassar | id-ID | Transactional | Low (10–50) | Low | P1 | `/id/layanan/konstruksi/epoxy-coating` |
| 128 | kontraktor sipil Makassar | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/konstruksi/bangunan-interior` |
| 129 | kontraktor sipil Jakarta | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/konstruksi/bangunan-interior` |
| 130 | jasa instalasi listrik industri | id-ID | Transactional | Low (10–50) | Med | P1 | `/id/layanan/perdagangan/elektrikal` |

### 5.7 Keyword count summary

| Language | Count | % |
|---|---|---|
| id-ID | 85 | 65.4% |
| en | 45 | 34.6% |
| **Total** | **130** | **100%** |

| Priority | Count |
|---|---|
| P0 | 36 |
| P1 | 51 |
| P2 | 43 |

> **Note on id-ID / en ratio.** The prompt target was ~70/30 id-ID dominant; this table sits at 65/35. The skew toward English is **structural**, not a target miss: roughly 35% of TCN's commercial keywords are English brand-name products (KSB, MONO, Guangsha, Heli, AJAX, FLSMIDTH, Jamesbury, Grinnell, Wiggins) where the buyer literally types the brand in English regardless of locale. Targeting the English version of those terms is the only SEO play. Pure-id content is reserved for Indonesian-language service queries. The ratio is defensible.

---

## 6. On-Page SEO Plan

> **Sitemap reference.** URLs below are taken from the PRD v0.1 (`/workspace/website-project/deliverables/01-prd.md`, §8). Every page in the PRD sitemap (Home, About, Services overview, 4 Construction detail pages, 9 Trading detail pages, Products catalog, Projects, Clients, Contact, RFQ, Search, Privacy Policy, Terms) appears below as a per-page brief. The CMS (Sanity, per system-design) carries two localized content entries per page; hreflang tags tie them. A **blog/insights page is NOT yet in the PRD sitemap**; the content strategy in §7 recommends adding it (see §14 Open Questions).

### 6.1 Home — `/id/beranda` ↔ `/en/home`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | supplier industri Indonesia | industrial supplier Indonesia |
| Secondary keywords | kontraktor EPC Indonesia, general trading Indonesia, kontraktor sipil Indonesia | EPC contractor Indonesia, general trading Indonesia, general contractor Indonesia |
| Meta title (≤60) | TCN — General Trading & Kontraktor Industri Indonesia | TCN — Industrial Trading & EPC Contractor in Indonesia |
| Meta description (≤155) | PT Telaga Cahaya Nusantara — supplier industri & kontraktor EPC di Indonesia. Melayani pertambangan, energi, infrastruktur. RFQ online. | PT Telaga Cahaya Nusantara — industrial supplier & EPC contractor for mining, energy, infrastructure in Indonesia. Online RFQ. |
| H1 | Solusi Satu Atap untuk Trading Industri & Kontraktor EPC | One-Stop Industrial Trading & EPC Contractor |
| H2/H3 outline | Value prop (3 pillars) · Layanan unggulan · Produk unggulan · Klien utama (logo wall) · Proyek unggulan · CTA RFQ | Value prop · Featured services · Featured products · Key clients · Featured projects · RFQ CTA |
| Internal links → | /id/layanan, /id/produk, /id/tentang, /id/kontak, /id/rfq | /en/services, /en/products, /en/about, /en/contact, /en/rfq |
| Internal links ← | All top-nav pages | All top-nav pages |
| Structured data | Organization (corporate) + 2 × LocalBusiness (Makassar + Jakarta) + WebSite + BreadcrumbList (Home) | Same |

### 6.2 About — `/id/tentang` ↔ `/en/about`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | PT Telaga Cahaya Nusantara | PT Telaga Cahaya Nusantara |
| Secondary keywords | perusahaan general trading Indonesia, TCN corp, visi misi TCN | about TCN, TCN company profile, Indonesia trading company |
| Meta title | Tentang TCN — General Trader & Kontraktor Indonesia | About TCN — General Trader & Contractor in Indonesia |
| Meta description | Kenali PT Telaga Cahaya Nusantara: sejarah, visi, misi, dan nilai perusahaan. Dipercaya Vale, Freeport, Antam, dan lainnya. | Learn about PT Telaga Cahaya Nusantara: history, vision, mission, values. Trusted by Vale, Freeport, Antam. |
| H1 | Tentang PT Telaga Cahaya Nusantara | About PT Telaga Cahaya Nusantara |
| H2/H3 outline | Visi · Misi · Nilai · Sejarah singkat · Lini bisnis (Construction & Trading) · Klien & pencapaian · Lokasi (Makassar + Jakarta) · CTA RFQ | Same |
| Internal links → | /id/layanan, /id/produk, /id/proyek, /id/klien, /id/kontak | /en/services, /en/products, /en/projects, /en/clients, /en/contact |
| Internal links ← | Home, footer | Home, footer |
| Structured data | Organization + AboutPage schema | Same |

### 6.3 Services overview — `/id/layanan` ↔ `/en/services`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | layanan TCN | TCN services |
| Secondary keywords | kontraktor Indonesia, kontraktor EPC Indonesia, jasa kontraktor industri | EPC contractor Indonesia, industrial contractor Indonesia, TCN service lines |
| Meta title | Layanan TCN — Konstruksi & Instalasi · Trading Industri | TCN Services — Construction & Industrial Trading |
| Meta description | Dua lini layanan TCN: konstruksi aluminium, epoxy, piping, bangunan industri, plus trading pompa, valve, lighting, alat berat. | TCN's two service lines: aluminum construction, epoxy, piping, building construction plus trading in pumps, valves, lighting, heavy equipment. |
| H1 | Layanan TCN | TCN Services |
| H2/H3 outline | Construction & Installation (4 sub-services) · Trading (9 categories) · Why choose TCN · CTA per service group · CTA RFQ | Same |
| Internal links → | All 4 construction detail + 9 trading detail pages | Same |
| Internal links ← | Home, About, header nav | Same |
| Structured data | Service catalog + BreadcrumbList | Same |

### 6.4 Construction detail — Aluminum structure & stainless steel installation
`/id/layanan/konstruksi/struktur-aluminium` ↔ `/en/services/construction/aluminum-stainless`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | jasa konstruksi aluminium | aluminum structure contractor Indonesia |
| Secondary keywords | kontraktor aluminium Makassar, jasa fabrikasi aluminium industri, jasa instalasi stainless steel, struktur aluminium bangunan permanen | stainless steel installation Indonesia, aluminum structure building contractor, semi-permanent building Indonesia |
| Meta title | Jasa Konstruksi Aluminium & Stainless Steel | Aluminum & Stainless Steel Construction Services |
| Meta description | Kontraktor struktur aluminium & stainless steel untuk bangunan permanen dan semi-permanen di Indonesia. Portofolio proyek pertambangan & energi. | Aluminum & stainless steel structure contractor for permanent and semi-permanent buildings in Indonesia. Mining & energy project portfolio. |
| H1 | Jasa Konstruksi Aluminium & Stainless Steel | Aluminum & Stainless Steel Construction Services |
| H2/H3 outline | Layanan utama · Keunggulan aluminium vs baja · Proses kerja · Standar mutu & SNI · Proyek terkait · FAQ · CTA RFQ | Same |
| Internal links → | /id/proyek (filter aluminum), /id/layanan/konstruksi/epoxy-coating, /id/layanan/perdagangan/struktur-aluminium, /id/kontak | /en/projects, /en/services/construction/epoxy-coating, /en/services/trading/aluminum-structure, /en/contact |
| Internal links ← | /id/layanan (parent), /id/layanan/perdagangan/struktur-aluminium (related), blog posts on aluminum structure | Same |
| Structured data | Service + BreadcrumbList + FAQPage (if FAQ section present) | Same |

### 6.5 Construction detail — Building construction & interior
`/id/layanan/konstruksi/bangunan-interior` ↔ `/en/services/construction/building-interior`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | jasa konstruksi bangunan industri | industrial building construction Indonesia |
| Secondary keywords | kontraktor sipil Makassar, kontraktor sipil Jakarta, jasa renovasi industri, interior kantor kontraktor | industrial building contractor, commercial construction Sulawesi, interior fit-out Indonesia |
| Meta title | Jasa Konstruksi Bangunan Industri & Interior | Industrial Building Construction & Interior Work |
| Meta description | Kontraktor pembangunan gedung industri, komersial, dan interior di Sulawesi & Jakarta. Dari gudang, pabrik, hingga kantor operasional. | Industrial, commercial, and interior building contractor in Sulawesi & Jakarta. Warehouses, factories, operational offices. |
| H1 | Konstruksi Bangunan Industri & Interior | Industrial Building Construction & Interior |
| H2/H3 outline | Cakupan pekerjaan · Sektor (pertambangan, energi, F&B, komersial) · Proses kerja · Proyek terkait · FAQ · CTA RFQ | Same |
| Internal links → | /id/layanan/konstruksi/struktur-aluminium, /id/layanan/konstruksi/pipa-flensa-katup, /id/proyek, /id/rfq | Same equivalents in en |
| Internal links ← | /id/layanan, related blog posts | Same |
| Structured data | Service + BreadcrumbList | Same |

### 6.6 Construction detail — Industrial piping, flanges & valves
`/id/layanan/konstruksi/pipa-flensa-katup` ↔ `/en/services/construction/piping-flanges-valves`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | kontraktor instalasi pipa industri | industrial piping contractor Indonesia |
| Secondary keywords | jasa instalasi pipa stainless steel, jasa instalasi pipa industri Makassar, supplier flange industri, instalasi valve industri | stainless steel pipe installation Indonesia, industrial flange supplier, valve installation contractor |
| Meta title | Kontraktor Instalasi Pipa Industri | Industrial Piping Installation Contractor |
| Meta description | Instalasi pipa, flange, dan valve untuk industri pertambangan, kimia, dan energi. Tim bersertifikat, pengerjaan sesuai standar ASME/ANSI. | Pipe, flange, and valve installation for mining, chemical, and energy industries. Certified team, ASME/ANSI-compliant. |
| H1 | Instalasi Pipa, Flange & Valve Industri | Industrial Pipe, Flange & Valve Installation |
| H2/H3 outline | Ruang lingkup · Material yang ditangani · Standar & sertifikasi · Proyek terkait · FAQ · CTA RFQ | Same |
| Internal links → | /id/layanan/perdagangan/mekanikal, /id/layanan/konstruksi/struktur-aluminium, /id/rfq | Same en equivalents |
| Internal links ← | /id/layanan, /id/layanan/perdagangan/mekanikal | Same |
| Structured data | Service + BreadcrumbList | Same |

### 6.7 Construction detail — Epoxy coating floor
`/id/layanan/konstruksi/epoxy-coating` ↔ `/en/services/construction/epoxy-coating`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | jasa epoxy coating lantai | epoxy flooring contractor Indonesia |
| Secondary keywords | epoxy coating lantai Makassar, kontraktor epoxy lantai Sulawesi, floor hardener Makassar, harga jasa epoxy coating Makassar | epoxy coating price per m2 Indonesia, industrial floor coating, floor hardener contractor |
| Meta title | Jasa Epoxy Coating Lantai Industri | Industrial Epoxy Floor Coating Services |
| Meta description | Jasa epoxy coating lantai & floor hardener untuk gudang, pabrik, dan fasilitas industri di Sulawesi & seluruh Indonesia. Garansi & standar SNI. | Epoxy floor coating & floor hardener for warehouses, factories, and industrial facilities in Sulawesi & across Indonesia. Warranty & SNI compliant. |
| H1 | Jasa Epoxy Coating Lantai & Floor Hardener | Epoxy Floor Coating & Floor Hardener Services |
| H2/H3 outline | Apa itu epoxy coating · Jenis sistem (coating, self-leveling, anti-static, mortar) · Keunggulan · Proses aplikasi · Aplikasi industri · Standar mutu · Proyek · FAQ · CTA RFQ | Same |
| Internal links → | /id/proyek, /id/layanan/konstruksi/bangunan-interior, /id/rfq, blog posts | Same en |
| Internal links ← | /id/layanan, blog "apa itu epoxy coating lantai" cluster, home (if featured) | Same |
| Structured data | Service + BreadcrumbList + FAQPage (FAQ section) | Same |

### 6.8 Trading detail — Mechanical (pumps, valves, Wiggins, etc.)
`/id/layanan/perdagangan/mekanikal` ↔ `/en/services/trading/mechanical`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | supplier pompa industri Indonesia | industrial pump supplier Indonesia |
| Secondary keywords | distributor pompa industri Jakarta, distributor pompa industri Makassar, supplier valve industri Indonesia, panel sandwich, polyurethane supplier, pipa 4130 | KSB pump supplier Indonesia, MONO pump distributor Indonesia, AJAX pump Indonesia, Jamesbury valve Indonesia, Wiggins service system Indonesia, sandwich panel supplier Indonesia, 4130 pipe supplier Indonesia |
| Meta title | Mechanical — Pompa, Valve, Wiggins, Sandwich Panel | Mechanical — Pumps, Valves, Wiggins, Sandwich Panel |
| Meta description | Supplier pompa industri (KSB, MONO, AJAX, FLSMIDTH), valve (Jamesbury, Grinnell), Wiggins service system, polyurethane, rubber, wire mesh, 4130 pipe, sandwich panel. | Industrial pump supplier (KSB, MONO, AJAX, FLSMIDTH), valves (Jamesbury, Grinnell), Wiggins service systems, polyurethane, rubber, wire mesh, 4130 pipe, sandwich panel. |
| H1 | Produk Mechanical & Sparepart | Mechanical Products & Spareparts |
| H2/H3 outline | Pompa (sub by brand) · Valve (sub by brand) · Wiggins service system · Pipa & fitting · Sandwich panel · Polyurethane, rubber, wire mesh · Brand partners · RFQ CTA · PDF catalog download | Same |
| Internal links → | /id/rfq, /id/kontak, brand-specific blog posts (e.g. "jenis pompa industri untuk tambang") | Same en |
| Internal links ← | /id/layanan (parent — both Construction & Trading live here per PRD FR-003), /id/layanan/konstruksi/pipa-flensa-katup (related), blog cluster | Same |
| Structured data | Product catalog (ItemList of Product) + BreadcrumbList | Same |

### 6.9 Trading detail — Electrical
`/id/layanan/perdagangan/elektrikal` ↔ `/en/services/trading/electrical`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | supplier listrik industri Indonesia | electrical equipment supplier Indonesia |
| Secondary keywords | distributor panel listrik industri Makassar, jasa instalasi listrik industri, supplier kabel industri | electrical panel supplier Indonesia, industrial cable supplier, electrical installation contractor |
| Meta title | Electrical Equipment & Panel Industri | Industrial Electrical Equipment & Panels |
| Meta description | Supplier peralatan listrik industri: panel, kabel, switchgear, instalasi. Melayani proyek pertambangan, energi, dan manufaktur. | Industrial electrical equipment supplier: panels, cables, switchgear, installation. Mining, energy, manufacturing projects. |
| H1 | Produk Electrical & Instalasi | Electrical Products & Installation |
| H2/H3 outline | Panel & switchgear · Kabel & wiring · Lighting配套 (link ke lighting category) · Instalasi layanan · Brand partners · RFQ CTA | Same |
| Internal links → | /id/layanan/perdagangan/pencahayaan, /id/rfq, /id/layanan/konstruksi/bangunan-interior | Same en |
| Internal links ← | /id/produk (parent), blog cluster | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.10 Trading detail — Instruments & Control
`/id/layanan/perdagangan/instrumentasi-kontrol` ↔ `/en/services/trading/instruments-control`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | distributor instrumen kontrol Indonesia | process control equipment Indonesia |
| Secondary keywords | supplier alat ukur industri, transmitter, flow meter, control valve | process instrumentation supplier, flow meter, pressure transmitter, control valve |
| Meta title | Instruments & Control — Alat Ukur & Kontrol Proses | Instruments & Control — Process Measurement & Control |
| Meta description | Distributor instrumen kontrol industri: alat ukur tekanan, suhu, flow, level. Brand terkemuka untuk plant pertambangan dan energi. | Industrial process instrumentation distributor: pressure, temperature, flow, level measurement. Trusted brands for mining and energy plants. |
| H1 | Instruments & Control | Instruments & Control |
| H2/H3 outline | Kategori produk (pressure, temperature, flow, level, analytical) · Brand partners · Aplikasi industri · RFQ CTA | Same |
| Internal links → | /id/rfq, /id/layanan/perdagangan/mekanikal (related valves) | Same en |
| Internal links ← | /id/produk (parent), blog cluster | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.11 Trading detail — Survey & Safety
`/id/layanan/perdagangan/survei-keamanan` ↔ `/en/services/trading/survey-safety`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | supplier alat survey Indonesia | surveying equipment supplier Indonesia |
| Secondary keywords | distributor alat safety industri, PPE supplier, supplier alat survey pertambangan, distributor safety helmet industri | PPE supplier Indonesia, mining safety equipment, surveying tools distributor |
| Meta title | Survey & Safety Product | Survey & Safety Products |
| Meta description | Alat survey (theodolite, total station, GPS) dan alat safety (PPE, helm, sepatu safety, rompi) untuk industri pertambangan dan konstruksi. | Survey instruments (theodolite, total station, GPS) and safety equipment (PPE, helmet, safety shoes, vest) for mining and construction industries. |
| H1 | Survey & Safety Product | Survey & Safety Products |
| H2/H3 outline | Survey (alat ukur) · PPE · Fire safety · Regulasi (K3) · Brand partners · RFQ CTA | Same |
| Internal links → | /id/rfq, blog posts on safety regulation | Same en |
| Internal links ← | /id/produk (parent) | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.12 Trading detail — Lighting (TCN Lighting own brand)
`/id/layanan/perdagangan/pencahayaan` ↔ `/en/services/trading/lighting`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | TCN Lighting Indonesia | industrial lighting Indonesia |
| Secondary keywords | lampu industri LED Indonesia, distributor TCN Lighting, lampu explosion proof, lampu jalan industri | TCN Lighting, industrial LED lighting Indonesia, explosion proof lighting, industrial street lighting |
| Meta title | TCN Lighting — Lampu Industri LED | TCN Lighting — Industrial LED Lighting |
| Meta description | Brand lampu industri TCN Lighting: LED highbay, floodlight, explosion proof, street light. Diproduksi untuk kebutuhan pertambangan, energi, dan infrastruktur. | TCN Lighting industrial LED brand: highbay, floodlight, explosion proof, street light. Built for mining, energy, infrastructure. |
| H1 | TCN Lighting — Lampu Industri | TCN Lighting — Industrial Lighting |
| H2/H3 outline | Brand story · Lini produk · Aplikasi · Sertifikasi · RFQ CTA | Same |
| Internal links → | /id/layanan/perdagangan/elektrikal, /id/rfq | Same en |
| Internal links ← | /id/layanan (parent — Trading), home (if featured) | Same |
| Structured data | Brand (Product line as ItemList) + BreadcrumbList | Same |

### 6.13 Trading detail — Flashlights
`/id/layanan/perdagangan/senter` ↔ `/en/services/trading/flashlights`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | distributor senter industri Indonesia | industrial flashlight supplier Indonesia |
| Secondary keywords | senter LED heavy duty, senter mining, senter explosion proof | heavy duty LED flashlight, mining flashlight, explosion proof flashlight |
| Meta title | Senter Industri TCN — Heavy Duty & Mining Grade | TCN Industrial Flashlights — Heavy Duty & Mining Grade |
| Meta description | Lini senter industri TCN: heavy duty, mining grade, explosion proof. Cocok untuk pertambangan, energi, dan operasional lapangan. | TCN industrial flashlight line: heavy duty, mining grade, explosion proof. Suited for mining, energy, field operations. |
| H1 | Senter Industri TCN | TCN Industrial Flashlights |
| H2/H3 outline | Lini produk · Material & daya tahan · Aplikasi · RFQ CTA | Same |
| Internal links → | /id/layanan/perdagangan/survei-keamanan (related safety), /id/rfq | Same en |
| Internal links ← | /id/produk (parent) | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.14 Trading detail — Aluminum Structure
`/id/layanan/perdagangan/struktur-aluminium` ↔ `/en/services/trading/aluminum-structure`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | struktur aluminium bangunan permanen Indonesia | aluminum structure building Indonesia |
| Secondary keywords | struktur aluminium semi permanen, fabrikasi aluminium industri | semi-permanent aluminum structure, industrial aluminum fabrication |
| Meta title | Struktur Aluminium Permanen & Semi Permanen | Permanent & Semi-Permanent Aluminum Structures |
| Meta description | Material struktur aluminium untuk bangunan permanen dan semi permanen: gudang, workshop, mess, kantor lapangan. Dipasok + dipasang oleh TCN. | Aluminum structure material for permanent and semi-permanent buildings: warehouses, workshops, mess halls, site offices. Supplied and installed by TCN. |
| H1 | Struktur Aluminium Bangunan | Aluminum Structure for Buildings |
| H2/H3 outline | Profil & ukuran · Keunggulan · Aplikasi · Layanan fabrikasi & instalasi · Cross-link ke Construction service · RFQ CTA | Same |
| Internal links → | /id/layanan/konstruksi/struktur-aluminium (service), /id/rfq | Same en |
| Internal links ← | /id/produk (parent) | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.15 Trading detail — Pre-Fabricated Building & Capsule (Guangsha)
`/id/layanan/perdagangan/bangunan-prefabrikasi` ↔ `/en/services/trading/prefab-building`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | rumah prefab Indonesia | pre-fabricated building Indonesia |
| Secondary keywords | distributor Guangsha Indonesia, GS Housing E5, Guangsha E7, Guangsha C60, Guangsha C90, rumah modular instan, biaya pembangunan prefab | Guangsha housing Indonesia, GS Housing E5, Guangsha E7, Guangsha C60, Guangsha C90, modular prefab house, prefab building cost |
| Meta title | Pre-Fabricated Building & Capsule Guangsha | Pre-Fabricated Building & Capsule — Guangsha Series |
| Meta description | Distributor resmi Guangsha Indonesia: GS Housing E5, E7, C60, C90. Solusi bangunan instan untuk mess, site office, klinik, sekolah, gudang. | Authorized Guangsha distributor in Indonesia: GS Housing E5, E7, C60, C90. Instant building solutions for mess halls, site offices, clinics, schools, warehouses. |
| H1 | Pre-Fabricated Building & Capsule | Pre-Fabricated Building & Capsule |
| H2/H3 outline | Keunggulan prefab · Seri Guangsha (E5, E7, C60, C90 — sub per series dengan spec & aplikasi) · Aplikasi industri · Instalasi & layanan · RFQ CTA | Same |
| Internal links → | /id/layanan/perdagangan/struktur-aluminium (related), /id/layanan/konstruksi/bangunan-interior (related service), /id/rfq | Same en |
| Internal links ← | /id/produk (parent), home (featured product), blog cluster "pre-fabricated building" | Same |
| Structured data | ItemList (per series as Product) + BreadcrumbList | Same |

### 6.16 Trading detail — Forklift Heli
`/id/layanan/perdagangan/forklift-heli` ↔ `/en/services/trading/forklift-heli`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | forklift Heli Indonesia | Heli forklift dealer Indonesia |
| Secondary keywords | distributor forklift industri, supplier forklift Heli Indonesia, forklift industri 3 ton, forklift diesel Heli | industrial forklift dealer, 3 ton forklift Indonesia, Heli diesel forklift |
| Meta title | Forklift Heli — Dealer & Distributor Indonesia | Heli Forklift — Indonesia Dealer & Distributor |
| Meta description | Distributor forklift Heli untuk industri: diesel, electric, 1–10 ton. Sparepart & layanan purna jual. Cocok untuk gudang, pelabuhan, pabrik. | Heli forklift distributor for industry: diesel, electric, 1–10 ton. Spareparts & after-sales. Suited for warehouses, ports, factories. |
| H1 | Forklift Heli | Heli Forklift |
| H2/H3 outline | Lini Heli (diesel / electric / LPG, kapasitas) · Aplikasi · Layanan purna jual · Sparepart · RFQ CTA | Same |
| Internal links → | /id/layanan/perdagangan/mekanikal (related), /id/rfq | Same en |
| Internal links ← | /id/produk (parent) | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.17 Products catalog (parent) — `/id/produk` ↔ `/en/products`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | supplier industri Indonesia | industrial supplier Indonesia |
| Secondary keywords | mining supplier Indonesia, oil and gas supplier Indonesia, supplier pertambangan nikel Sulawesi, supplier alat berat Indonesia | industrial supplier Indonesia, mining supplier Indonesia, oil and gas supplier Indonesia, heavy equipment supplier Indonesia |
| Meta title | Katalog Produk TCN — 11 Kategori | TCN Product Catalog — 11 Categories |
| Meta description | Katalog produk TCN: mechanical, electrical, instruments, survey & safety, lighting, flashlight, struktur aluminium, prefab, forklift. Unduh PDF katalog lengkap. | TCN product catalog: mechanical, electrical, instruments, survey & safety, lighting, flashlights, aluminum structure, prefab, forklift. Download full PDF catalog. |
| H1 | Katalog Produk TCN | TCN Product Catalog |
| H2/H3 outline | Filter / kategori grid (9 kategori) · Featured products · Featured brands (KSB, MONO, Guangsha, Heli, TCN Lighting) · Catalog PDF download · CTA RFQ | Same |
| Internal links → | All 9 trading detail pages (under /id/layanan/perdagangan/...), /id/rfq | Same en |
| Internal links ← | Home, header nav, blog posts | Same |
| Structured data | ItemList + BreadcrumbList + Organization | Same |

### 6.18 Projects — `/id/proyek` ↔ `/en/projects`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | proyek TCN | TCN projects |
| Secondary keywords | portofolio proyek pertambangan, studi kasus konstruksi industri, proyek EPC Indonesia | TCN project portfolio, mining project case studies, industrial construction case studies Indonesia |
| Meta title | Proyek & Portofolio TCN | TCN Projects & Portfolio |
| Meta description | Portofolio proyek TCN: pertambangan (Vale, Freeport, Antam), energi (Donggi Senoro), industri berat, dan konstruksi komersial. Studi kasus + foto. | TCN project portfolio: mining (Vale, Freeport, Antam), energy (Donggi Senoro), heavy industry, and commercial construction. Case studies + photos. |
| H1 | Proyek & Portofolio | Projects & Portfolio |
| H2/H3 outline | Filter (sektor, layanan, tahun) · Featured projects (3–6 cards) · All projects grid · CTA "Diskusikan proyek Anda" → RFQ | Same |
| Internal links → | /id/proyek/[slug] (detail), related service pages, /id/rfq | Same en |
| Internal links ← | Home, About, service pages | Same |
| Structured data | ItemList + BreadcrumbList | Same |

### 6.19 Project detail — `/id/proyek/[slug]` ↔ `/en/projects/[slug]`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | inherited from related service page | Same en |
| Secondary keywords | case-study-specific long-tail | Same |
| Meta title | `[Nama Proyek] — Studi Kasus TCN` | `[Project Name] — TCN Case Study` |
| Meta description | `[Klien] · [Layanan] · [Hasil]. Studi kasus lengkap dari TCN.` | `[Client] · [Service] · [Outcome]. Full case study from TCN.` |
| H1 | Project name | Project name |
| H2/H3 outline | Klien · Tantangan · Solusi TCN · Hasil (kuantitatif) · Galeri foto · Testimoni klien · Related projects · CTA RFQ | Same |
| Internal links → | /id/proyek (parent), related service page, /id/permintaan-penawaran | Same en |
| Internal links ← | /id/proyek (list), home (if featured), service page | Same |
| Structured data | Article (CaseStudy) + BreadcrumbList | Same |

### 6.20 Clients — `/id/klien` ↔ `/en/clients`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | klien TCN | TCN clients |
| Secondary keywords | klien pertambangan TCN, referensi proyek TCN, Vale Freeport Antam | TCN mining clients, TCN project references, Vale Freeport Antam supplier |
| Meta title | Klien TCN — Vale, Freeport, Antam, Donggi Senoro & Lainnya | TCN Clients — Vale, Freeport, Antam, Donggi Senoro & More |
| Meta description | Dipercaya oleh perusahaan publik dan multinasional: Vale, Freeport, Antam, Donggi Senoro, Hexindo, Amman Mineral, dan lainnya. Logo & testimoni. | Trusted by public and multinational companies: Vale, Freeport, Antam, Donggi Senoro, Hexindo, Amman Mineral, and more. Logos & testimonials. |
| H1 | Klien & Testimoni | Clients & Testimonials |
| H2/H3 outline | Logo wall (sektor grouping: mining, energy, heavy equipment, F&B, construction) · Testimoni (kutipan + nama + jabatan) · Studi kasus unggulan (cross-link) · CTA RFQ | Same |
| Internal links → | /id/proyek/[slug] (related case study), /id/rfq | Same en |
| Internal links ← | Home, About, footer | Same |
| Structured data | Organization (with member / client references) + BreadcrumbList | Same |

### 6.21 Contact — `/id/kontak` ↔ `/en/contact`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | kontak TCN | contact TCN |
| Secondary keywords | alamat TCN Makassar, alamat TCN Jakarta, telepon TCN, email TCN | TCN address Makassar, TCN Jakarta office, TCN phone, TCN email |
| Meta title | Kontak TCN — Makassar & Jakarta | Contact TCN — Makassar & Jakarta |
| Meta description | Hubungi TCN: Makassar HQ (HRS Building) & Jakarta office. Telepon, email, WhatsApp, dan formulir kontak. Respons 1×24 jam kerja. | Contact TCN: Makassar HQ (HRS Building) & Jakarta office. Phone, email, WhatsApp, contact form. 1×24-hour business-day response. |
| H1 | Hubungi Kami | Contact Us |
| H2/H3 outline | Makassar office (address, phone, map, hours) · Jakarta office (address, phone, map, hours) · Sales lead (Ardiansyah) · Formulir kontak (nama, email, telepon, perusahaan, pesan) · CTA WhatsApp | Same |
| Internal links → | /id/rfq (related RFQ), /id/tentang (related) | Same en |
| Internal links ← | Header, footer, all pages | Same |
| Structured data | 2 × LocalBusiness (Makassar + Jakarta) + ContactPage + BreadcrumbList | Same |

### 6.22 RFQ — `/id/rfq` ↔ `/en/rfq`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | RFQ TCN | RFQ TCN |
| Secondary keywords | permintaan penawaran, minta quotation, supplier quotation Indonesia, RFQ mechanical electrical instruments | request quote, RFQ form, get industrial supplier quote, RFQ mechanical electrical instruments |
| Meta title | Permintaan Penawaran (RFQ) — TCN | Request for Quotation (RFQ) — TCN |
| Meta description | Kirim permintaan penawaran produk atau layanan TCN. Respons tim sales dalam 1×24 jam kerja (Ardiansyah). | Submit your RFQ for TCN products or services. Sales team responds within 1×24 business hours (Ardiansyah). |
| H1 | Formulir RFQ | RFQ Form |
| H2/H3 outline | Penjelasan RFQ · Form fields (perusahaan, nama, email, telepon, kategori produk/layanan, kebutuhan spesifik, file upload opsional) · What happens after you submit · CTA WhatsApp | Same |
| Internal links → | /id/kontak, /id/produk, /id/layanan | Same en |
| Internal links ← | Header CTA, footer, all service/product pages | Same |
| Structured data | ContactPage + BreadcrumbList + FAQPage ("how RFQ works") | Same |

### 6.23 Blog index — **NOT IN PRD SITEMAP v0.1** (recommended add)

> The PRD v0.1 sitemap does not include a blog/insights page. The 12-post content calendar in §7.2 assumes this page (or a `/id/pencarian?q=` query-string route, repurposed) is added to the sitemap. The brief below is a recommendation; if the client + PRD decide not to add a blog, the 12 posts must instead be embedded as "FAQ / Resources" sections on the relevant service-detail pages (Epoxy, Mechanical, Prefab, etc.) — significantly less SEO-effective. See §14 Open Question.

| Field | id-ID | en |
|---|---|---|
| Primary keyword | insights industri TCN | industrial insights TCN |
| Secondary keywords | blog konstruksi, blog pertambangan, blog epoxy lantai, tips memilih kontraktor | industrial construction blog, mining insights, epoxy flooring blog, contractor selection tips |
| Meta title | Insights — Blog TCN | Insights — TCN Blog |
| Meta description | Artikel teknis & panduan dari TCN: pompa industri, epoxy lantai, prefab, EPC, keselamatan kerja, dan praktik terbaik di industri berat. | Technical articles & guides from TCN: industrial pumps, epoxy flooring, prefab, EPC, workplace safety, heavy industry best practices. |
| H1 | Insights & Artikel | Insights & Articles |
| H2/H3 outline | Filter by kategori (konstruksi, trading, industri) · Featured post · Recent posts grid · Newsletter signup (v2) | Same |
| Internal links → | All blog posts, related service pages | Same |
| Internal links ← | Header (Insights link), footer, related service pages | Same |
| Structured data | Blog + BreadcrumbList | Same |

### 6.24 Search results — `/id/pencarian` ↔ `/en/search`

> Low SEO priority. Site search results pages should be `noindex, follow` to prevent index bloat from parametric URLs. Brief kept minimal.

| Field | id-ID | en |
|---|---|---|
| Primary keyword | (none — internal search) | Same |
| Secondary keywords | n/a | n/a |
| Meta title | Pencarian — TCN | Search — TCN |
| Meta description | Cari produk atau layanan TCN. | Search TCN products or services. |
| H1 | Pencarian | Search |
| H2/H3 outline | Search box · Result list · CTA RFQ if empty | Same |
| Meta robots | noindex, follow | Same |
| Structured data | (none) | Same |

### 6.25 Privacy Policy — `/id/kebijakan-privasi` ↔ `/en/privacy-policy`

> Required for GDPR / UU PDP compliance (PRD OQ-12). Low SEO priority; noindex recommended so it doesn't dilute the indexable page set.

| Field | id-ID | en |
|---|---|---|
| Primary keyword | (none — legal/compliance page) | Same |
| Meta title | Kebijakan Privasi — TCN | Privacy Policy — TCN |
| Meta description | Kebijakan privasi PT Telaga Cahaya Nusantara: bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda. | PT Telaga Cahaya Nusantara privacy policy: how we collect, use, and protect your personal data. |
| H1 | Kebijakan Privasi | Privacy Policy |
| H2/H3 outline | Data yang dikumpulkan · Cara penggunaan · Hak pengguna · Kontak · Pembaruan kebijakan | Same |
| Meta robots | noindex, follow | Same |
| Structured data | (none) | Same |

### 6.26 Terms & Conditions — `/id/syarat-ketentuan` ↔ `/en/terms`

| Field | id-ID | en |
|---|---|---|
| Primary keyword | (none — legal/compliance page) | Same |
| Meta title | Syarat & Ketentuan — TCN | Terms & Conditions — TCN |
| Meta description | Syarat & ketentuan penggunaan situs web PT Telaga Cahaya Nusantara. | Terms & conditions for using the PT Telaga Cahaya Nusantara website. |
| H1 | Syarat & Ketentuan | Terms & Conditions |
| H2/H3 outline | Penggunaan situs · Kekayaan intelektual · Batasan tanggung jawab · Hukum yang berlaku · Kontak | Same |
| Meta robots | noindex, follow | Same |
| Structured data | (none) | Same |

---

## 7. Content Strategy

### 7.1 Pillar/Cluster model

**Pillars (existing pages, treat as authoritative hubs):**
- `/id/layanan` & `/en/services` (Services overview — both Construction & Trading)
- `/id/produk` & `/en/products` (Products catalog)
- `/id/layanan/konstruksi-aluminium` & `/en/services/aluminum-structure-installation`
- `/id/layanan/konstruksi/epoxy-coating` & `/en/services/construction/epoxy-coating`
- `/id/layanan/perdagangan/mekanikal` & `/en/services/trading/mechanical`
- `/id/layanan/perdagangan/bangunan-prefabrikasi` & `/en/services/trading/prefab-building`

**Clusters (blog posts targeting long-tail / informational / commercial-investigation queries).** Each cluster post links **to** its pillar and **from** related service/product pages.

### 7.2 Blog content calendar — first 6 months (12 posts, 2/month)

> Format: `Month · Title (lang) · Target keyword · Persona · Outline (H2)`

| # | Mo | Title (lang) | Target keyword | Persona | Outline |
|---|---|---|---|---|---|
| 1 | M1 | 5 Jenis Pompa Industri untuk Tambang (id) | jenis pompa industri untuk tambang | A (procurement) | Pendahuluan · Pompa sentrifugal · Pompa submersible · Pompa slurry · Pompa positive displacement · Pompa dosing · Cara pilih · CTA RFQ |
| 2 | M1 | Cara Memilih Kontraktor Epoxy Lantai yang Tepat (id) | cara memilih kontraktor epoxy lantai | B (engineer) | Mengapa epoxy penting · Cek portofolio · Cek sertifikasi · Cek material · Cek garansi · Red flags · Checklist singkat · CTA RFQ |
| 3 | M2 | Pre-Fabricated Building vs Konvensional: Mana yang Tepat? (id) | pre-fabricated building vs konvensional | B (engineer) | Definisi · Perbandingan (waktu, biaya, fleksibilitas, durabilitas) · Kapan pilih prefab · Kapan pilih konvensional · Studi kasus · CTA RFQ |
| 4 | M2 | Berapa Harga Epoxy Coating Lantai per m2 di Indonesia? (id) | berapa harga epoxy coating lantai per m2 | A & B (commercial) | Faktor harga · Kisaran harga 2024–2025 · Perbandingan sistem (coating vs self-leveling) · Yang termasuk & tidak · Tips hemat · CTA RFQ |
| 5 | M3 | Apa Itu EPC Contractor dan Apa yang Ditangani? (id) | apa itu EPC contractor | A & C (informational) | Definisi EPC · Tahapan (Engineering, Procurement, Construction) · Perbedaan dengan general contractor · Kapan butuh EPC · Contoh proyek TCN · CTA RFQ |
| 6 | M3 | Aluminium vs Steel Structure: Mana yang Cocok untuk Bangunan Anda? (en) | aluminum vs steel structure building | C (international) | Material properties · Weight · Corrosion · Cost · Speed of construction · Best-use cases · CTA RFQ |
| 7 | M4 | 5 Aplikasi Epoxy Lantai untuk Industri Makanan & Minuman (id) | epoxy coating lantai industri makanan (long-tail) | B (engineer, F&B) | Standar hygienic · Anti-microbial · Anti-slip · Contoh penerapan · Studi kasus (Fast Food Indonesia / KFC operator reference, subject to permission) · CTA RFQ |
| 8 | M4 | How to Choose an Industrial Pump Supplier in Indonesia (en) | how to choose industrial pump | C (international) | Key selection criteria · Verify brand authorization · Check after-sales · Logistics & lead time · Payment terms · CTA RFQ |
| 9 | M5 | Wiggins Service System: Apa Bedanya dengan Tangki Konvensional? (id) | Wiggins service system (long-tail) | A (procurement) | Apa itu Wiggins · Keunggulan · Aplikasi (transportasi BBM, industri) · Instalasi · CTA RFQ |
| 10 | M5 | Guangsha E5, E7, C60, C90: Memilih Seri Prefab yang Tepat (id) | Guangsha housing Indonesia (long-tail) | B (engineer) | Perbandingan 4 seri · Ukuran & kapasitas · Aplikasi · Instalasi · Studi kasus · CTA RFQ |
| 11 | M6 | 7 Kesalahan Saat Memilih Supplier Pompa Industri (id) | tips memilih supplier industri pompa (long-tail) | A (procurement) | Mistake 1:只看 harga · Mistake 2: skip verifikasi brand · Mistake 3: abaikan after-sales · Mistake 4: tidak cek lead time · Mistake 5: kontrak tidak jelas · Mistake 6: lupakan sparepart · Mistake 7: tidak cek referensi · Checklist · CTA RFQ |
| 12 | M6 | Standing Up a Site Office in 30 Days: A Prefab Case Study (en) | pre-fabricated building Indonesia (long-tail, case study) | C (international) | Client brief · Solution (Guangsha series) · Timeline · Logistics · Outcome · Lessons learned · CTA RFQ |

> **Content quality bar (applies to all 12):**
> - 1,200–2,000 words per post.
> - Original insights — not rewritten from competitor pages. Pull from TCN's actual project experience (subject to client permission for named projects).
> - Author byline (real person — Ardiansyah or designated TCN engineer) + short bio (E-E-A-T signal: name, role, years of experience).
> - At least 2 internal links to service or product pages + 2 internal links to other blog posts in the cluster.
> - At least 1 image per post with descriptive alt text (use the keyword, not "image1.jpg").
> - FAQ section at the bottom of each post (≥ 3 Q&A) to capture FAQPage schema and "People Also Ask" SERP features.

### 7.3 Production cadence

- **2 posts / month × 6 months = 12 posts in launch window.**
- Owner: TCN Content Lead (id-ID, native) + freelance en copywriter (or in-house engineer).
- Editorial workflow: brief → draft → SEO review → TCN technical review → publish → index request.
- All posts reviewed for: keyword inclusion (natural, not stuffed), internal linking, structured data, image alt text, meta data, E-E-A-T signals.

### 7.4 E-E-A-T signals to surface across site

- Author byline + bio on every blog post.
- "About the author" page linking author to TCN's About page.
- Public company registration info in footer (NIB / NPWP — to be supplied by client, see §14).
- Visible physical addresses of both offices (already in business-context).
- Real project case studies with named clients (subject to client permission — see §14).
- HTTPS + trust seals.

---

## 8. Technical SEO Checklist

> Architectural foundation comes from `02-system-design.md`. Below is the **execution checklist** with concrete pass/fail criteria.

### 8.1 Indexation & crawlability
- [ ] **Server-rendered HTML** — every page must render meaningful content without JavaScript execution. Verify: disable JS in Chrome DevTools, confirm H1 and copy still present.
- [ ] **sitemap.xml** — auto-generated by CMS, includes all pages in both languages, splits if > 50,000 URLs (we expect < 200). Submit to GSC + Bing Webmaster.
- [ ] **image-sitemap.xml** — auto-generated; covers product images, project photos, blog hero images.
- [ ] **robots.txt** — allow all except `/admin`, `/api`, `/studio` (Sanity). Reference sitemap URL. Host at `/robots.txt`.
- [ ] **404 / 410 handling** — friendly 404 with search box + CTA to home / RFQ. Soft 404 detection: GSC "Crawled - currently not indexed" should be 0.
- [ ] **Redirect map** — full 301 map from any existing `tcn-corp.com` legacy URLs to new URL structure. Maintain `.htaccess` / `vercel.json` map. Audit quarterly.
- [ ] **Canonical URLs** — every page has self-referential canonical. Verify no conflicting canonicals in CMS.
- [ ] **hreflang tags** — every id-ID page links to its en counterpart and vice-versa; self-referential hreflang also present. `x-default` set to id-ID. Validate in GSC International Targeting monthly.
- [ ] **Crawl budget** — avoid infinite calendar URLs, faceted nav with parameters, search result pages. Noindex internal search results.

### 8.2 Structured data (JSON-LD)
- [ ] **Organization** on every page (homepage primarily, also on About).
- [ ] **LocalBusiness × 2** — separate schemas for Makassar HQ and Jakarta office (NAP = Name/Address/Phone must match GBP exactly).
- [ ] **WebSite + SearchAction** on homepage (enables sitelinks search box).
- [ ] **BreadcrumbList** on every page except home.
- [ ] **Service** schema on each service detail page (Construction × 4 + Trading × 9).
- [ ] **Product / ItemList** schema on trading detail pages and products catalog.
- [ ] **FAQPage** schema on any page with a FAQ section (epoxy coating, RFQ, top blog posts).
- [ ] **Article** schema on blog posts (with author + datePublished + image).
- [ ] **CaseStudy** schema on project detail pages.
- [ ] Validate all in Rich Results Test + Schema Markup Validator before launch.

### 8.3 Performance & Core Web Vitals
- [ ] **LCP < 2.5s** on simulated 4G (Moto G4 throttling) — measured via Lighthouse + WebPageTest.
- [ ] **INP < 200ms** — measure on real devices in WebPageTest "real browser" mode.
- [ ] **CLS < 0.1** — set explicit width/height on all images; reserve space for embeds; font-display: swap.
- [ ] **Image optimization** — AVIF + WebP fallback via `next/image`; lazy-load below fold; max width 2400px for hero, 1600px for content.
- [ ] **Font strategy** — self-host 1 display font (e.g. Plus Jakarta Sans) subset to Latin Extended + Bahasa diacritics; preconnect to origin.
- [ ] **3rd-party scripts** — budget ≤ 50KB compressed per page. Defer all non-essential scripts (analytics, chat widget).
- [ ] **Lighthouse SEO score ≥ 95** on home + every template (services, products, blog post).

### 8.4 Mobile-first
- [ ] Mobile-friendly test in GSC — all pages pass.
- [ ] Tap targets ≥ 48×48px.
- [ ] Readable font size ≥ 16px without zoom.
- [ ] No horizontal scroll on 360px viewport.
- [ ] WhatsApp floating button positioned bottom-right, dismissible, not blocking content.

### 8.5 Image alt text discipline
- [ ] Every `<img>` has alt text describing the image.
- [ ] Decorative images use `alt=""` (empty, not omitted).
- [ ] Product images: alt = product name + use case (e.g. "KSB ETA industrial pump for mining slurry").
- [ ] Project photos: alt = project + client + location (e.g. "Epoxy floor installation at Vale Sorowako nickel plant").
- [ ] No "image1.jpg", "DSC_0234.jpg", or "Untitled".

### 8.6 Internal linking architecture (hub-and-spoke)
- [ ] **Tier 1 (hub):** Home links to all top-level pages.
- [ ] **Tier 2 (mid):** Services overview links to all detail pages. Products catalog links to all trading detail pages.
- [ ] **Tier 3 (spoke):** Each detail page links back to its parent and to 2–3 related detail pages.
- [ ] **Tier 4 (cluster):** Blog posts link to 1–2 related service/product pages AND 1–2 other blog posts.
- [ ] Footer carries site map of all primary pages.
- [ ] No orphan pages (use Screaming Frog / Sitebulb to crawl + identify).

### 8.7 URL hygiene
- [ ] Lowercase, hyphens, no parameters in canonical URLs.
- [ ] Locale prefix in path (`/id/...`, `/en/...`), NOT subdomain (`id.tcn-corp.com`).
- [ ] Trailing slash policy consistent (one of `/about` or `/about/` — pick one and enforce).
- [ ] No `www` (or consistent `www`) — set preferred domain in GSC.
- [ ] HTTPS enforced (HSTS preload).

### 8.8 Analytics & monitoring instrumentation
- [ ] Plausible (or GA4) installed on every page; site verified.
- [ ] Search Console verified + sitemap submitted.
- [ ] Bing Webmaster Tools verified + sitemap submitted.
- [ ] Custom event tracking on RFQ form (submission success).
- [ ] UTM parameter convention documented (`?utm_source=...&utm_medium=organic&utm_campaign=...` not needed since medium=organic by default, but track campaigns like email, social).

---

## 9. Local SEO (Indonesia-specific)

> Indonesia's B2B local search behaviour is dominated by **Google Business Profile (GBP)**, **WhatsApp click-to-chat**, and **Indonesian business directories**. TCN has TWO physical offices — both need their own GBP. The directories below are based on the company-context verticals: mining, energy, heavy industry, infrastructure, commercial construction.

### 9.1 Google Business Profile

#### Makassar HQ
- **Business name:** PT Telaga Cahaya Nusantara (HQ)
- **Address:** HRS Building Lt. 4, Jl. Karunrung No. 23 A, Makassar 90113, South Sulawesi
- **Phone:** +62 811 454669
- **Website:** https://tcn-corp.com
- **Primary category:** Industrial Supplier
- **Additional categories:** Construction Company, Mining Equipment Supplier, Building Materials Supplier
- **Service area:** South Sulawesi, Central Sulawesi, Southeast Sulawesi (nickel mining belt)
- **Hours:** Mon–Fri 08:00–17:00 WITA, Sat 08:00–12:00 WITA
- **Description:** 600-character description covering both service lines + key clients + RFQ CTA
- **Photos:** Office exterior + interior + team photo + product showroom + on-site project photos (≥ 10 photos to start, monthly additions)
- **Posts:** Weekly Google Posts — new project announcements, blog post features, RFQ CTA (minimum 1 post per week)
- **Q&A:** Seed 5 common questions (parking, payment terms, lead time, warranty, export capability) and answer as the business owner
- **Reviews:** Active review-generation strategy — request from every delivered project client; respond to all reviews within 48 hours
- **Owner verification:** Ardiansyah (sales) or Director TBD; see §14

#### Jakarta office
- **Business name:** PT Telaga Cahaya Nusantara (Jakarta Office)
- **Address:** Jl. Raya Casablanca No. Kav. 88, Jakarta Selatan, DKI Jakarta 12870
- **Phone:** +62 811 447846 (Ardiansyah) or a separate Jakarta line — **to be confirmed by client**, see §14
- **Website:** https://tcn-corp.com
- **Primary category:** Industrial Supplier
- **Additional categories:** Construction Company, Wholesale Distributor
- **Service area:** DKI Jakarta, West Java, Banten, East Kalimantan (oil & gas / mining hubs)
- **Hours:** Mon–Fri 08:00–17:00 WIB
- **Description:** Same as Makassar but framed for Jakarta corporate market
- **Photos:** Distinct set of Jakarta-office photos (do not reuse Makassar photos)
- **Posts:** Coordinated but distinct from Makassar Posts
- **Q&A:** Same seeding approach
- **Reviews:** Same review strategy
- **Owner verification:** Same as above

> **NAP consistency rule:** the Name, Address, Phone on the GBP **must match exactly** what is on the website Contact page and what appears in any directory citation. This is the single biggest local-SEO ranking factor.

### 9.2 Bing Places
- Mirror the GBP setup on Bing Places for both offices.
- Submit sitemap to Bing Webmaster Tools.
- Indonesia Bing market share is small but growing; cheap incremental visibility.

### 9.3 Indonesian business directories (general)

| Directory | Domain | Notes / Action |
|---|---|---|
| Yellow Pages Indonesia | yellowpages.co.id | Submit both offices; categories: Industrial Supplier, Construction |
| IndoListing | indolisting.com | Submit; free tier |
| Indonetwork | indonetwork.co.id | B2B marketplace; free + paid; good for product discovery |
| Tokopedia / Shopee (vendor) | tokopedia.com / shopee.co.id | Optional v2 — TCN's own products as vendor listings |
| BizIndonesia | bizindonesia.com | Free business directory |
| Alamat.com | alamat.com | Submit |
| Kompass.com | kompass.com | Kompass is a major Indonesian business directory; submit |
| Dun & Bradstreet Indonesia | dnb.com | Paid; submit if budget allows — high authority |
| Indonesia Business Directory (various) | indonesiabusinessdirectory.com | Submit |

### 9.4 Industry-specific directories

| Vertical | Directory | Action |
|---|---|---|
| Mining | Asosiasi Pertambangan Indonesia (API) | Member directory |
| Mining | Indonesian Mining Association directory | Verify & list |
| Mining | Petromindo (mining news + directory) | Submit company profile |
| Mining | IMME / Mining Indonesia exhibitor directory | List as past exhibitor / supplier |
| Mining | Vale Indonesia / Freeport Indonesia supplier pages | Submit TCN as supplier (free) — see business-context §5 |
| Oil & Gas | SKK Migas contractor list | Submit |
| Oil & Gas | Indonesian Petroleum Association (IPA) | Member directory |
| Oil & Gas | Oil & Gas directory Indonesia (e.g. migas.esdm.go.id) | Verify & submit |
| Construction | Gapekksi / GAPEKI (Gabungan Pelaksana Konstruksi Nasional) — **verify existence & URL** | Member directory |
| Construction | LPJK (Lembaga Pengembangan Jasa Konstruksi) | Register if TCN has KTA — verify |
| Construction | APINDO (Asosiasi Pengusaha Indonesia) | Member directory |
| Industry / general | KADIN Indonesia | Member directory |
| Industry / general | IHCC Indonesia | Verify |
| Procurement | LPSE (Layanan Pengadaan Secara Elektronik — government procurement) | Register if relevant to TCN's public-sector bids |

> **Verification needed** for several of the above — the SEO executor must confirm URLs and current submission status before claiming listings. Mark "to verify" before any client-facing report.

### 9.5 Local citations checklist (per office)

- [ ] NAP (Name, Address, Phone) consistent across GBP, Bing, all directories, and the website Contact page.
- [ ] Both offices listed separately (not one merged entry).
- [ ] Photos uploaded to every directory that supports them.
- [ ] Hours listed on every directory.
- [ ] At least 20 citations per office within 90 days of launch.

---

## 10. Off-Page SEO & Link Building

> **Principle:** 5–10 high-DR referring domains per month > 100 spammy directory submissions. Target Indonesian construction, mining, and energy publications for topical relevance.

| # | Tactic | Expected impact | Effort | Owner | Notes |
|---|---|---|---|---|---|
| 1 | **Industry directory submissions** (see §9.3 / §9.4) | Med — establishes baseline authority + local citations | Low (1–2 days/month) | SEO executor | 5 submissions/month to high-authority directories only; avoid SEO-spam directories |
| 2 | **Indonesian business association membership pages** (APINDO, KADIN, API, IPA, GAPEKI — verify each) | High — high DR + topical relevance | Med (join + maintain) | TCN leadership | Membership also unlocks tender access; pitch as business investment |
| 3 | **Guest posts on Indonesian construction / mining publications** (e.g. Konstruksi Media, Petromindo, Info Pertambangan) | High — topical authority + referral traffic | High (pitch + write) | SEO executor + TCN technical SME | 1–2 guest posts/month; require real expertise, not generic content |
| 4 | **Digital PR — project announcements** | Med-High — news-style coverage + brand mentions | Med | TCN marketing | Issue press release for every major project win (subject to client permission); distribute via PRNewswire Indonesia / Business Wire / local newswire |
| 5 | **Case studies with named clients** (subject to permission) | High — E-E-A-T + long-tail keyword capture + brand association | Med-High | TCN marketing + client liaison | Publish on website as Projects pages; pitch to industry publications |
| 6 | **Broken link building on competitor / industry-resource pages** | Med — incremental high-authority links | Med | SEO executor | Use Ahrefs Content Gap + Broken Backlinks reports monthly |
| 7 | **HARO / Q&A platforms** (Quora en + id, Brainly id-ID, JustAnswer) | Low-Med — brand awareness + occasional links | Low (1 hr/week) | TCN technical SME | Provide genuine expert answers; include link only where allowed and helpful |
| 8 | **LinkedIn company page + executive profiles** | Med — B2B social signal + referral traffic | Low-Med | TCN marketing | Post weekly: project updates, technical insights, employee highlights; encourage staff to share |
| 9 | **YouTube channel — project walkthroughs, product demos** | Med — long-tail video search + E-E-A-T | Med-High (video production) | TCN marketing | Repurpose project photos into 60–90 second walkthroughs; titles in id-ID with English subtitle option |
| 10 | **Press release distribution for major project wins** | Med — news search visibility + mentions | Low (per event) | TCN marketing | Distribute via PRNewswire ID / Business Wire / local Indonesian newswires |

### 10.1 Anchor text discipline
- 30% branded (TCN, PT Telaga Cahaya Nusantara, Telaga Cahaya Nusantara)
- 30% naked URL (tcn-corp.com)
- 25% topical / partial match (industrial supplier Indonesia, kontraktor aluminium)
- 15% exact match (jasa epoxy coating Makassar) — only on highest-relevance referring domains
- Avoid 100% exact-match anchors (Penguin risk)

### 10.2 Negative SEO watch
- Set up GSC "Links" report monthly.
- Use Ahrefs / SEMrush "Disavow" tool quarterly — disavow any spammy backlinks (e.g. from Russian/Chinese casino spam domains).
- Maintain a documented disavow file.

---

## 11. Measurement & Reporting

### 11.1 KPIs (from §3) restated

| KPI | Tool | Cadence |
|---|---|---|
| Organic sessions (geo: Indonesia) | Plausible or GA4 | Weekly |
| Keyword rankings (130 tracked keywords) | Ahrefs or SEMrush rank tracker | Weekly |
| Indexed pages | GSC "Pages" report | Weekly |
| Backlinks / referring domains | Ahrefs or SEMrush | Weekly |
| Core Web Vitals | CrUX (Chrome User Experience) + Lighthouse | Monthly |
| GBP views, actions, calls | GBP dashboard | Monthly |
| RFQ form submissions (with UTM + landing page attribution) | Form backend + GA4 | Per submission + weekly aggregate |
| Domain Rating (Ahrefs) | Ahrefs | Monthly |

### 11.2 Tools (stack)

| Purpose | Tool | Cost |
|---|---|---|
| Web analytics | Plausible (recommended for privacy / no cookie banner) | ~$9/mo for < 10k pageviews |
| Alternative | Google Analytics 4 | Free |
| Search performance | Google Search Console | Free |
| Keyword research & rank tracking | Ahrefs (preferred) — Webmaster Tools (free) + paid Site Audit + Rank Tracker | $99–199/mo |
| Alternative | SEMrush | $130+/mo |
| Backlink audit | Ahrefs or SEMrush (included above) | — |
| Uptime | UptimeRobot | Free (50 monitors) |
| Page speed | Google PageSpeed Insights + WebPageTest | Free |
| Schema validation | Google Rich Results Test + Schema Markup Validator | Free |

### 11.3 Monthly report template

**Sections:**
1. **Executive summary** (3 bullets): traffic trend, ranking wins, top issue.
2. **Organic traffic** — sessions, users, top 10 landing pages, trend vs. previous month.
3. **Keyword rankings** — count of P0/P1 keywords in top 3, top 10, top 20, top 50; biggest movers (up & down); list of newly ranking keywords.
4. **Search Console** — clicks, impressions, CTR, avg position; top queries; top pages; coverage issues.
5. **Backlinks** — new referring domains (count + list of top 5 by DR); total referring domains; DR trend.
6. **Local SEO** — GBP views, actions (calls, direction requests, website clicks); GBP review count + avg rating; citation count.
7. **Technical health** — Lighthouse scores (mobile + desktop) for home + 4 key templates; Core Web Vitals status; crawl errors.
8. **Content performance** — top 5 blog posts by sessions + conversions; new posts published this month.
9. **RFQ funnel** — form submissions (organic vs. paid vs. direct), conversion rate to qualified lead (sales-team report), RFQ-to-deal rate (sales-team report, lagged 60–90 days).
10. **Risks & alerts** — algorithm update impact, ranking drops, competitor moves.
11. **Next month plan** — 3–5 specific actions with owners.

### 11.4 Ranking-drop detection & traffic-dip protocol

| Signal | Threshold | Action |
|---|---|---|
| Keyword drops ≥ 5 positions week-over-week on a P0 keyword | Immediate | Check GSC for manual action, coverage issue, or competitor outranking; review recent changes |
| Organic sessions drop ≥ 20% week-over-week | 2 consecutive weeks | Investigate: algorithm update? technical error? content issue? Check GSC + Plausible + recent deploy |
| Indexed pages drop ≥ 10% | Immediate | Check for accidental noindex, robots.txt change, canonical issues |
| Core Web Vitals regress to "poor" on any template | Immediate | Roll back recent code change or fix images / scripts |
| DR drops | ≥ 3 points month-over-month | Audit lost backlinks in Ahrefs; document losses |

---

## 12. SEO Roadmap (12 months)

> Owners: **TCN-M** = TCN Marketing Lead · **SEO** = SEO Executor (agency or in-house) · **Dev** = Web Dev · **Content** = TCN Content Lead · **Sales** = Ardiansyah.

| Month | Focus | Deliverables | Owner |
|---|---|---|---|
| **1** | Technical foundation | · Install Plausible + GSC + Bing Webmaster + Ahrefs/SEMrush · Submit sitemap · Audit existing `tcn-corp.com` for legacy redirect map · Robots.txt + canonical + hreflang implementation · Structured data implementation across all templates · Create both GBP listings · Citation baseline (NAP) on Kompass + Indonetwork + Yellow Pages ID | Dev, SEO |
| **2** | Technical foundation (cont.) | · Lighthouse SEO ≥ 95 across all templates · Core Web Vitals "good" on 4G simulation · Image sitemap live · 404/410 handling · Redirect map live · Both GBP profiles verified + 10 photos each · Initial 5 industry directory submissions · Index all PRD pages (target 100%) | Dev, SEO, TCN-M |
| **3** | Content ramp + on-page | · Publish blog posts #1–#2 (per §7.2 calendar) · Optimize all 17 on-page briefs against GSC data · Begin Google Posts (2/week per GBP) · Join 1 industry association (e.g. APINDO or KADIN) · Start review-generation campaign (request 3 reviews from past clients) · Backlink target: 10 referring domains (DR ≥ 30) | Content, SEO, TCN-M |
| **4** | Content ramp | · Publish blog posts #3–#4 · 2 guest-post pitches sent · First project case study published (subject to permission) · 20 total citations per office · Backlink target: cumulative 15 referring domains | Content, SEO |
| **5** | Link building + content | · Publish blog posts #5–#6 · First 2 guest posts live (target DR ≥ 40 publications) · LinkedIn weekly posting cadence live · First YouTube project walkthrough · Backlink target: cumulative 20 referring domains | Content, SEO, TCN-M |
| **6** | Mid-point review | · Publish blog posts #7–#8 · Comprehensive 6-month audit (technical + content + links) · Adjust keyword priorities based on actual rank data · **KPI gate:** 20 P0 keywords in top 10 (target) · **KPI gate:** ≥ 15 RFQs/month organic · Backlink target: cumulative 30 referring domains (avg DR ≥ 35) | All |
| **7** | Optimization & content | · Publish blog posts #9–#10 · Refresh top 10 underperforming pages (refresh copy, add FAQ, add FAQPage schema) · Outreach to broken-link opportunities (5 pitches) · Second YouTube video | Content, SEO |
| **8** | Optimization & content | · Publish blog posts #11–#12 · Begin v2 content calendar planning (months 13–18) · Pursue 1 high-authority media placement (e.g. coverage in Bisnis Indonesia, Kompas, or industry trade press) · Backlink target: cumulative 50 referring domains | Content, SEO, TCN-M |
| **9** | Scaling | · Publish 2 more blog posts (start of v2 calendar) · Begin A/B testing of meta titles for top 20 pages · Expand product catalog pages with more spec detail (per product line) · Pursue international English-language trade publication placements (Mining Weekly, Energy Voice) · Backlink target: cumulative 60 referring domains | Content, SEO, TCN-M |
| **10** | Scaling | · Publish 2 blog posts · Launch Indonesian newsletter (optional) · Submit for industry awards (e.g. Indonesia Construction Awards, Mining Awards) · Backlink target: cumulative 70 referring domains | TCN-M, SEO |
| **11** | Optimization | · Publish 2 blog posts · Refine top 20 pages for featured-snippet positioning (use FAQ + structured list format) · Audit and consolidate any thin content · Backlink target: cumulative 75 referring domains | Content, SEO |
| **12** | Year-end review | · Publish 2 blog posts · Comprehensive 12-month report · **KPI gate:** 10 head terms in top 3 (target) · **KPI gate:** organic traffic ≥ 5,000/month · **KPI gate:** DR ≥ 25 · **KPI gate:** ≥ 40 RFQs/month via organic · Plan v3 content calendar (months 13–24) · Plan v2 site features (e.g. Algolia search, gated whitepapers) | All |

---

## 13. Risks & Algorithm Watch

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | **Google Helpful Content Update penalizes thin or translated content** — Indonesia-language pages with low word count or auto-translated from English may be flagged. | High | High (deindexation of thin pages) | Enforce 1,200+ word minimum on all blog posts; no auto-translation; native id-ID writer; regular content audits using Ahrefs Content Audit. |
| 2 | **E-E-A-T gaps** — B2B industrial sites with no author bios, no physical address, or anonymous content rank poorly post-2024 updates. | Med | High | Author byline + bio on every blog post; visible office addresses; real project case studies with named clients (subject to permission). |
| 3 | **Bahasa Indonesia content quality variance** — id-ID pages written by non-native speakers read awkwardly; reduces dwell time + engagement signals. | Med | Med | Hire a native id-ID content lead; review all id-ID content for natural language before publish; track id-ID bounce rate separately in Plausible/GA4. |
| 4 | **Competitor entry** — Indonesian refractory / industrial trading competitors with stronger SEO presence (e.g. Refractorindo Graha Dinamika, BAT Refractories, Indoporlen) launching similar sites. | Med | Med | Quarterly competitor content audit via Ahrefs Content Gap; double down on TCN's differentiators (one-stop trading + construction, named-client proof, two-office local SEO). |
| 5 | **Google Business Profile suspension** — GBP reviews violate Google's policy (incentivized reviews, virtual office address flagged, NAP mismatch). | Low-Med | High (lose local pack visibility) | Strict review policy (never incentivize; only request from real clients); verify physical-address eligibility; respond to all reviews; backup NAP data quarterly. |
| 6 | **Manual action for unnatural backlinks** — low-quality directory submissions or paid links trigger Google penalty. | Low | High | Anchor-text discipline (see §10.1); monthly backlink audit; disavow file maintained; avoid PBNs / link farms. |
| 7 | **CMS migration risk** — migrating from current `tcn-corp.com` to new stack without proper redirect map causes traffic collapse. | Med | High | Build complete redirect map (see §8.1); test on staging; deploy redirects before DNS cutover; monitor GSC for 30 days post-launch. |
| 8 | **Slow client content delivery** — copy + photos + project descriptions not delivered on time, delaying on-page SEO and blog launch. | High | Med | Build content calendar with client sign-off; weekly content checkpoint; identify backups (e.g. stock industrial photos for initial launch). |
| 9 | **Indonesia-language SERP volatility** — Google Indonesia algorithm updates sometimes target low-quality Bahasa content. | Med | Med | Subscribe to SEJ Indonesia + Indonesian SEO communities; monthly ranking review; ready to publish high-quality response content quickly if a drop hits. |
| 10 | **Mobile network performance** — Core Web Vitals on real Indonesian 4G may be worse than Lighthouse simulation. | Med | Med | Test on real Indonesian networks via WebPageTest from Singapore / Jakarta POPs; budget for CDN (Vercel Edge / Cloudflare) and aggressive image compression. |

---

## 14. Open Questions

> All items below require client input before the SEO workstream can move from strategy to execution.

1. **Existing Search Console access** — does TCN have an existing Google Search Console property for `tcn-corp.com`? If so, who currently holds ownership (Ardiansyah? a former agency?)? Need ownership transfer before launch.
2. **Existing Google Business Profile** — is there an existing GBP for either office? If yes, request ownership / manager access. If no, both will need to be created from scratch (Ardiansyah or designated director must verify).
3. **Bing Webmaster Tools** — same question for Bing.
4. **Client logo usage permission** — can we (a) display client logos on the Clients page (logo wall) and (b) link those logos back to the client's site? Different clients may have different policies — needs a written permission matrix.
5. **Project case studies** — can TCN publish named case studies for any of Vale, Freeport, Antam, Donggi Senoro, Hexindo, Amman Mineral, Kalla, Fast Food Indonesia (KFC operator)? What is the case-study approval workflow with each?
6. **Jakarta office phone** — the business-context shows Ardiansyah's mobile (+62 811 447846) but no dedicated Jakarta landline. Should we publish Ardiansyah's mobile as the Jakarta line, or is there a separate Jakarta number?
7. **Address confirmation** — Makassar has two candidate addresses in the source PDFs (HRS Building, Karunrung No. 23A vs Boulevard Komp. Lili Ruko Cempaka No. 1). The SEO strategy assumes the HRS Building address. Client to confirm final.
8. **Jakarta postcode** — 12870 vs 18270 in source PDFs. Strategy assumes 12870. Client to confirm.
9. **NPWP / NIB** — for footer trust signals and certain directory listings, TCN's NPWP / NIB is needed. To be supplied.
10. **Official WhatsApp number** — for the floating WhatsApp CTA + WhatsApp Cloud API integration (RFQ notification), a single official WhatsApp Business number should be designated. Currently Ardiansyah's mobile is in business-context.
11. **Preferred tracking stack** — Plausible (recommended for cookie-banner-less Indonesia compliance) vs. GA4. Strategy defaults to Plausible; client to confirm.
12. **Hosting / data residency** — if TCN requires Indonesian data residency, Vercel may be replaced with a local VPS (IDCloudHost, Niagahoster). Affects CDN strategy in §8. Strategy defaults to Vercel Edge for performance.
13. **Brand colors / logo** — for schema `logo` field + OG image. To be supplied.
14. **Catalogue PDF** — is the 116-page PDF allowed to be downloadable from the Products page? If yes, who hosts it (Sanity CDN / S3 / local)? Affects link-building value.
15. **Executive bio / headshot** — for E-E-A-T author signals, who is the public "voice" of TCN's blog? Director TBD or Ardiansyah?
16. **Press release distribution budget** — paid wire (PRNewswire ID / Business Wire) vs. free email distribution. Affects Digital PR impact.
17. **Industry association membership budget** — APINDO, KADIN, API membership costs are recurring. Confirm annual budget available.
18. **Existing tcn-corp.com backlinks** — does the current site have any inbound links we should preserve through redirect? Run Ahrefs on current domain before migration.
19. **Blog/Insights page** — the PRD v0.1 sitemap does NOT include `/id/insights` or `/en/insights`. The 12-post content calendar in §7.2 (and ~12 P2 long-tail keyword targets) assume this page is added to the sitemap in PRD v0.2. Confirm with client + PRD author. If declined, the long-tail P2 keywords must be re-mapped to FAQ sections on existing service pages (significantly weaker SEO effect), and the content calendar reduces to ~4–6 posts instead of 12.
20. **Trading category count discrepancy** — PRD v0.1 lists 9 trading categories under `/id/layanan/perdagangan/` but FR-004 says "11 sub-pages". The 9 in the sitemap are the same 9 explicitly named in `business-context.md` §3.B. The 11-vs-9 discrepancy is a known inconsistency between the prompt and the source-of-truth; the SEO strategy follows the sitemap (9). Confirm if the 2 missing categories are intended or a prompt typo.
21. **URL slug language preference** — the SEO strategy assumes the PRD's kebab-case transliteration slugs (e.g. `struktur-aluminium`, `pipa-flensa-katup`, `survei-keamanan`). Confirm these are the final slugs, not placeholders. Any future slug change requires a 301 redirect map update and re-validation of all on-page briefs.

---

*End of SEO Strategy v0.1.*
