import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // permite acesso externo
    allowedHosts: [
      ".ngrok-free.app", // libera todos os subdomínios do ngrok
      "localhost",
      "127.0.0.1",
    ],
  },
});
