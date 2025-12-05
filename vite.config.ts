import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables (even if you don't use any)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    define: {
      // No API key needed — leave empty
      __API_KEY__: JSON.stringify('')
    },
    server: {
      host: true
    }
  };
});
