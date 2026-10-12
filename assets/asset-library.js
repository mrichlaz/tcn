/*
  TCN image registry
  ------------------
  Change a visual here to update every component that uses its key.
  `data-asset` updates image tags; `data-asset-bg` updates CSS background cards.
*/
(() => {
  // Each supplier points at a local logo file under assets/vendors/. Swap the file
  // name below to change a brand mark; the card updates itself. `logo-placeholder.svg`
  // remains the fallback for any brand without a supplied asset (see `vendorOther`).
  const vendorLogo = (name, file) => ({
    src: `assets/vendors/${file}`,
    alt: `${name} logo`
  })
  const images = {
    logo: { src: 'assets/tcn-logo.png', alt: 'TCN logo' },
    homeHero: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    homeHeroSafety: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    homeHeroInstallation: { src: 'assets/products/electrical.jpg', alt: 'Industrial installation work' },
    homeHeroPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping and mechanical work' },
    homeHeroConstruction: { src: 'assets/products/construction-structure.jpg', alt: 'Steel structure and tower cranes under construction' },
    aboutHero: { src: 'assets/products/electrical.jpg', alt: 'Industrial installation work' },
    productsHero: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping and mechanical work' },
    projectsHero: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    capabilityConstruction: { src: 'assets/products/electrical.jpg', alt: 'Construction installation work' },
    capabilityTrading: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior' },
    industryPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial pipework and valves' },
    // Product-family card imagery. Each family has its own dedicated file so no two
    // catalogue cards share a visual. Kept in assets/products/families/ to stay
    // separate from the scene images reused by the hero, capability and project sections.
    productMechanical: { src: 'assets/products/families/mechanical.jpg', alt: 'Industrial process pumps, pipework and valves' },
    productElectrical: { src: 'assets/products/families/electrical.jpg', alt: 'Moulded-case circuit breaker in an electrical distribution board' },
    productInstrumentControl: { src: 'assets/products/families/instrument-control.jpg', alt: 'Pressure gauge on a process line' },
    productSurveySafety: { src: 'assets/products/families/survey-safety.jpg', alt: 'Surveyor operating a total station in the field' },
    productLighting: { src: 'assets/products/families/lighting.jpg', alt: 'Solar-powered street light with panel' },
    productFlashlights: { src: 'assets/products/families/flashlights.jpg', alt: 'Portable inspection flashlights' },
    productAluminiumStructures: { src: 'assets/products/families/aluminium-structures.jpg', alt: 'Aluminium structural frame and cladding system' },
    productCoatings: { src: 'assets/products/families/coatings.jpg', alt: 'Sealed epoxy floor in an industrial building' },
    productPrefabCapsules: { src: 'assets/products/families/prefab-capsules.jpg', alt: 'Prefabricated modular building unit' },
    productForklift: { src: 'assets/products/families/forklift.jpg', alt: 'Forklift handling freight at a logistics yard' },
    valueIntegrity: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract industrial structure' },
    valueTeamwork: { src: 'assets/products/electrical.jpg', alt: 'Construction installation team' },
    valueDelivery: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping system' },
    projectWarehouse: { src: 'assets/products/electrical.jpg', alt: 'Construction installation work' },
    projectPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial pipework and valves' },
    projectSafety: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial site safety work' },
    projectCoatings: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior' },
    projectCapsule: { src: 'assets/products/prefab-capsules.jpg', alt: 'Prefabricated building environment' },
    projectFuture: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract industrial structure' },
    vendorKsb: vendorLogo('KSB', 'ksb.svg'),
    vendorRotork: vendorLogo('Rotork', 'rotork.svg'),
    vendorSiemens: vendorLogo('Siemens', 'siemens.svg'),
    vendorAbb: vendorLogo('ABB', 'abb.svg'),
    vendorSchneider: vendorLogo('Schneider Electric', 'schneider-electric.svg'),
    vendor3m: vendorLogo('3M', '3m.svg'),
    vendorAesseal: vendorLogo('AESSEAL', 'aesseal.svg'),
    vendorSpiraxSarco: vendorLogo('Spirax Sarco', 'spirax-sarco.png'),
    vendorPanduit: vendorLogo('Panduit', 'panduit.svg'),
    vendorCorning: vendorLogo('Corning', 'corning.svg'),
    vendorAsco: vendorLogo('ASCO', 'asco.png'),
    vendorSmc: vendorLogo('SMC', 'smc.svg'),
    vendorAshcroft: vendorLogo('Ashcroft', 'ashcroft.png'),
    vendorNotifier: vendorLogo('Notifier', 'notifier.png'),
    vendorGarmin: vendorLogo('Garmin', 'garmin.svg'),
    vendorPetzl: vendorLogo('Petzl', 'petzl.svg'),
    vendorSylvania: vendorLogo('Sylvania', 'sylvania.png'),
    vendorClipsal: vendorLogo('Clipsal', 'clipsal.svg'),
    vendorNitecore: vendorLogo('Nitecore', 'nitecore.svg'),
    // `Others` is a text-only card (no brand logo) - see catalogue-page.js.
    clientVale: { src: 'assets/clients/vale-indonesia.svg', alt: 'PT Vale Indonesia logo' },
    clientFreeport: { src: 'assets/clients/freeport-indonesia.svg', alt: 'PT Freeport Indonesia logo' },
    clientAmman: { src: 'assets/clients/amman-mineral.svg', alt: 'PT Amman Mineral logo' },
    clientDonggi: { src: 'assets/clients/donggi-senoro.png', alt: 'PT Donggi Senoro logo' },
    clientAntam: { src: 'assets/clients/antam.png', alt: 'PT Antam, Tbk logo' },
    clientHexindo: { src: 'assets/clients/hexindo-adiperkasa.png', alt: 'PT Hexindo Adiperkasa, Tbk logo' }
  }

  const get = (key) => images[key] || null
  const apply = (root = document) => {
    root.querySelectorAll('[data-asset]').forEach((element) => {
      const asset = get(element.dataset.asset)
      if (!asset) return
      element.src = asset.src
      if (!element.alt || element.dataset.assetAlt === 'auto') element.alt = asset.alt
    })
    root.querySelectorAll('[data-asset-bg]').forEach((element) => {
      const asset = get(element.dataset.assetBg)
      if (!asset) return
      element.style.setProperty('--asset-image', `url("${asset.src}")`)
    })
  }

  window.TCNAssets = { images, get, apply }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => apply())
  else apply()
})()
