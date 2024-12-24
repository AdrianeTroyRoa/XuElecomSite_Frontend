import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default <Partial<Config>>{
  plugins: [daisyui],

  daisyui: {
    themes: [false],
  },
};
