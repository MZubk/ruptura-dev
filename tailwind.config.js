/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      utilities: {
        ".my-grid": {
          gridTemplateRows: "auto 1fr auto",
          gridTempleteColumns: "minmax(0,1fr)",
          minHeight: "100vh",
        },
      },
    },
  },
  plugins: [],
};
