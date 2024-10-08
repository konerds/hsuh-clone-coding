import apiMocker from 'connect-api-mocker';
import { defineConfig, loadEnv, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';

let app: any;

if (process.env.NODE_ENV === 'development') {
  import('express').then((express) => {
    app = express.default();
    app.use('/api', apiMocker('mocks/api'));
  });
}

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  return defineConfig({
    base: mode === 'development' ? '/' : '/hsuh-clone-coding',
    plugins: [
      react(),
      {
        name: 'http-proxy-middleware',
        configureServer(serverDev: ViteDevServer) {
          if (mode === 'development' && !!app) {
            serverDev.middlewares.use(app);
          }
        },
      },
    ],
  });
};
