import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Workaround für @samusn/react-card-package 1.0.0:
// Das Package hat react/jsx-runtime mitgebündelt (in der vite.config.js des Partners fehlt
// 'react/jsx-runtime' unter rollupOptions.external). Der mitgebündelte Code ruft require("react")
// auf, und require gibt es im Browser nicht -> "Calling `require` for "react" in an environment
// that doesn't expose the `require` function". Dieses Plugin gibt genau dieser einen Datei ein
// lokales require, das "react" liefert. Sobald der Partner 1.0.1 mit korrigiertem external
// publiziert, kann das Plugin und optimizeDeps.exclude wieder entfernt werden.
function fixPartnerRequire() {
  const target = /@samusn[\\/]react-card-package[\\/]dist[\\/]react-card-package\.es\.js$/
  return {
    name: 'fix-partner-require',
    enforce: 'pre',
    transform(code, id) {
      if (!target.test(id.split('?')[0])) return
      const shim =
        "import * as __react from 'react';\n" +
        "const require = (m) => { if (m === 'react') return __react.default ?? __react; " +
        "throw new Error('require(' + m + ') wird hier nicht unterstuetzt'); };\n"
      return { code: shim + code, map: null }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [fixPartnerRequire(), react()],
  optimizeDeps: {
    // Damit das Plugin die Datei im Dev-Server sieht (vorgebündelte Deps umgehen Plugins)
    exclude: ['@samusn/react-card-package'],
  },
})
