import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 👈 importante para el switch dark/light
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
