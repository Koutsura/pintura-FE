import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias '@' untuk folder 'src'
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'https://pintura.decadev.tech:5000', // URL backend dari .env atau fallback ke localhost
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    rollupOptions: {
      external: [],
    },
  },
});
