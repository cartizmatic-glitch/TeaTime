import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables (even if you don't use any)
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    
    // Remove ALL uses of process.env — Vite does not support them!
    define: {
      __API_KEY__: JSON.stringify('') // empty since you don't have one
    },

    server: {
      host: true
    }
  };
});
