import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    /**
     * IMPORTANT:
     * Use relative base so assets work correctly on GitHub Pages
     */
    base: './',

    plugins: [react()],

    /**
     * Build directly into /docs for GitHub Pages
     */
    build: {
      outDir: 'docs',
      emptyOutDir: true,
    },

    /**
     * Environment variables
     */
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    /**
     * Path aliases
     */
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  }
})
