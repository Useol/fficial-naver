import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fficial-naver/',
  build: {
    outDir: 'docs', // 빌드 결과물을 docs 폴더로 지정
  },
})