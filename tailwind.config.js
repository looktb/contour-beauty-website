module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./{startseite,hautbehandlungen,permanent-make-up,über-uns}/**/*.{js,ts,jsx,tsx}",
    "./kontakt-/-termin-buchen/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        "cb-cream": "#FAF8F4",
        "cb-charcoal": "#1C1917",
        "cb-sand": "#C9A87C",
        "cb-blush": "#E8D0C4",
        "cb-linen": "#F0EBE3",
        "cb-dark": "#0D0B09",
        "cb-warm": "#8B7355",
        "cb-muted": "#6B645C",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Jost", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.9s ease forwards",
        "fade-in": "fadeIn 1.2s ease forwards",
        "slide-in": "slideIn 0.8s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
};
