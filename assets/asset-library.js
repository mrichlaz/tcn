/*
  TCN image registry
  ------------------
  Change a visual here to update every component that uses its key.
  `data-asset` updates image tags; `data-asset-bg` updates CSS background cards.
*/
(() => {
  // Every supplier starts with the same visible placeholder tile. Replace only the
  // `src` for a vendor below with its approved local SVG/PNG - the card updates itself.
  const vendorLogo = (name) => ({
    src: 'assets/vendors/logo-placeholder.svg',
    alt: `${name} logo placeholder`,
    status: 'placeholder - awaiting approved local logo asset'
  })
  const images = {
    logo: { src: 'assets/tcn-logo.png', alt: 'TCN logo' },
    homeHero: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    homeHeroSafety: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    homeHeroInstallation: { src: 'assets/products/electrical.jpg', alt: 'Industrial installation work' },
    homeHeroPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping and mechanical work' },
    homeHeroPrefab: { src: 'assets/products/prefab-capsules.jpg', alt: 'Prefabricated industrial building environment' },
    aboutHero: { src: 'assets/products/electrical.jpg', alt: 'Industrial installation work' },
    productsHero: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping and mechanical work' },
    projectsHero: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction team at work' },
    capabilityConstruction: { src: 'assets/products/electrical.jpg', alt: 'Construction installation work' },
    capabilityTrading: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior' },
    industryPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial pipework and valves' },
    productMechanical: { src: 'assets/products/mechanical.jpg', alt: 'Industrial pipework and valves' },
    productElectrical: { src: 'assets/products/electrical.jpg', alt: 'Construction installation work representing electrical infrastructure' },
    productInstrumentControl: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract blue industrial technical composition' },
    productSurveySafety: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial construction work representing site safety' },
    productLighting: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract blue industrial technical composition' },
    productFlashlights: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract blue industrial technical composition' },
    productAluminiumStructures: { src: 'assets/products/electrical.jpg', alt: 'Commercial building work representing structural installation' },
    productCoatings: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior representing protected working surfaces' },
    productPrefabCapsules: { src: 'assets/products/prefab-capsules.jpg', alt: 'Built environment representing prefabricated building deployment' },
    productForklift: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior representing material handling' },
    valueIntegrity: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract industrial structure' },
    valueTeamwork: { src: 'assets/products/electrical.jpg', alt: 'Construction installation team' },
    valueDelivery: { src: 'assets/products/mechanical.jpg', alt: 'Industrial piping system' },
    projectWarehouse: { src: 'assets/products/electrical.jpg', alt: 'Construction installation work' },
    projectPiping: { src: 'assets/products/mechanical.jpg', alt: 'Industrial pipework and valves' },
    projectSafety: { src: 'assets/products/survey-safety.jpg', alt: 'Industrial site safety work' },
    projectCoatings: { src: 'assets/products/coatings.jpg', alt: 'Industrial warehouse interior' },
    projectCapsule: { src: 'assets/products/prefab-capsules.jpg', alt: 'Prefabricated building environment' },
    projectFuture: { src: 'assets/products/tcn-industrial-placeholder.png', alt: 'Abstract industrial structure' },
    vendorKsb: vendorLogo('KSB'),
    vendorRotork: vendorLogo('Rotork'),
    vendorSiemens: vendorLogo('Siemens'),
    vendorAbb: vendorLogo('ABB'),
    vendorSchneider: vendorLogo('Schneider Electric'),
    vendor3m: vendorLogo('3M'),
    vendorAesseal: vendorLogo('AESSEAL'),
    vendorSpiraxSarco: vendorLogo('Spirax Sarco'),
    vendorPanduit: vendorLogo('Panduit'),
    vendorCorning: vendorLogo('Corning'),
    vendorAsco: vendorLogo('ASCO'),
    vendorSmc: vendorLogo('SMC'),
    vendorAshcroft: vendorLogo('Ashcroft'),
    vendorNotifier: vendorLogo('Notifier'),
    vendorGarmin: vendorLogo('Garmin'),
    vendorPetzl: vendorLogo('Petzl'),
    vendorSylvania: vendorLogo('Sylvania'),
    vendorClipsal: vendorLogo('Clipsal'),
    vendorNitecore: vendorLogo('Nitecore'),
    vendorOther: vendorLogo('Other supply brand'),
    clientVale: { src: 'assets/clients/vale-indonesia.svg', alt: 'PT Vale Indonesia logo' },
    clientFreeport: { src: 'assets/clients/freeport-indonesia.svg', alt: 'PT Freeport Indonesia logo' },
    clientAmman: { src: 'assets/clients/amman-mineral.svg', alt: 'PT Amman Mineral logo' },
    clientDonggi: { src: 'assets/clients/donggi-senoro-reference.svg', alt: 'PT Donggi Senoro client reference mark' },
    clientAntam: { src: 'assets/clients/antam-reference.svg', alt: 'PT Antam client reference mark' },
    clientHexindo: { src: 'assets/clients/hexindo-reference.svg', alt: 'PT Hexindo Adiperkasa client reference mark' }
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
