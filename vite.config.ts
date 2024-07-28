import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-expect-error path
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],
  resolve: {
    alias: {
      // @ts-expect-error dirname
      '@': path.resolve( __dirname, './src/' )
    }
  }
} );
