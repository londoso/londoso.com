<template>
  <router-view />
</template>

<script setup>
import { onMounted, onBeforeUnmount, nextTick } from 'vue'

// Animación de entrada progresiva (sustituye a wow.js).
//
// Estrategia a prueba de fallos: el contenido es SIEMPRE visible por CSS.
// Solo si el navegador soporta IntersectionObserver marcamos los elementos
// con `.reveal-armed` (que los oculta) e inmediatamente los vamos revelando
// al entrar en viewport. Así, si algo falla, nunca queda contenido oculto.
let observer

onMounted(async () => {
  await nextTick()

  if (!('IntersectionObserver' in window)) return

  const targets = Array.from(document.querySelectorAll('.reveal'))
  if (targets.length === 0) return

  // Armamos el estado oculto solo cuando sabemos que podemos observar.
  targets.forEach((el) => el.classList.add('reveal-armed'))

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0, rootMargin: '0px 0px -8% 0px' }
  )

  targets.forEach((el) => observer.observe(el))

  // Red de seguridad: revela todo pasado un breve tiempo pase lo que pase.
  window.setTimeout(() => {
    targets.forEach((el) => el.classList.add('is-visible'))
  }, 1200)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>
