/// <reference types="vitest" />

import angular from "@analogjs/vite-plugin-angular";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: angular(),
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"],
    },
    resolve: {
      alias: {
        "@app": "/src/app",
        "@components": "/src/components",
        "@data": "/src/data",
        "@examples": "/src/examples",
        "@server": "/src/server",
        "@services": "/src/services",
        "@shared": "/src/shared",
      },
    },
    define: {
      "import.meta.vitest": mode !== "production",
    },
  };
});
