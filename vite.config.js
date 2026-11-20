import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'EMAIL', 'PHONE', 'GITHUB', 'LINKEDIN', 'UPWORK', 'RESUME'],
  define: { 'process.env': {} },
})