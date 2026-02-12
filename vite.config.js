import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true,
    host: true, // <-- this tells Vite to listen on all IPs (0.0.0.0)
    port: 3000,
  },
});
