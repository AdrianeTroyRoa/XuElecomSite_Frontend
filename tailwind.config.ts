import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography"

export default <Partial<Config>>{
  plugins: [typography, daisyui],

  daisyui: {
    themes: [
      {
        xuelecom: {
          primary: "#0E0C40",
          secondary: "#303473",
          accent: "#F2D649",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
