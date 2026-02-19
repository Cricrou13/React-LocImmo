import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Si on est en train de déployer (build), on utilise le nom du repo
  // Sinon (en mode dev sur l'ordi), on utilise la racine "/"
  base: command === "build" ? "/React-LocImmo/" : "/",
}));
