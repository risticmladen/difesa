/**
 * Toggle module
 *
 * 1. Mobile hamburger menu (header)
 * 2. Generic toggle via data-toggle="targetId" attribute
 */
export function initToggle() {
  initMobileMenu()
  initDataToggles()
  initOrbPanels()
}

/* ---- Mobile menu ---- */
function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle')
  const menu = document.getElementById('main-menu')
  if (!toggle || !menu) return

  toggle.addEventListener('click', () => {
    const opening = menu.classList.toggle('is-open')
    toggle.setAttribute('aria-expanded', String(opening))
    toggle.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu')
  })

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      close()
      toggle.focus()
    }
  })

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      menu.classList.contains('is-open') &&
      !toggle.contains(e.target) &&
      !menu.contains(e.target)
    ) {
      close()
    }
  })

  function close() {
    menu.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Open menu')
  }
}

/* ---- Orb panel toggle ---- */
function initOrbPanels() {
  const grid = document.querySelector('.parent.grid-dail')
  if (!grid) return

  const buttons = grid.querySelectorAll('.orb-button[aria-controls]')
  const panels = grid.querySelectorAll('.grid-dail__description-item')
  const circle1 = grid.querySelector('.circle1')
  const menuLinks = document.querySelectorAll('#main-menu a[aria-controls]')
  if (!buttons.length || !panels.length) return

  let activeId = null

  // Map aria-controls values to their orb buttons for quick lookup
  const btnByTarget = new Map()
  buttons.forEach((btn) => {
    btn.setAttribute('aria-expanded', 'false')
    btnByTarget.set(btn.getAttribute('aria-controls'), btn)
  })

  function openPanel(targetId) {
    const target = document.getElementById(targetId)
    if (!target) return

    const isAlreadyActive = targetId === activeId
    closeAll()
    if (isAlreadyActive) return

    // Show panel
    target.classList.add('is-active')
    activeId = targetId
    if (circle1) circle1.classList.add('triggered-content')

    // Activate matching orb button, dim the rest
    const matchingBtn = btnByTarget.get(targetId)
    buttons.forEach((b) => {
      if (b === matchingBtn) {
        b.classList.add('is-active')
        b.setAttribute('aria-expanded', 'true')
      } else {
        b.classList.add('is-dimmed')
      }
    })

    // Activate matching menu link
    menuLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('aria-controls') === targetId)
    })
  }

  function closeAll() {
    buttons.forEach((b) => {
      b.classList.remove('is-active', 'is-dimmed')
      b.setAttribute('aria-expanded', 'false')
    })
    menuLinks.forEach((link) => link.classList.remove('is-active'))
    panels.forEach((p) => p.classList.remove('is-active'))
    if (circle1) circle1.classList.remove('triggered-content')
    activeId = null
  }

  // Orb button clicks
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      openPanel(btn.getAttribute('aria-controls'))
    })
  })

  // Mobile menu link clicks
  menuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('aria-controls')

      // Close mobile menu
      const menu = document.getElementById('main-menu')
      const menuToggle = document.querySelector('.header__menu-toggle')
      if (menu) menu.classList.remove('is-open')
      if (menuToggle) {
        menuToggle.setAttribute('aria-expanded', 'false')
        menuToggle.setAttribute('aria-label', 'Open menu')
      }

      openPanel(targetId)

      // Scroll to grid
      grid.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  })

  // Close on click outside grid
  document.addEventListener('click', (e) => {
    if (activeId && !grid.contains(e.target) && !e.target.closest('#main-menu')) {
      closeAll()
    }
  })

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeId) {
      closeAll()
    }
  })
}

/* ---- Generic data-toggle ---- */
function initDataToggles() {
  document.querySelectorAll('[data-toggle]').forEach((trigger) => {
    const target = document.getElementById(trigger.dataset.toggle)
    if (!target) return

    trigger.addEventListener('click', () => {
      const isExpanded = target.classList.toggle('is-open')
      trigger.setAttribute('aria-expanded', String(isExpanded))
    })
  })
}
