const typographyShared = {
  css: {
    pre: false,
    code: false,
    "pre code": false,
    "code::before": false,
    "code::after": false,
  },
};

// Build docs_* prefixed spacing (mirrors Medusa docs tailwind setup)
const baseSpacing = {
  px: "1px",
  0: "0px",
  0.125: "2px",
  0.25: "4px",
  0.4: "7px",
  0.5: "8px",
  0.75: "12px",
  1: "16px",
  1.5: "24px",
  2: "32px",
  2.5: "40px",
  3: "48px",
  4: "64px",
  5: "80px",
  6: "96px",
  7: "112px",
  8: "128px",
}
const docsSpacing = {}
Object.entries(baseSpacing).forEach(([key, value]) => {
  docsSpacing[`docs_${key}`] = value
})

// Build docs_* prefixed border radius
const baseRadius = {
  xxs: "2px",
  xs: "4px",
  sm: "6px",
  DEFAULT: "8px",
  md: "8px",
  lg: "12px",
  xl: "16px",
}
const docsRadius = {}
Object.entries(baseRadius).forEach(([key, value]) => {
  docsRadius[`docs_${key}`] = value
})

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
        "elevation-card-rest":
          "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
        "elevation-card-rest-dark":
          "0px -1px 0px 0px rgba(255, 255, 255, 0.06), 0px 0px 0px 1px rgba(255, 255, 255, 0.06), 0px 0px 0px 1px #27272A, 0px 1px 2px 0px rgba(0, 0, 0, 0.32), 0px 2px 4px 0px rgba(0, 0, 0, 0.32)",
        "elevation-tooltip":
          "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px 0px rgba(0, 0, 0, 0.08), 0px 4px 8px 0px rgba(0, 0, 0, 0.08)",
        "elevation-tooltip-dark":
          "0px -1px 0px 0px rgba(255, 255, 255, 0.04), 0px 0px 0px 1px rgba(255, 255, 255, 0.10), 0px 2px 4px 0px rgba(0, 0, 0, 0.32), 0px 4px 8px 0px rgba(0, 0, 0, 0.32)",
      },
      fill: {
        dark: "#18181b",
      },
      colors: {
        dark: "#18181b",
        medusa: {
          bg: {
            subtle: {
              DEFAULT: "var(--docs-bg-subtle)",
              hover: "var(--docs-bg-subtle-hover)",
              pressed: "var(--docs-bg-subtle-pressed)",
            },
            base: {
              DEFAULT: "var(--docs-bg-base)",
              hover: "var(--docs-bg-base-hover)",
              pressed: "var(--docs-bg-base-pressed)",
            },
            component: {
              DEFAULT: "var(--docs-bg-component)",
              hover: "var(--docs-bg-component-hover)",
              pressed: "var(--docs-bg-component-pressed)",
            },
            "switch-off": {
              DEFAULT: "var(--docs-bg-switch-off)",
              hover: "var(--docs-bg-switch-off-hover)",
            },
            highlight: {
              DEFAULT: "var(--docs-bg-highlight)",
            },
          },
          fg: {
            base: "var(--docs-fg-base)",
            subtle: "var(--docs-fg-subtle)",
            muted: "var(--docs-fg-muted)",
            disabled: "var(--docs-fg-disabled)",
            interactive: {
              DEFAULT: "var(--docs-fg-interactive)",
              hover: "var(--docs-fg-interactive-hover)",
            },
          },
          border: {
            base: "var(--docs-border-base)",
            strong: "var(--docs-border-strong)",
          },
          tag: {
            neutral: {
              bg: {
                DEFAULT: "var(--docs-tags-neutral-bg)",
                hover: "var(--docs-tags-neutral-bg-hover)",
              },
              text: "var(--docs-tags-neutral-text)",
              icon: "var(--docs-tags-neutral-icon)",
              border: "var(--docs-tags-neutral-border)",
            },
            blue: {
              bg: { DEFAULT: "var(--docs-tags-blue-bg)" },
              text: "var(--docs-tags-blue-text)",
              icon: "var(--docs-tags-blue-icon)",
              border: "var(--docs-tags-blue-border)",
            },
            green: {
              bg: { DEFAULT: "var(--docs-tags-green-bg)" },
              text: "var(--docs-tags-green-text)",
              icon: "var(--docs-tags-green-icon)",
              border: "var(--docs-tags-green-border)",
            },
            orange: {
              bg: { DEFAULT: "var(--docs-tags-orange-bg)" },
              text: "var(--docs-tags-orange-text)",
              icon: "var(--docs-tags-orange-icon)",
              border: "var(--docs-tags-orange-border)",
            },
            red: {
              bg: { DEFAULT: "var(--docs-tags-red-bg)" },
              text: "var(--docs-tags-red-text)",
              icon: "var(--docs-tags-red-icon)",
              border: "var(--docs-tags-red-border)",
            },
            purple: {
              bg: { DEFAULT: "var(--docs-tags-purple-bg)" },
              text: "var(--docs-tags-purple-text)",
              icon: "var(--docs-tags-purple-icon)",
              border: "var(--docs-tags-purple-border)",
            },
          },
          contrast: {
            bg: {
              subtle: "var(--docs-contrast-bg-subtle)",
            },
            fg: {
              primary: "var(--docs-contrast-fg-primary)",
              secondary: "var(--docs-contrast-fg-secondary)",
            },
            border: {
              bot: "var(--docs-contrast-border-bot)",
            },
          },
        },
      },
      spacing: docsSpacing,
      borderRadius: docsRadius,
      fontSize: {
        "compact-medium-plus": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "compact-medium": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "compact-small-plus": ["13px", { lineHeight: "20px", fontWeight: "500" }],
        "compact-small": ["13px", { lineHeight: "20px", fontWeight: "400" }],
        "compact-x-small-plus": ["12px", { lineHeight: "20px", fontWeight: "500" }],
        "compact-x-small": ["12px", { lineHeight: "20px", fontWeight: "400" }],
        "code-label": ["12px", { lineHeight: "15px", fontWeight: "500" }],
        "code-body": ["12px", { lineHeight: "150%", fontWeight: "400" }],
      },
      fontFamily: {
        monospace: [
          "var(--font-roboto-mono, Roboto Mono)",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
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
      keyframes: {
        flash: {
          "0%": { backgroundColor: "transparent" },
          "50%": { backgroundColor: "var(--animation-color)" },
          "100%": { backgroundColor: "transparent" },
        },
      },
      animation: {
        flash: "flash 1500ms 1",
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
