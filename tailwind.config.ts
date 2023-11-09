import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        hambak: ["SF_HambakSnow", "sans-serif"],
        scoreLight: ["S-CoreDream-3Light", "sans-serif"],
        scoreRegular: ["S-CoreDream-4Regular", "sans-serif"],
        yeseva: ["Yeseva One", "sans-serif"],
        shrik: ["Shrikhand", "sans-serif"],
        puraddak: ["PuradakGentleGothicR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
