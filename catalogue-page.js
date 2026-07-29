const productGrid = document.querySelector('#product-index-grid')
const supplierBrandGrid = document.querySelector('#supplier-brand-grid')
const params = new URLSearchParams(window.location.search)
const getAsset = (key) => window.TCNAssets?.get(key) || { src: '', alt: '' }

if (supplierBrandGrid && window.supplierBrands) {
  supplierBrandGrid.innerHTML = window.supplierBrands.map((brand) => {
    const logo = getAsset(brand.logoKey)
    const placeholder = logo.status?.startsWith('placeholder')
    const mark = logo.src
      ? `<img src="${logo.src}" data-asset="${brand.logoKey}" data-asset-alt="auto" alt="${logo.alt}" />`
      : `<span class="supplier-logo-missing" aria-hidden="true">Logo</span>`
    return `<article class="supplier-brand-card"><div class="supplier-brand-identity ${placeholder ? 'is-placeholder' : ''}">${mark}</div><strong class="supplier-brand-wordmark">${brand.name}</strong><span>${brand.discipline}</span></article>`
  }).join('')
}

if (productGrid) {
  productGrid.innerHTML = window.productCategories.map((category) => {
    const asset = getAsset(category.imageKey)
    return `
    <a class="product-index-card" href="product-category.html?category=${category.id}" aria-label="View ${category.title} product category">
      <figure class="product-index-media"><img src="${asset.src}" data-asset="${category.imageKey}" alt="${asset.alt}" loading="lazy" /><figcaption>${category.imageSource}</figcaption></figure>
      <span class="product-number">${category.number}</span>
      <div><p class="card-label">${category.tags.slice(0, 2).join(' / ')}</p><h2>${category.title}</h2><p>${category.strapline}</p></div>
      <span class="product-card-link" aria-hidden="true">View category <span>↗</span></span>
    </a>
  ` }).join('')
}

const categoryHero = document.querySelector('#category-hero')
const categoryGroups = document.querySelector('#category-groups')
const relatedGrid = document.querySelector('#related-grid')

if (categoryHero && categoryGroups && relatedGrid) {
  const selectedCategory = window.productCategories.find((category) => category.id === params.get('category')) || window.productCategories[0]
  const asset = getAsset(selectedCategory.imageKey)
  document.title = `${selectedCategory.title} — Products | TCN`
  categoryHero.innerHTML = `
    <div class="category-hero-media" aria-hidden="true"><img src="${asset.src}" data-asset="${selectedCategory.imageKey}" alt="" /></div>
    <a class="back-link" href="products.html#catalogue">← All product families</a>
    <p class="eyebrow">${selectedCategory.number} / Product category</p>
    <h1>${selectedCategory.title}</h1>
    <p>${selectedCategory.strapline}</p>
    <div class="category-tags">${selectedCategory.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
  `
  categoryGroups.innerHTML = `<div class="group-heading"><p class="eyebrow">Subcategories</p><p>From TCN’s current catalogue. Availability and specification confirmed on enquiry.</p></div>${selectedCategory.groups.map((group, index) => `
    <article class="category-group"><div class="group-number">0${index + 1}</div><h2>${group.title}</h2><ul>${group.items.map((item) => `<li>${item}</li>`).join('')}</ul><a class="text-link" href="index.html#contact">Request this category <span>↗</span></a></article>
  `).join('')}`
  relatedGrid.innerHTML = window.productCategories.filter((category) => category.id !== selectedCategory.id).slice(0, 3).map((category) => `<a href="product-category.html?category=${category.id}"><span>${category.number}</span><strong>${category.title}</strong><i>↗</i></a>`).join('')
}
