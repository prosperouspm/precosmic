import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kimono: resolve(__dirname, 'src/kimono/index.html')
      }
    }
  }
}

