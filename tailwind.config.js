/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 8px 12px rgba(1, 53, 128, 0.1)", // Your custom shadow
      },
    },
  },
  plugins: [],
}