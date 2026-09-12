import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Inyecta <link rel="preload"> para las fuentes críticas (con hash) en el
// HTML final, evitando FOUT y mejorando el LCP sin depender de terceros.
function preloadFonts () {
  const critical = ['orbitron-latin', 'rajdhani-400-latin', 'rajdhani-700-latin']
  return {
    name: 'preload-critical-fonts',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml (html, ctx) {
      const files = Object.keys(ctx.bundle || {})
      const links = critical
        .map((name) =>
          files.find((f) => f.includes(name) && f.endsWith('.woff2'))
        )
        .filter(Boolean)
        .map(
          (file) =>
            `<link rel="preload" href="/${file}" as="font" type="font/woff2" crossorigin>`
        )
        .join('\n    ')
      if (!links) return html
      return html.replace('</head>', `    ${links}\n  </head>`)
    }
  }
}

// GitHub Pages con dominio propio (londoso.com) sirve desde la raíz.
// Si algún día se despliega en un subpath, sobreescribe con BASE_URL.
export default defineConfig({
  base: process.env.BASE_URL || '/',
  plugins: [vue(), preloadFonts()],
  css: {
    preprocessorOptions: {
      scss: {
        // Silence Dart Sass legacy @import deprecation notices.
        silenceDeprecations: ['legacy-js-api', 'import']
      }
    }
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
    reportCompressedSize: false
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
