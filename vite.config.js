import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Redirect React Router paths that collide with source directories.
// Only intercept extensionless requests (browser navigation) — not module imports.
function spaRouteFallback() {
  const routes = [
    "/hautbehandlungen",
    "/permanent-make-up",
    "/über-uns",
    "/%C3%BCber-uns",
    "/kontakt",
  ];
  return {
    name: "spa-route-fallback",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split("?")[0];
        const decoded = decodeURIComponent(url);
        // Skip requests that have a file extension — those are module/asset fetches
        if (/\.[a-zA-Z0-9]+$/.test(url)) return next();
        const match = routes.some(
          (r) => url === r || decoded === r
        );
        if (match) {
          req.url = "/";
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), spaRouteFallback()],
});
