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
    projectsHero: { src: 'assets/projects/vale-laila-workshop-2.jpg', alt: 'Aluminium structure under erection at PT Vale Indonesia' },
    capabilityConstruction: { src: 'assets/products/structural-erection.jpg', alt: 'Steel structure being erected and welded on site' },
    capabilityTrading: { src: 'assets/products/trading-procurement.jpg', alt: 'Racked and shrink-wrapped goods prepared for dispatch' },
    industryPiping: { src: 'assets/products/industry-piping.jpg', alt: 'Industrial pipework with gate valves' },
    // Product-family card imagery. Each family has its own dedicated file so no two
    // catalogue cards share a visual. Kept in assets/products/families/ to stay
    // separate from the scene images reused by the hero, capability and project sections.
    productMechanical: { src: 'assets/products/families/mechanical.jpg', alt: 'Industrial process pumps, pipework and valves' },
    productElectrical: { src: 'assets/products/families/electrical.jpg', alt: 'Moulded-case circuit breaker in an electrical distribution board' },
    productInstrumentControl: { src: 'assets/products/families/instrument-control.jpg', alt: 'Pressure gauge on a process line' },
    productSurveySafety: { src: 'assets/products/families/survey-safety-total-station.jpg', alt: 'Surveyor operating a total station in the field' },
    productLighting: { src: 'assets/products/families/lighting.jpg', alt: 'Solar-powered street light with panel' },
    productFlashlights: { src: 'assets/products/families/flashlights.jpg', alt: 'Portable inspection flashlights' },
    productAluminiumStructures: { src: 'assets/products/families/aluminium-structures.jpg', alt: 'Aluminium structural frame and cladding system' },
    productCoatings: { src: 'assets/products/families/coatings.jpg', alt: 'Sealed epoxy floor in an industrial building' },
    productPrefabCapsules: { src: 'assets/products/families/prefab-capsules.jpg', alt: 'Prefabricated modular building unit' },
    productForklift: { src: 'assets/products/families/forklift.jpg', alt: 'Forklift handling freight at a logistics yard' },
    valueIntegrity: { src: 'assets/products/quality-inspection.jpg', alt: 'Engineer inspecting a process system to specification' },
    valueTeamwork: { src: 'assets/products/teamwork.jpg', alt: 'Site team reviewing work together' },
    valueDelivery: { src: 'assets/products/delivery-logistics.jpg', alt: 'Freight loaded for shipment to site' },
    projectBahodopi1: { src: 'assets/projects/vale-bahodopi-storage-1.jpg', alt: 'Aluminium storage structure with sliding door at Bahodopi' },
    projectBahodopi2: { src: 'assets/projects/vale-bahodopi-storage-2.jpg', alt: 'Side elevation of the Bahodopi storage structure' },
    projectBahodopi3: { src: 'assets/projects/vale-bahodopi-storage-3.jpg', alt: 'Clear-span interior of the Bahodopi storage structure' },
    projectBahodopi4: { src: 'assets/projects/vale-bahodopi-storage-4.jpg', alt: 'Clad elevation of the Bahodopi storage structure' },
    projectBahodopi5: { src: 'assets/projects/vale-bahodopi-storage-5.jpg', alt: 'Open access door of the Bahodopi storage structure' },
    projectBahodopi6: { src: 'assets/projects/vale-bahodopi-storage-6.jpg', alt: 'Gable end of the Bahodopi storage structure' },
    projectBetsy1: { src: 'assets/projects/vale-betsy-storage-1.jpg', alt: 'Open-sided bulk storage shed at Betsy Area' },
    projectBetsy2: { src: 'assets/projects/vale-betsy-storage-2.jpg', alt: 'Roof structure inside the Betsy Area storage shed' },
    projectBetsy3: { src: 'assets/projects/vale-betsy-storage-3.jpg', alt: 'Thirty-metre span shed roof at Betsy Area' },
    projectBetsy4: { src: 'assets/projects/vale-betsy-storage-4.jpg', alt: 'Shed columns along the storage yard at Betsy Area' },
    projectBetsy5: { src: 'assets/projects/vale-betsy-storage-5.jpg', alt: 'Roof framing over the Betsy Area yard' },
    projectBetsy6: { src: 'assets/projects/vale-betsy-storage-6.jpg', alt: 'Interior span of the Betsy Area shed' },
    projectPomalaa1: { src: 'assets/projects/vale-pomalaa-storage-1.jpg', alt: 'Aluminium storage building with sliding door at Pomalaa' },
    projectPomalaa2: { src: 'assets/projects/vale-pomalaa-storage-2.jpg', alt: 'Side elevation of the Pomalaa storage building' },
    projectPomalaa3: { src: 'assets/projects/vale-pomalaa-storage-3.jpg', alt: 'Lit interior of the Pomalaa storage building' },
    projectPomalaa4: { src: 'assets/projects/vale-pomalaa-storage-4.jpg', alt: 'Clad wall of the Pomalaa storage building' },
    projectPomalaa5: { src: 'assets/projects/vale-pomalaa-storage-5.jpg', alt: 'Long elevation of the Pomalaa storage building' },
    projectPomalaa6: { src: 'assets/projects/vale-pomalaa-storage-6.jpg', alt: 'Workshop-lit interior of the Pomalaa storage building' },
    projectGfs1a: { src: 'assets/projects/vale-gfs1-warehouse-1.jpg', alt: 'Warehouse structure with sliding door at GFS Area 1' },
    projectGfs1b: { src: 'assets/projects/vale-gfs1-warehouse-2.jpg', alt: 'Side elevation of the GFS Area 1 warehouse' },
    projectGfs1c: { src: 'assets/projects/vale-gfs1-warehouse-3.jpg', alt: 'Sixty-metre interior run of the GFS Area 1 warehouse' },
    projectGfs1d: { src: 'assets/projects/vale-gfs1-warehouse-4.jpg', alt: 'Corner view of the GFS Area 1 warehouse' },
    projectGfs1e: { src: 'assets/projects/vale-gfs1-warehouse-5.jpg', alt: 'Sliding doors on the GFS Area 1 warehouse' },
    projectGfs1f: { src: 'assets/projects/vale-gfs1-warehouse-6.jpg', alt: 'Interior frame of the GFS Area 1 warehouse' },
    projectGfs2a: { src: 'assets/projects/vale-gfs2-warehouse-1.jpg', alt: 'Warehouse structure during site works at GFS Area 2' },
    projectGfs2b: { src: 'assets/projects/vale-gfs2-warehouse-2.jpg', alt: 'Clad wall of the GFS Area 2 warehouse' },
    projectGfs2c: { src: 'assets/projects/vale-gfs2-warehouse-3.jpg', alt: 'Wide-span interior of the GFS Area 2 warehouse' },
    projectGfs2d: { src: 'assets/projects/vale-gfs2-warehouse-4.jpg', alt: 'Interior works inside the GFS Area 2 warehouse' },
    projectGfs2e: { src: 'assets/projects/vale-gfs2-warehouse-5.jpg', alt: 'Roof line of the GFS Area 2 warehouse' },
    projectGfs2f: { src: 'assets/projects/vale-gfs2-warehouse-6.jpg', alt: 'Open interior of the GFS Area 2 warehouse' },
    projectLaila1: { src: 'assets/projects/vale-laila-workshop-1.jpg', alt: 'Curved-roof workshop structure at Laila Area' },
    projectLaila2: { src: 'assets/projects/vale-laila-workshop-2.jpg', alt: 'Workshop structure during erection at Laila Area' },
    projectLaila3: { src: 'assets/projects/vale-laila-workshop-3.jpg', alt: 'High-clearance interior of the Laila Area workshop' },
    projectLaila4: { src: 'assets/projects/vale-laila-workshop-4.jpg', alt: 'Roof soffit of the Laila Area workshop' },
    // Prefabricated-building package for PT Vale Indonesia at IGP Pomalaa (July 2024).
    // Extracted from TCN's signed completion reports, so no stock imagery is used.
    projectPrefabOffice1: { src: 'assets/projects/vale-pomalaa-office-1.jpg', alt: 'Prefabricated construction office handed over at IGP Pomalaa' },
    projectPrefabDormitory1: { src: 'assets/projects/vale-pomalaa-dormitory-1.jpg', alt: 'Prefabricated dormitory block at IGP Pomalaa' },
    projectPrefabDormitory2: { src: 'assets/projects/vale-pomalaa-dormitory-2.jpg', alt: 'Dormitory block with air-conditioning units fitted' },
    projectPrefabMusholah1: { src: 'assets/projects/vale-pomalaa-musholah-1.jpg', alt: 'Interior of the prefabricated musholah' },
    projectPrefabTraining1: { src: 'assets/projects/vale-pomalaa-training-1.jpg', alt: 'Prefabricated training centre building at IGP Pomalaa' },
    projectPrefabBooth1: { src: 'assets/projects/vale-pomalaa-booth-1.jpg', alt: 'Prefabricated security guard booth' },
    projectPrefabBooth2: { src: 'assets/projects/vale-pomalaa-booth-2.jpg', alt: 'Second security guard booth under installation' },
    projectPrefabSimulator1: { src: 'assets/projects/vale-pomalaa-simulator-1.jpg', alt: 'Prefabricated simulator room building' },
    projectPrefabSimulator2: { src: 'assets/projects/vale-pomalaa-simulator-2.jpg', alt: 'Interior of the prefabricated simulator room' },
    projectPrefabFitness1: { src: 'assets/projects/vale-pomalaa-fitness-1.jpg', alt: 'Prefabricated fitness centre building at IGP Pomalaa' },
    projectPrefabFitness2: { src: 'assets/projects/vale-pomalaa-fitness-2.jpg', alt: 'Gym equipment installed in the fitness centre' },
    projectPrefabFitness3: { src: 'assets/projects/vale-pomalaa-fitness-3.jpg', alt: 'Cardio equipment in the prefabricated fitness centre' },
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
