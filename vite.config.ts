import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import postcssNested from 'postcss-nested'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    // https://windicss.org/integrations/vite.html
    WindiCSS(),
    // https://github.com/antfu/unplugin-icons
    Icons({ autoInstall: true, compiler: 'vue3' }),
  ],
  css: {
    postcss: {
      plugins: [postcssNested],
    },
  },
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, './src')}/`,
    },
  },
})
