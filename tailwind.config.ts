import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // === COLORS ===
      colors: {
        // Semantic text colors
        "text-primary": "#171717",
        "text-secondary": "#6b7280",
        "text-tertiary": "#9ca3af",
        "text-muted": "#d1d5db",

        // Semantic border colors
        "border-default": "#f3f4f6",
        "border-hover": "#e5e7eb",
        "border-active": "#d1d5db",
        "border-strong": "#171717",

        // Semantic background colors
        "bg-page": "#ffffff",
        "bg-subtle": "#f9fafb",
        "bg-muted": "#f3f4f6",

        // Accent colors
        coral: "#E07A5F",
        "coral-hover": "#c96a52",

        // Gradient colors
        gradient: {
          red: "#ff6b6b",
          orange: "#ffa500",
          green: "#4ecdc4",
          blue: "#45b7d1",
          purple: "#a855f7",
        },
      },

      // === MAX WIDTHS ===
      maxWidth: {
        content: "56rem",
        "content-wide": "72rem",
        prose: "42rem",
        form: "36rem",
      },

      // === TRANSITIONS ===
      transitionDuration: {
        fast: "150ms",
        DEFAULT: "300ms",
      },

      // === BORDERS ===
      borderRadius: {
        card: "0.5rem",
        pill: "9999px",
      },

      // === FONT FAMILY ===
      fontFamily: {
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
