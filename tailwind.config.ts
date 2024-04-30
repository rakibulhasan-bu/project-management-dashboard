import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A35",
        bgWhite: "#FAFAFA",
        mainColor: "#D06F0E",
        textDark: "#282829",
        textDarkBlue: "#27304B",
        textSecondary: "#4E4F50",
        bgSecondary: "#3C3C3D",
        bgred: "#DA2B2F",
        success: "#15B756",
        textBlack: "#1B1818",
        textBlueBlack: "#1D2939",
        textDarkGrey: "#403C3C",
        textGreyBlack: "#312F2F",
        textGrey: "#645D5D",
        borderColor: "#D5D8DB",
        red: "#E11C1B",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
