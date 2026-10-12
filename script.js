const menuButton = document.querySelector('.menu-button')
const navigation = document.querySelector('.primary-navigation')
const navLinks = document.querySelectorAll('.primary-navigation a')
const quoteForm = document.querySelector('#quote-form')
const formStatus = document.querySelector('.form-status')
const siteHeader = document.querySelector('.site-header')

if (siteHeader) {
  const headerSentinel = document.createElement('div')
  headerSentinel.className = 'header-sentinel'
  headerSentinel.setAttribute('aria-hidden', 'true')
  siteHeader.insertAdjacentElement('afterend', headerSentinel)

  const headerObserver = new IntersectionObserver(([entry]) => {
    siteHeader.classList.toggle('is-scrolled', !entry.isIntersecting)
  })

  headerObserver.observe(headerSentinel)
}

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  navigation.classList.toggle('is-open', !isOpen)
})

navLinks.forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false')
  navigation.classList.remove('is-open')
}))

const revealItems = document.querySelectorAll('.reveal')
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: .12 })

revealItems.forEach((item) => observer.observe(item))

quoteForm?.addEventListener('submit', async (event) => {
  event.preventDefault()

  const submitButton = quoteForm.querySelector('button[type="submit"]')
  const data = Object.fromEntries(new FormData(quoteForm).entries())
  const name = String(data.name || '').trim().split(' ')[0]

  formStatus.classList.remove('is-error', 'is-success')
  formStatus.textContent = 'Sending your enquiry…'
  if (submitButton) submitButton.disabled = true

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${quoteForm.action.split('/').pop()}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json()

    if (response.ok && String(result.success) === 'true') {
      formStatus.classList.add('is-success')
      formStatus.textContent = `Thank you${name ? `, ${name}` : ''}. Your enquiry has been sent to TCN — we will respond shortly.`
      quoteForm.reset()
    } else {
      throw new Error(result.message || 'Submission failed')
    }
  } catch (error) {
    formStatus.classList.add('is-error')
    formStatus.innerHTML = 'Sorry, your enquiry could not be sent. Please email <a href="mailto:info@tcn-corp.com">info@tcn-corp.com</a> or call <a href="tel:+62811454669">+62 811 454 669</a>.'
  } finally {
    if (submitButton) submitButton.disabled = false
  }
})

const mapFrame = document.querySelector('#office-map-frame')
const mapLink = document.querySelector('#office-map-link')
const mapButtons = document.querySelectorAll('[data-map-source]')

mapButtons.forEach((button) => button.addEventListener('click', () => {
  mapButtons.forEach((item) => {
    const active = item === button
    item.classList.toggle('is-active', active)
    item.setAttribute('aria-pressed', String(active))
  })

  if (mapFrame) {
    mapFrame.src = button.dataset.mapSource
    mapFrame.title = `TCN ${button.textContent.trim()} office location`
  }
  if (mapLink) mapLink.href = button.dataset.mapLink
}))

const heroSlideshow = document.querySelector('[data-hero-slideshow]')

if (heroSlideshow) {
  const heroSlides = [...heroSlideshow.querySelectorAll('[data-hero-slide]')]
  const heroDots = [...heroSlideshow.querySelectorAll('[data-hero-index]')]
  const heroPrevious = heroSlideshow.querySelector('[data-hero-previous]')
  const heroNext = heroSlideshow.querySelector('[data-hero-next]')
  const heroCount = heroSlideshow.querySelector('.hero-slide-count')
  const autoplayInterval = Number(heroSlideshow.dataset.autoplayInterval) || 5000
  let activeHeroSlide = 0
  let heroTimer

  const showHeroSlide = (index) => {
    activeHeroSlide = (index + heroSlides.length) % heroSlides.length
    heroSlides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeHeroSlide
      slide.classList.toggle('is-active', active)
      slide.setAttribute('aria-hidden', String(!active))
    })
    heroDots.forEach((dot, dotIndex) => {
      const active = dotIndex === activeHeroSlide
      dot.classList.toggle('is-active', active)
      dot.setAttribute('aria-pressed', String(active))
    })
    if (heroCount) heroCount.textContent = `${String(activeHeroSlide + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`
  }

  const stopHeroAutoplay = () => window.clearInterval(heroTimer)
  const startHeroAutoplay = () => {
    stopHeroAutoplay()
    if (!document.hidden) {
      heroTimer = window.setInterval(() => {
        showHeroSlide(activeHeroSlide + 1)
      }, autoplayInterval)
    }
  }
  const selectHeroSlide = (index) => {
    showHeroSlide(index)
    startHeroAutoplay()
  }

  heroPrevious?.addEventListener('click', () => selectHeroSlide(activeHeroSlide - 1))
  heroNext?.addEventListener('click', () => selectHeroSlide(activeHeroSlide + 1))
  heroDots.forEach((dot) => dot.addEventListener('click', () => selectHeroSlide(Number(dot.dataset.heroIndex))))
  document.addEventListener('visibilitychange', () => document.hidden ? stopHeroAutoplay() : startHeroAutoplay())
  showHeroSlide(0)
  startHeroAutoplay()
}

document.querySelector('#year')?.append(new Date().getFullYear())
