import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        "open-sauce-one": ["Open Sauce One", "sans-serif"],
        bitter: ["Bitter", "serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        sacramento: ["Sacramento", "sans-serif"],
      },
    },
  },
};
