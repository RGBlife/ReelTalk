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
        "base-100": "#9673e8",
        primary: "#B996F7",
        neutral: "#F8F9F9",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: true,
    themes: [
      {
        daisyuiCustomTheme: {
          "base-100": "#F8F9F9",
          primary: "#B996F7",
          "primary-focus": "#9673e8",
          "primary-content": "#F8F9F9",
        },
      },
    ],
  },
} satisfies Config;
