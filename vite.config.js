import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/api': {
        target: 'http://101.101.217.98:8080', // 백엔드 서버 URL
        changeOrigin: true, // 크로스 오리진 허용
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 백엔드 경로에서 제거
      },
    },
  },
});
