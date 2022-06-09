module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 0 0 3px #313131",
      "custom-dark": "1px 1px 3px #0a0c0e , -1px -1px 3px #14161c",
    },

    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
