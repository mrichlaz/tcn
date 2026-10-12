/*
  TCN runtime SEO helper
  ---------------------
  product-category.html and project.html render their content from query
  parameters, so their static <head> can only carry a generic title,
  description and canonical. This module rewrites those tags (and injects
  page-specific JSON-LD) after the data scripts have run, so each rendered
  view exposes an accurate title, description, canonical URL and structured
  data to crawlers that execute JavaScript.

  Google renders JavaScript before indexing, so the updated <head> values are
  what it records. Social crawlers (Facebook, LinkedIn, Slack) do NOT run
  JavaScript and will keep the static fallback tags — that is expected; the
  static tags are a valid generic description for those platforms.

  Load this AFTER catalogue-data.js / assets/projects-data.js.
*/
(() => {
  const BASE = 'https://tcn-corp.com'
  const OG_IMAGE = `${BASE}/assets/og-image.jpg`

  const truncate = (text, max) => {
    const clean = String(text || '').replace(/\s+/g, ' ').trim()
    if (clean.length <= max) return clean
    return `${clean.slice(0, clean.lastIndexOf(' ', max))}…`
  }

  const setMeta = (selector, attr, value) => {
    let el = document.head.querySelector(selector)
    if (!el) {
      el = document.createElement('meta')
      const [key, name] = selector.replace(/^meta\[|\]$/g, '').split('=')
      el.setAttribute(key, name.replace(/["']/g, ''))
      document.head.appendChild(el)
    }
    el.setAttribute(attr, value)
  }

  const setLink = (rel, href) => {
    let el = document.head.querySelector(`link[rel="${rel}"]`)
    if (!el) {
      el = document.createElement('link')
      el.setAttribute('rel', rel)
      document.head.appendChild(el)
    }
    el.setAttribute('href', href)
  }

  const injectJsonLd = (id, graph) => {
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = id
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    document.head.appendChild(script)
  }

  const applyHead = ({ title, description, canonical, ogType, ogImageAlt, breadcrumb }) => {
    document.title = title
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:type"]', 'content', ogType || 'website')
    setMeta('meta[property="og:image"]', 'content', OG_IMAGE)
    if (ogImageAlt) setMeta('meta[property="og:image:alt"]', 'content', ogImageAlt)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', OG_IMAGE)
    setLink('canonical', canonical)
    if (breadcrumb) {
      injectJsonLd('tcn-breadcrumb', [
        {
          '@type': 'BreadcrumbList',
          itemListElement: breadcrumb.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        }
      ])
    }
  }

  const path = window.location.pathname

  // ---- Product category view: product-category.html?category=<id> ----
  if (/product-category\.html$/.test(path)) {
    const categories = Array.isArray(window.productCategories) ? window.productCategories : []
    if (!categories.length) return
    const params = new URLSearchParams(window.location.search)
    const category = categories.find((item) => item.id === params.get('category')) || categories[0]
    const canonical = `${BASE}/product-category.html?category=${category.id}`
    const description = `${category.strapline} Supplied by TCN with offices in Makassar and Jakarta, delivered across Indonesia. Request a quote.`
    const title = `${category.title} — Industrial Supply Indonesia | TCN`

    applyHead({
      title,
      description,
      canonical,
      ogImageAlt: `${category.title} products supplied by TCN in Indonesia`,
      breadcrumb: [
        { name: 'Home', url: `${BASE}/` },
        { name: 'Products', url: `${BASE}/products.html` },
        { name: category.title, url: canonical }
      ]
    })

    // ItemList of the subcategory groups and the components in each.
    const elements = []
    let position = 1
    category.groups.forEach((group) => {
      group.items.forEach((item) => {
        elements.push({ '@type': 'ListItem', position: position++, name: item })
      })
    })
    injectJsonLd('tcn-category-list', [
      {
        '@type': 'ItemList',
        name: `${category.title} product groups supplied by TCN`,
        description: category.strapline,
        numberOfItems: elements.length,
        itemListElement: elements
      }
    ])
    return
  }

  // ---- Project detail view: project.html?case=<id> ----
  if (/project\.html$/.test(path)) {
    const projects = Array.isArray(window.TCN_PROJECTS) ? window.TCN_PROJECTS : []
    const params = new URLSearchParams(window.location.search)
    const project = projects.find((item) => item.id === params.get('case'))
    if (!project) return

    const canonical = `${BASE}/project.html?case=${project.id}`
    const description = truncate(`${project.scope} Delivered by TCN, Indonesia.`, 155)
    const title = `${project.title} — TCN Project Record`

    applyHead({
      title,
      description,
      canonical,
      ogType: 'article',
      ogImageAlt: `${project.title}, delivered by TCN`,
      breadcrumb: [
        { name: 'Home', url: `${BASE}/` },
        { name: 'Projects', url: `${BASE}/projects.html` },
        { name: project.title, url: canonical }
      ]
    })

    const asset = window.TCNAssets?.get(project.gallery?.[0]?.key) || null
    injectJsonLd('tcn-project', [
      {
        '@type': 'CreativeWork',
        name: project.title,
        headline: project.title,
        description: project.scope,
        about: project.category,
        locationCreated: { '@type': 'Place', name: project.location },
        ...(asset?.src ? { image: `${BASE}/${asset.src}` } : {}),
        creator: { '@id': `${BASE}/#organization` },
        isPartOf: { '@id': `${BASE}/#website` }
      }
    ])
  }
})()
