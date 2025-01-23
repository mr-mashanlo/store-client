/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      'sm': '500px',
      'md': '769px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    }
  }
};