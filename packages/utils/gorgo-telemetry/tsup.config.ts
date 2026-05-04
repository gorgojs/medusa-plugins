import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    platform: "node",
    target: "node20",
    tsconfig: "tsconfig.json",
  }
])
