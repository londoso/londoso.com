import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/i18n'

import '@/scss/main.scss'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')

// Carga diferida de Google Analytics: se inicia cuando el navegador está
// inactivo tras cargar la página, para no penalizar el LCP ni el hilo principal.
function loadAnalytics () {
  const GA_ID = 'GTM-KN3ZK8B'
  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)

  window.dataLayer = window.dataLayer || []
  function gtag () { window.dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', GA_ID)
}

if (typeof window !== 'undefined') {
  const start = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadAnalytics, { timeout: 4000 })
    } else {
      window.setTimeout(loadAnalytics, 3000)
    }
  }
  if (document.readyState === 'complete') {
    start()
  } else {
    window.addEventListener('load', start, { once: true })
  }
}
