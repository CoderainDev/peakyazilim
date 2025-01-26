import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00ff9d',
        secondary: '#0ea5e9',
        accent: '#6366f1',
        dark: '#0a0a0a',
        'dark-secondary': '#1a1a1a',
      },
      animation: {
        'text-gradient': 'text-gradient 1.5s linear infinite',
        'matrix-bg': 'matrix-bg 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'code-slide': 'code-slide 20s linear infinite',
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config