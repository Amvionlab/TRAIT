export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // Explicitly set to 'class' for dark mode toggling
  theme: {
    extend: {
      keyframes: {
        'pulse-light': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.7)' },
        },
      },
      animation: {
        'pulse-light': 'pulse-light 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropFilter: {
        none: "none",
        blur: "blur(30px)",
      },
      borderColor: ["focus"],
      ringColor: ["focus"],
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        sui: ["system-ui", "sans-serif"]
      },
      colors: {
        glass: "rgba(240, 245, 255, 0.7)",
        bgGray: "#2F2F2F",
        bgBlack: "#1F1F1F",
        blu: "#004080",
        name: "#B1B1B1",
        flo: "#E33824",
        prime: "#1e4276",
        second: "#ebeef5",
        box: "#ffffff",
        label: "#172554",
        login: "#ffffff",
        gcolor: "#ab01ea",
        scolor: "rgba(0, 66, 255, 0.08)",
      }
    }
  },
  plugins: [],
}