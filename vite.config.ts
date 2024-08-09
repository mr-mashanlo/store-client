import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error path

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
