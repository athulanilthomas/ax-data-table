import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'tailwind-config': fileURLToPath(
        new URL('./tailwind.config.ts', import.meta.url)
      ),
    },
  },
  build: {
    commonjsOptions: {
      include: ['tailwind.config.ts', 'node_modules/**'],
    },
  },
  optimizeDeps: {
    include: ['tailwind-config'],
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
});
