/*
  Project archive grid + pagination.
  Reads window.TCN_PROJECTS (assets/projects-data.js) and renders the cards.
  With 4 projects per page the archive paginates itself; the page number is
  kept in the URL hash so a page can be linked or reloaded.
*/
(() => {
  const grid = document.querySelector('#project-grid')
  const pagination = document.querySelector('#project-pagination')
  const countLabel = document.querySelector('#project-count')
  if (!grid) return

  const projects = Array.isArray(window.TCN_PROJECTS) ? window.TCN_PROJECTS : []
  const PER_PAGE = 6

  const readPage = () => {
    const match = /(?:^|[#&])page=(\d+)/.exec(window.location.hash)
    const page = match ? Number(match[1]) : 1
    return Number.isFinite(page) && page > 0 ? page : 1
  }

  const writePage = (page) => {
    const next = page > 1 ? `#page=${page}` : ''
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}${next}`)
  }

  const card = (project) => {
    const asset = window.TCNAssets?.get(project.gallery[0].key) || { alt: project.title }
    return `<a class="project-archive-card" data-asset-bg="${project.gallery[0].key}" href="project.html?case=${project.id}">
      <span>${project.number}</span>
      <h2>${project.title}</h2>
      <p>${project.cardText}</p>
      <i>↗</i>
    </a>`
  }

  const renderPager = (page, totalPages) => {
    if (!pagination) return
    if (totalPages <= 1) {
      pagination.innerHTML = ''
      pagination.hidden = true
      return
    }
    pagination.hidden = false

    const items = []
    for (let index = 1; index <= totalPages; index += 1) {
      items.push(`<button type="button" data-page="${index}"${index === page ? ' class="is-active" aria-current="page"' : ''}>${String(index).padStart(2, '0')}</button>`)
    }

    pagination.innerHTML = `
      <button class="pagination-step" type="button" data-step="-1"${page === 1 ? ' disabled' : ''} aria-label="Previous page">←</button>
      <span class="pagination-pages">${items.join('')}</span>
      <button class="pagination-step" type="button" data-step="1"${page === totalPages ? ' disabled' : ''} aria-label="Next page">→</button>
      <span class="pagination-status">Page ${page} of ${totalPages}</span>
    `
  }

  const render = () => {
    const totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE))
    const page = Math.min(readPage(), totalPages)
    const start = (page - 1) * PER_PAGE
    const visible = projects.slice(start, start + PER_PAGE)

    grid.innerHTML = visible.map(card).join('')
    window.TCNAssets?.apply(grid)
    if (countLabel) {
      countLabel.textContent = `${projects.length} delivered ${projects.length === 1 ? 'project' : 'projects'}`
    }
    renderPager(page, totalPages)
  }

  const goTo = (page) => {
    writePage(page)
    render()
    document.querySelector('#project-archive')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  pagination?.addEventListener('click', (event) => {
    const button = event.target.closest('button')
    if (!button || button.disabled) return
    const totalPages = Math.max(1, Math.ceil(projects.length / PER_PAGE))
    if (button.dataset.step) {
      goTo(Math.min(totalPages, Math.max(1, readPage() + Number(button.dataset.step))))
      return
    }
    if (button.dataset.page) goTo(Number(button.dataset.page))
  })

  window.addEventListener('hashchange', render)
  render()
})()
