/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '440px',
      },
      colors: {
        bgMain: 'var(--bg-main)',
        bgCard: 'var(--bg-card)',
        bgInput: 'var(--bg-input)',
        dim: 'var(--text-dim)',
        accent: 'var(--text-accent)',
      },
      maxWidth: {
        'folio': '700px',
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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
