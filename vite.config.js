import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Apple-clone", // Give the name of the Repository, then in the package.json -> "homepage": "https://<your-username>.github.io/<repository-name>"
  plugins: [react()],
});
