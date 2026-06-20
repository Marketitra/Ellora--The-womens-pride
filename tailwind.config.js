/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f8f4ef",
        "cream-d": "#efe7df",
        "sec-light": "#faf7f3",
        "sec-alt": "#f2ebe4",
        ink: "#2d2520",
        "ink-s": "#5e554d",
        muted: "#9b9188",
        border: "#ddd2c7",
        red: "#b47c6a",
        "red-h": "#9d6756",
        "red-l": "#f5ece8",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
        accent: ["var(--font-playfair)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 2px 24px rgba(0,0,0,0.06)",
        lift: "0 18px 40px rgba(0,0,0,0.08)",
        red: "0 12px 30px rgba(180,124,106,0.28)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};
