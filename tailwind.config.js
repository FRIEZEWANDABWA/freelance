/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f6',
          100: '#efe9dd',
          200: '#e5dfd0',
          300: '#d8ceb8',
          400: '#c2b280', // Taupe/Brown
          500: '#b09e6f',
          600: '#9c8a5e',
          700: '#7d6e4b',
          800: '#4d4a47', // Muted Grey Brown
          900: '#1c1c1c', // Charcoal Black
        },
        secondary: {
          100: '#f1efec',
          200: '#e3dfd9',
          300: '#d5cfc6',
          400: '#c7bfb3',
          500: '#b9afa0',
          600: '#a69f8d',
          700: '#4d4a47',
        },
        accent: {
          100: '#f7f5f2',
          200: '#efe9dd', // Pale Ivory
          300: '#e5dfd0',
          400: '#d8ceb8',
          500: '#c2b280', // Taupe/Brown
          600: '#9c8a5e',
          700: '#7d6e4b',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      },
    },
  },
  plugins: [],
}