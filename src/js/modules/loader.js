/**
 * Page loader — fades out and hides once the page is fully loaded.
 */
export function initLoader() {
  const loader = document.getElementById('loader')
  if (!loader) return

  const hide = () => {
    loader.classList.add('is-hidden')
    loader.addEventListener(
      'transitionend',
      () => loader.setAttribute('aria-hidden', 'true'),
      { once: true },
    )
  }

  // If the page already finished loading (cached / fast load)
  if (document.readyState === 'complete') {
    hide()
  } else {
    window.addEventListener('load', hide)
  }
}
