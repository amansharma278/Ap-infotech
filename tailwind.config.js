/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        leftRight: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(40px)" },   // move right
          "50%": { transform: "translateX(0)" },      // back to center
          "75%": { transform: "translateX(-40px)" },  // move left
          "100%": { transform: "translateX(0)" },     // back to center
        },
      },
      animation: {
        scroll: "scroll 8s linear infinite",
        leftRight: "leftRight 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
