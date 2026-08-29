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
        monograph: {
          bg: "#0A0B0D",
          paper: "#F4F4F2",
          muted: "#A0A09E",
          caption: "#8A8A88",
          rule: "#2A2B2E",
        },
        cloud: {
          aws: "#FF9900",
          azure: "#0078D4",
          gcp: "#34A853",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem,12vw,14rem)", { lineHeight: "0.85", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2.5rem,6vw,6rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem,4vw,3.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "caret-blink": "caret-blink 1s step-end infinite",
      },
      keyframes: {
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
