/** @type {import('tailwindcss').Config} */
import animatePlugin from 'tailwindcss-animate';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
        50: '#F3F7EE',
        100: '#E5EED9',
        200: '#CDDFB7',
        300: '#A8C686',
        400: '#8FB368',
        500: '#71984A',
        600: '#577838',
        700: '#445D2E',
        800: '#394B29',
        900: '#324126',
        950: '#182211',
    },
        accent: {
          50: '#F6F5F0',
          100: '#E9E4D8',
          200: '#D5CAB3',
          300: '#BCA988',
          400: '#A98D66',
          500: '#9A7C58',
          600: '#84654A',
          700: '#6B4F3E',
          800: '#5B4438',
          900: '#4F3B34',
          950: '#2D1F1B',
        },
        gray: {
          50: '#F7F7F6',
          100: '#EDEEEA',
          200: '#D9DCD6',
          300: '#BBC0B5',
          400: '#A3A99C',
          500: '#747C6B',
          600: '#5D6455',
          700: '#4B5045',
          800: '#3D4239',
          900: '#333730',
          950: '#1A1C17',
        },
        yellow: {
          50: '#FFFBEB',
          100: '#FFFBEB',
          200: '#FFF1C2',
          300: '#FFE8A3',
          400: '#E8B931',
          500: '#E5A000',
          600: '#BF6A02',
          700: '#975102',
          800: '#682D03',
          900: '#522504',
          950: '#401B01',  
        },
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Libre Baskerville', 'serif'],
      },
    },

  },
  plugins: [animatePlugin],
}
