import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react(), dts({
    tsconfigPath: '../../tsconfig.build.json'
  })],
  build: {
    outDir: 'dist/es',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'ysj-element',
      fileName: 'index',
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react"],
      output: {}
    }
  }
})
