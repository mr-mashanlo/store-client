// @ts-expect-error path
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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
