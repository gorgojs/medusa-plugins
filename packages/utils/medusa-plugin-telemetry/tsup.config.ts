import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    platform: "node",
    target: "node20",
    external: ["react", "react-dom"],
    tsconfig: "tsconfig.json",
  },
  {
    entry: { "react/index": "src/react/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    platform: "browser",
    target: "es2020",
    external: ["react", "react-dom"],
    tsconfig: "tsconfig.json",
    esbuildOptions(options) {
      options.jsx = "automatic"
    },
  },
])
