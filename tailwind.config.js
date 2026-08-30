/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0a0f',
          900: '#0e0e16',
          850: '#13131d',
          800: '#181824',
          700: '#22222f',
          600: '#2c2c3a',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          blue: '#5eb1ff',
          pink: '#ff6fb0',
          teal: '#4fd6c4',
          amber: '#f4b942',
          lime: '#9be15d',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(60% 60% at 50% 40%, rgba(139,92,246,0.25) 0%, rgba(10,10,15,0) 70%)',
        'card-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(139,92,246,0.45)',
        card: '0 8px 30px -12px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
