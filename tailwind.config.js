/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1a2cff",
          purple: "#7c3aed",
          dark: "#0a0a0f",
          card: "#0f111a",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at top, rgba(26,44,255,0.25) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.15) 0%, transparent 60%)",
        "glow-blue":
          "radial-gradient(circle, rgba(26,44,255,0.4) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px rgba(26,44,255,0.3)",
        "glow-md": "0 0 30px rgba(26,44,255,0.4)",
        "glow-lg": "0 0 60px rgba(26,44,255,0.5)",
      },
    },
  },
  plugins: [],
};
