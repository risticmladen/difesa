import { defineConfig } from 'vite'

export default defineConfig({
  base: '/difesa/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    /* Multi-page setup (uncomment when adding pages):
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
      },
    },
    */
  },
  css: {
    devSourcemap: true,
  },
})
