import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@root': path.resolve(__dirname)
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/variables.scss" as *;`
      }
    }
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      exclude: [
        'src/main.tsx',
        'eslint.config.js',
        'vite.config.ts',
        'dist/**',
        '*.d.ts'
      ]
    },
    globals: true,
    include: ['test/**/*.test.{js,jsx,ts,tsx}']
  }
})
