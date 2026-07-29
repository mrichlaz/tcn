# TCN Website Project — Deliverables Index

**Client:** PT. Telaga Cahaya Nusantara (TCN) — Indonesian general trading & construction
**Date:** 2026-06-19
**Status:** Draft v0.1, ready for client review

This package contains the four foundational documents for the TCN corporate
website rebuild. Read in order — each builds on the previous one.

| # | Document | Purpose | Read time |
|---|---|---|---|
| 1 | [`01-prd.md`](./deliverables/01-prd.md) | What we are building and why | ~12 min |
| 2 | [`02-system-design.md`](./deliverables/02-system-design.md) | How we build it (stack, architecture, ops) | ~14 min |
| 3 | [`03-development-plan.md`](./deliverables/03-development-plan.md) | When and who builds it (16-week timeline) | ~20 min |
| 4 | [`04-seo-strategy.md`](./deliverables/04-seo-strategy.md) | How the site gets found (keywords, content, links) | ~35 min |

Supporting files:
- [`context/business-context.md`](./context/business-context.md) — the source-of-truth business facts used by all 4 documents.

---

## How the four documents fit together

```
PRD (§6 sitemap)
        ↓ defines pages
System Design (§6 data model, §8 SEO architecture)
        ↓ picks stack & ops
Development Plan (§6 task breakdown, §7 coverage matrix)
        ↓ schedules the work
SEO Strategy (§6 on-page briefs, §5 keyword → page mapping)
        ↓ drives traffic to the pages
```

If you change the sitemap in the PRD, you must update System Design's data
model, the Dev Plan's task list and coverage matrix, and the SEO Strategy's
on-page briefs and keyword mapping. The "Open Questions" sections at the end
of each document flag the conflicts and unknowns you need to resolve.

---

## Open Items That Need Client Input Before Kickoff

These are flagged in the documents but consolidated here for the
decision-maker (Ardiansyah / TCN Owner / Director).

### Address & postcodes
- **Makassar**: profile PDF says `90113` (Karunrung), catalog PDF says `90231` (Boulevard). **Decide which is correct.**
- **Jakarta**: profile PDF says `18270`, catalog says `12870`. **`12870` is the correct Jakarta Selatan postcode** — but confirm with TCN which office they want listed.

### Brand & contact
- Official WhatsApp number for the click-to-chat button (PDFs don't list one).
- Legal entity registration number / NIB for footer ("NPWP, NIB, AKTA" — Indonesian company law disclosure).
- Director / Owner name and photo for the About page (currently "TBD").
- Brand colors and logo files (PDFs use red/black/white but no logo file is available).

### Stack & hosting decisions (System Design picks defaults; client may override)
- **CMS**: Sanity (recommended) vs Strapi (self-hosted, open-source).
- **Hosting**: Vercel (recommended, global CDN, best Next.js DX) vs Indonesian VPS (e.g. IDCloudHost) for data residency.
- **Analytics**: Plausible (privacy-friendly, recommended) vs GA4 (more powerful, needs cookie banner).

### Operational
- Access to `tcn-corp.com` DNS / registrar.
- Permission to use client logos on the Clients page (Vale, Freeport, Antam, etc. — most need written permission).
- Project case studies (2–3 anonymized if permission not granted; with permission, named + photos).
- Internal content lead who will write/edit copy in Bahasa Indonesia.

### Budget & timeline
- Recommended budget tier (Dev Plan §14 gives two scenarios).
- Kickoff date — anchors the 16-week timeline.

---

## What to read first

**If you are the decision-maker (Owner/Director)**: read just §1, §2, §3 of the PRD
(executive summary + goals) and §1, §2, §14 of the Development Plan (timeline + budget).
That gives you 80% of what you need to approve the project.

**If you are the project manager (Ardiansyah)**: read all 4 documents end-to-end.
You'll be the one answering the open questions and feeding client content into the CMS.

**If you are the development team / agency bidding**: read PRD + System Design +
Development Plan. The SEO Strategy informs content production but isn't blocking
on technical decisions.

---

## Methodology notes

These documents were produced by parallel agents reading from a single source-of-truth
business context file. The agents cross-reference each other:
- The PRD's sitemap pages must appear in System Design's data model and Dev Plan's task list.
- System Design's tech stack choices must appear as setup tasks in the Dev Plan.
- Dev Plan's launch checklist must align with SEO Strategy's pre-launch tasks.
- SEO Strategy's keyword → page mapping references PRD pages that must exist.

If you find a cross-document inconsistency, the Open Questions section of each
document is where conflicts are surfaced — not silently resolved.

---

## Sign-off

When ready, mark each document with status (e.g. "Draft v0.1 → Approved v1.0")
and capture sign-off dates in §1 Document Control of each file.

Recommended review order:
1. PRD → 2. System Design → 3. Development Plan → 4. SEO Strategy
   (each subsequent doc builds on prior; changing upstream forces downstream edits)
