import * as Vite from "vite"

export default Vite.defineConfig({
  build: {
    rollupOptions: {
      external: ["virtual:gorgo/widgets"]
    }
  }
})
