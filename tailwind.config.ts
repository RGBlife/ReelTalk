import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: "#B996F7",
        neutral: "#F8F9F9",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    themes: [
      {
        daisyuiCustomTheme: {
          primary: "#B996F7",
          "primary-focus": "#9673e8",
          "primary-content": "#ffffff",
        },
      },
      "light",
      "dark",
    ],
  },
} satisfies Config;
