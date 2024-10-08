import apiMocker from 'connect-api-mocker';
import { defineConfig, loadEnv, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  return defineConfig({
    base: mode === 'development' ? '/' : '/hsuh-clone-coding',
    plugins: [
      react(),
      {
        name: 'http-proxy-middleware',
        async configureServer(serverDev: ViteDevServer) {
          if (mode === 'development') {
            const app = (await import('express')).default();
            app.use('/api', apiMocker('mocks/api'));
            serverDev.middlewares.use(app);
          }
        },
      },
    ],
  });
};
