import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    manifest: false,
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // entryFileNames: `assets/[name].${timestamp}.js`,
        // chunkFileNames: `assets/[name].${timestamp}.js`,
        // assetFileNames: `assets/[name].${timestamp}.[ext]`
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  },
  server: {
    open: true,// 是否自动在浏览器打开
    https: false,// 是否开启 https
    ssr: false,// 服务端渲染
    hot: true,
    outDir: 'target',
    host: "0.0.0.0",
    port: 1011
  },
})
