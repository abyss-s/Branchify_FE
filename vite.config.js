import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const serverPort = Number(env.VITE_SERVER_DOMAIN_PORT);

  return {
    base: '/',
    plugins: [react()],
    server: {
      port: serverPort, // 서버 포트 설정
      proxy: {
        '/api': {
          target: env.VITE_SERVER_DOMAIN_PORT, // 백엔드 서버 URL
          changeOrigin: true, // 크로스 오리진 허용
          rewrite: (path) => path.replace(/^\/api/, ''), // '/api'를 백엔드 경로에서 제거
        },
      },
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  };
});