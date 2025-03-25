import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { // <-- config de vitest
    environment: 'happy-dom',
    coverage: {
      exclude: [
        'src/main.tsx',
        'eslint.config.js',
        'vite.config.ts',
        'dist/**',
        '*.d.ts'
      ]
    }
  }
})
