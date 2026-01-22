import type { PluginOption } from "vite"

export function testPlugin() {
  return {
    name: "test-plugin",
    buildStart() {
      console.log("Using test-plugin")
    }
  } as PluginOption
}
