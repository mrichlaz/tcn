/*
  Project detail page.
  Reads the case id from ?case= and renders the matching record from
  window.TCN_PROJECTS (assets/projects-data.js).
*/
const query = new URLSearchParams(window.location.search)
const dossier = document.querySelector('#project-dossier')

const projects = Array.isArray(window.TCN_PROJECTS) ? window.TCN_PROJECTS : []
const project = projects.find((item) => item.id === query.get('case'))

if (dossier) {
  if (project) {
    document.title = `${project.title} — TCN project record`
    dossier.classList.add('sample-dossier')

    const figure = (key, caption) => {
      const asset = window.TCNAssets?.get(key) || { src: '', alt: caption }
      return `<figure><img src="${asset.src}" data-asset="${key}" alt="${asset.alt}" /><figcaption>${caption}</figcaption></figure>`
    }

    dossier.innerHTML = `
      <a class="back-link" href="projects.html">← Project archive</a>
      <div class="sample-dossier-grid">
        <div>
          <p class="eyebrow">${project.number} / ${project.category}</p>
          <h1>${project.title}</h1>
          <p>${project.scope}</p>
          <div class="sample-meta">
            <span>Client <strong>${project.client}</strong></span>
            <span>Location <strong>${project.location}</strong></span>
            <span>Structure size <strong>${project.size}</strong></span>
            <span>Floor area <strong>${project.area}</strong></span>
          </div>
        </div>
        ${figure(project.gallery[0].key, project.gallery[0].caption)}
      </div>
      <div class="sample-outcome"><span>Outcome</span><p>${project.outcome}</p></div>
      <div class="sample-gallery">
        ${project.gallery.slice(1).map((item) => figure(item.key, item.caption)).join('')}
        <div class="sample-gallery-facts">
          <span><small>Completed</small><strong>${project.year.replace('Completed ', '')}</strong></span>
          <p>Figures and photography come from TCN’s completion report for this installation.</p>
        </div>
      </div>
    `
  } else {
    document.title = 'Project not found — TCN'
    dossier.innerHTML = `
      <a class="back-link" href="projects.html">← Project archive</a>
      <p class="eyebrow">Project archive</p>
      <h1>Record not<br /><em>found.</em></h1>
      <p>That project is not in the archive. Browse the delivered projects instead.</p>
      <a class="button button-dark" href="projects.html#project-archive">View projects <span>↗</span></a>
    `
  }
}
