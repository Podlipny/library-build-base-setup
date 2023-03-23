/* eslint-disable import/no-extraneous-dependencies */
import path, { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  manualChunks: (id) => path.parse(id).name,
  build: {
    lib: {
      // entry: resolve(__dirname, 'src/index.ts'),
      name: 'ViteJs Library Base Setup',
      formats: ['es', 'cjs'],
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        'components/button': resolve(__dirname, 'src/components/button/button.tsx'),
        'components/header': resolve(__dirname, 'src/components/header/header.tsx'),
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'react',
        },
      },
    },
  },
})
