import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()  ],
  // optimizeDeps: {
  //   include: ['framer-motion', 'lucide-react']
  // },
  build: {
    target: 'es2015'
  }
})