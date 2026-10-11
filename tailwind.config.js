/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#F4F7F6',
          100: '#E3EFEC',
          200: '#C7DFD9',
          300: '#9BC4BA',
          400: '#6FA497',
          500: '#3D7D74',
          600: '#1F5C55', // Primary Deep Teal
          700: '#16443F', // Primary Deep Dark
          800: '#12332F',
          900: '#0F2522',
          950: '#071513',
        },
        canvas: {
          warm: '#F5F2EB',
          card: '#FFFFFF',
          border: '#E8E4DA',
        },
        surface: {
          bg: '#F5F2EB',
          card: '#FFFFFF',
          line: '#E8E4DA',
          text: '#12211F',
          muted: '#63706D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
