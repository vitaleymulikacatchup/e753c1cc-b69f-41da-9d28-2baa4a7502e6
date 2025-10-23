/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'sinoptik-blue': '#2B7CE9',
        'sinoptik-dark-blue': '#1E5BB8',
        'sinoptik-light-blue': '#E8F4FD',
        'sinoptik-gray': '#F5F5F5',
        'sinoptik-text': '#333333',
        'sinoptik-light-text': '#666666',
        'sinoptik-border': '#E0E0E0',
        'sinoptik-yellow': '#FFD700',
        'sinoptik-orange': '#FF8C00'
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif']
      },
      fontSize: {
        'xs': '11px',
        'sm': '12px',
        'base': '13px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px'
      }
    },
  },
  plugins: [],
}