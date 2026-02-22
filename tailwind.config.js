/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        bgMain: 'var(--bg-main)',
        bgCard: 'var(--bg-card)',
        bgInput: 'var(--bg-input)',
        dim: 'var(--text-dim)',
        accent: 'var(--text-accent)',
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
        'subtle': 'var(--border-subtle)',
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
