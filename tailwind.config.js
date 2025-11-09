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
        'hawkings-black': '#000000',
        'hawkings-charcoal': '#1a1a1a',
        'hawkings-gray': '#666666',
        'hawkings-light-gray': '#999999',
        'hawkings-border': '#e0e0e0',
        'hawkings-bg': '#ffffff',
        'hawkings-bg-alt': '#fafafa',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
        'wide': '0.1em',
      },
    },
  },
  plugins: [],
}
