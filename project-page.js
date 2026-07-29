const projectFormats = {
  construction: { number: '01', title: 'Construction & installation', description: 'For structures, civil work, interiors, industrial piping and flooring.', fields: ['Approved project title', 'Client / location / year', 'Requirement and site context', 'TCN scope of work', 'Materials and installation detail', 'Client-approved site photography'] },
  procurement: { number: '02', title: 'Trading & procurement', description: 'For product supply, specialist sourcing and multi-item fulfilment.', fields: ['Approved project title', 'Client / location / year', 'Supply requirement', 'Product families and brands', 'Fulfilment and delivery approach', 'Client-approved product or delivery photography'] },
  coatings: { number: '03', title: 'Coatings & protection', description: 'For epoxy flooring, protective coating and surface protection.', fields: ['Approved project title', 'Client / location / year', 'Surface or asset condition', 'Specified coating system', 'Application scope and process', 'Client-approved before-and-after photography'] },
  modular: { number: '04', title: 'Prefab & modular', description: 'For prefabricated buildings, capsules and rapid-deployment programmes.', fields: ['Approved project title', 'Client / location / year', 'Deployment requirement', 'Selected model and configuration', 'Transport and installation scope', 'Client-approved site and interior photography'] }
}
const exampleProjects = {
  'warehouse-canopy': { number: 'EX-01', category: 'Illustrative project example', title: 'Warehouse canopy & aluminium structure', location: 'South Sulawesi, Indonesia', year: 'Example scenario', scope: 'Supply and installation of an aluminium structure for a working warehouse frontage, coordinated around daily site operations.', outcome: 'A weather-protected loading area, installed around the client’s operating hours.', imageKey: 'projectWarehouse' },
  'utility-piping': { number: 'EX-02', category: 'Illustrative project example', title: 'Industrial utility piping renewal', location: 'Eastern Indonesia', year: 'Example scenario', scope: 'Industrial piping, flanges and valve components supplied and installed for a planned utility-system renewal.', outcome: 'Product supply and field installation delivered under a single scope of work.', imageKey: 'projectPiping' },
  'safety-procurement': { number: 'EX-03', category: 'Illustrative project example', title: 'Site safety & field-equipment mobilisation', location: 'Indonesia', year: 'Example scenario', scope: 'Coordinated procurement of survey, safety and portable lighting products for a new project mobilisation.', outcome: 'A coordinated supply route across several product families, aligned to the mobilisation date.', imageKey: 'projectSafety' },
  'epoxy-floor': { number: 'EX-04', category: 'Illustrative project example', title: 'Workshop floor protection system', location: 'Makassar, Indonesia', year: 'Example scenario', scope: 'Assessment and epoxy-coating application on a workshop floor under daily equipment traffic.', outcome: 'A durable, cleanable finish specified to suit the operating environment.', imageKey: 'projectCoatings' },
  'capsule-deployment': { number: 'EX-05', category: 'Illustrative project example', title: 'Rapid-deployment capsule accommodation', location: 'Indonesia', year: 'Example scenario', scope: 'Prefabricated accommodation selection, transport planning and installation support for a remote operating location.', outcome: 'Module selected, transported, installed and connected to site services.', imageKey: 'projectCapsule' }
}
const query = new URLSearchParams(window.location.search)
const format = projectFormats[query.get('format')] || projectFormats.construction
const sample = exampleProjects[query.get('case')]
const dossier = document.querySelector('#project-dossier')
if (dossier) {
  if (sample) {
    document.title = `${sample.title} — TCN project example`
    dossier.classList.add('sample-dossier')
    const asset = window.TCNAssets?.get(sample.imageKey) || { src: '', alt: 'Illustrative industrial project scene' }
    dossier.innerHTML = `<a class="back-link" href="projects.html">← Project archive</a><div class="sample-dossier-grid"><div><p class="eyebrow">${sample.number} / ${sample.category}</p><h1>${sample.title}</h1><p>${sample.scope}</p><div class="sample-meta"><span>Location <strong>${sample.location}</strong></span><span>Project date <strong>${sample.year}</strong></span></div></div><figure><img src="${asset.src}" data-asset="${sample.imageKey}" alt="${asset.alt}" /><figcaption>Placeholder image. To be replaced with TCN project photography before publication.</figcaption></figure></div><div class="sample-outcome"><span>Outcome</span><p>${sample.outcome}</p></div>`
  } else {
    document.title = `${format.title} project dossier — TCN`
    dossier.innerHTML = `<a class="back-link" href="projects.html">← Project archive</a><p class="eyebrow">${format.number} / Case-study format</p><h1>${format.title}</h1><p>${format.description}</p><div class="dossier-status"><span>Project content</span><strong>Ready for client-approved materials</strong></div><ol class="dossier-fields">${format.fields.map((field, index) => `<li><span>0${index + 1}</span>${field}</li>`).join('')}</ol>`
  }
}
