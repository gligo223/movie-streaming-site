import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flex: {
        full: "0 0 100%",
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'input-light': '#ffffff', // Light mode input background
        'input-dark': '#1f2937', // Dark mode input background
        'input-border-light': '#d1d5db', // Light mode input border
        'input-border-dark': '#4b5563', // Dark mode input border
        'input-text-light': '#000000', // Light mode input text
        'input-text-dark': '#ffffff', // Dark mode input text
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),  require('tailwind-scrollbar-hide')],
} satisfies Config;