/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: '#0D0D0D',
          panel: '#171717',
          accent: '#F5B301',
          cta: '#FF6A00',
          text: '#F8F5EF',
          muted: '#A3A3A3',
          danger: '#D7261E',
        },
      },
      boxShadow: {
        glow: '0 0 70px rgba(255,106,0,0.16)',
      },
    },
  },
  plugins: [],
};
