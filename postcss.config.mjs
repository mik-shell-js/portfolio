import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss, // Ensure it loads Tailwind correctly
    autoprefixer(),
  ],
};