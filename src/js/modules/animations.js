/**
 * Scroll-triggered animations via IntersectionObserver.
 *
 * Usage: add class="animate-on-scroll" to any element.
 * The element receives .is-visible once it enters the viewport.
 * Respects prefers-reduced-motion.
 */
export function initAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll')
  if (!elements.length) return

  // Skip animation for users who prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )

  elements.forEach((el) => observer.observe(el))
}
