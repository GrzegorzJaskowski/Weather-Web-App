import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
