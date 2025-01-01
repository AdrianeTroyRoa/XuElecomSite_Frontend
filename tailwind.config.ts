import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default <Partial<Config>>{
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        xuelecom: {
          primary: "#0E0C40",
          secondary: "#303473",
          accent: "#F2D649",
          neutral: "#F2AC29",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
