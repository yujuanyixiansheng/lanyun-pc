import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 8080, // 指定服务器端口
    hmr: true, // 开启热更新
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false, // 是否开启 https
  },
})
