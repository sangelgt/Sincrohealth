
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sincro-blue': '#137fec',
        'deep-navy': '#0A192F',
        'cream': '#FDFBF7',
        'taupe': '#8D8273',
      },
      borderRadius: {
        'organic': '60px',
      },
      boxShadow: {
        'soft-shadow': '0 20px 50px -12px rgba(141, 130, 115, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
