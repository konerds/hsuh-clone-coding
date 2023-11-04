import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()));
  return defineConfig({
    plugins: [react()],
    server: {
      proxy:
        mode === 'development'
          ? {}
          : process.env.VITE_IS_USE_PROXY === 'true'
          ? {
              '/api': {
                target: process.env.VITE_URL_API_SERVER,
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, ''),
              },
            }
          : {},
    },
  });
};
