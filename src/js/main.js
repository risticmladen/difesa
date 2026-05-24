import '../css/style.css'
import { initLoader } from './modules/loader.js'
import { initToggle } from './modules/toggle.js'
import { initAnimations } from './modules/animations.js'

document.addEventListener('DOMContentLoaded', () => {
  initLoader()
  initToggle()
  initAnimations()
})
