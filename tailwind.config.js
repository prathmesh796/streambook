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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark_blue: "#011627",
        rusty_red: "#FF0022",
        cyan: "#41EAD4",
        off_white: "#FDFFFC",
        beetroot: "#B91372",
      },
    },
  },
  plugins: [],
};
