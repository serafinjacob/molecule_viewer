import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        DEFAULT: "1px 1px 2px rgba(0, 0, 0, 0.6)",
        xs: "1px 1px 2px rgba(0, 0, 0, 0.6)",
        sm: "1px 1px 2px rgba(0, 0, 0, 0.6)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.6)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.6)",
        "2xl": "5px 5px 10px rgba(0, 0, 0, 0.6)",
      },
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
