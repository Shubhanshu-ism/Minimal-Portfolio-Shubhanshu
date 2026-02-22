/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: '#161616',
        bgCard: '#212121',
        bgInput: '#1a1a1a',
        dim: '#A0A0A0',
        accent: '#FFFFFF',
      },
      maxWidth: {
        'folio': '560px',
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
      },
      borderWidth: {
        'DEFAULT': '1px',
      },
      borderColor: {
        'subtle': 'rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter Display', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
