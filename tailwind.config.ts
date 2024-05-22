import { transform } from "next/dist/build/swc";
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
      keyframes:{
        "rotate":{
          "0%":{transform:"rotate(0deg) translateX(100px) rotate(0deg)"},
          "100%":{transform:"rotate(360deg) translateX(100px) rotate(-360deg)"}
        }
      },
      animation:{
        "rotate":"rotate 10s linear infinite"
      }
    },
    
  },
  plugins: [],
};
export default config;
