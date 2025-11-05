const typographyShared = {
  css: {
    pre: false,
    code: false,
    "pre code": false,
    "code::before": false,
    "code::after": false,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "buttons-accent": "var(--buttons-accent)",
      },
      fill: {
        dark: "#18181b",
      },
      colors: {
        dark: "#18181b",
      },
      backgroundImage: {
        "gorgo-text-gradient": "var(--gorgo-text-gradient)",
      },
      typography: {
        DEFAULT: typographyShared,
        sm: typographyShared,
        md: typographyShared,
        lg: typographyShared,
        xl: typographyShared,
        "2xl": typographyShared,
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-radix")(),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
};
