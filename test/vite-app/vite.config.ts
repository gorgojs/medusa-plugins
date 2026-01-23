import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { testPlugin } from 'vite-plugin-test-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), testPlugin()],
})
