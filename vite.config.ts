import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load all environment variables
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],

    // Expose your environment variable to the client
    define: {
      __API_KEY__: JSON.stringify(env.VITE_API_KEY)
    },

    server: {
      host: true
    }
  };
});
