import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Unocss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
export default defineConfig({
  plugins: [
    solidPlugin(),
    Unocss({
      presets: [presetIcons()],
      shortcuts: {
        'icon-item':
          'inline-flex items-center px-3 py-2 mt-2 mr-2 rounded-md text-dark dark:text-white bg-gray-50 transition-colors decoration-none hover:bg-gray-700 dark:hover:text-gray-900 hover:text-white dark:bg-gray-50/10',
        'project-item':
          'px-4 py-3 rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20',
        'flex-center': 'flex items-center justify-center',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
