import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
    daisyui,
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'dracula'],
    darkTheme: false,
  },
};
