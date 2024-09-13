import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0079FF',
        black: '#2B3442',
        white: '#fefefe',
        heading: '#222731',
        white_dark: '#ffffff',
        background_dark: '#141D2F',
        gray_dark: '#1E2A47',
        darkGray: '#697C9A',
        darkBlue: '#4B6A9B',
        lightGray: '#F6F8FF',
      },
    },
  },
  plugins: [],
};
export default config;
