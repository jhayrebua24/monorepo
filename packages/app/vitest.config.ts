import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()], // Add React plugin if needed
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    server: {
      deps: {
        inline: ["@acme/common", "@acme/user"],
      },
    },
  },
});
