import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/biocad-test/',
  plugins: [
    react(),
    svgr(),
    // система импортов TypeScript (иначе он игнорирует baseUrl)
    tsconfigPaths({ root: './' })
  ],
  // The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0
  css: { preprocessorOptions: { scss: { api: 'modern-compiler' } } },
  // абсолютные импорты в SCSS-файлах
  resolve: { alias: { styles: '/src/styles' } }
});
