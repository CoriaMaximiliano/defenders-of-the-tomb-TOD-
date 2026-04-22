import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages (repo project): https://<user>.github.io/defenders-of-the-tomb-TOD-/
const repoBase = '/defenders-of-the-tomb-TOD-/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));