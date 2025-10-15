import * as Vite from "vite"

export default Vite.defineConfig({
  build: {
    rollupOptions: {
      external: [
        "virtual:gorgo/widgets",
        "react",
        "react-dom",
        "react-router-dom",
        "@tanstack/react-query",
        "@medusajs/admin-sdk",
        "@medusajs/ui",
        "@medusajs/icons"
      ]
    }
  }
})
