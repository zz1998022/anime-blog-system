import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 6969,
    open: '/'
  },
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // Ant Design Vue 自訂主題
          'primary-color': '#ff0072',
          'border-radius-base': '15px'
        },
        javascriptEnabled: true
      }
    }
  }
})
