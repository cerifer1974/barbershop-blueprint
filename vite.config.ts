// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { createServer, type Plugin } from "vite";
import path from "node:path";

let validated = false;

/** Bloqueia o build de produção se barber.config.ts tiver problemas. */
function validateBarberConfigPlugin(): Plugin {
  return {
    name: "validate-barber-config",
    apply: "build",
    async buildStart() {
      if (validated) return;
      validated = true;
      const server = await createServer({
        configFile: false,
        logLevel: "silent",
        server: { middlewareMode: true, hmr: false },
        resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
      });
      try {
        const cfg = await server.ssrLoadModule("/src/config/barber.config.ts");
        const val = await server.ssrLoadModule("/src/config/validate-config.ts");
        const issues = val.validateBarberConfig(cfg.barberConfig) as { path: string; message: string }[];
        if (issues.length) {
          const list = issues.map((i) => `  - ${i.path}: ${i.message}`).join("\n");
          throw new Error(`barber.config.ts inválido:\n${list}`);
        }
      } finally {
        await server.close();
      }
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: { plugins: [validateBarberConfigPlugin()] },
});
