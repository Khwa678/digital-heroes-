/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adding the Emerald accents for that "Hero" feel
        emerald: {
          500: '#10b981',
          400: '#34d399',
        },
        zinc: {
          900: '#18181b',
          800: '#27272a',
        }
      },
    },
  },
  plugins: [],
}