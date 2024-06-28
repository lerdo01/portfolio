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

      keyFrames:  {
        logoanim: {
          '0%': { transform: 'rotateZ(0deg)' },
          '50%': { transform: 'rotateZ(30deg)' },
          '100%': { transform: 'rotateZ(-30deg)' },
        }
      },

      animation: {
        logoanim: 'logoanim 2s infinite'
      }
    },
  },
  plugins: [],
};
export default config;
