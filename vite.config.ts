import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // This ensures your assets load correctly on GitHub Pages
  base: '/my-portifoliopro/', 
  
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  
  plugins: [react()],
  
  resolve: {
    alias: {
      // Keeps your '@' alias pointing to the root directory
      '@': path.resolve(__dirname, '.'),
    },
  },
});