import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Resolve any necessary aliases here
      'prism-react-renderer': 'prism-react-renderer'
    }
  },
})
