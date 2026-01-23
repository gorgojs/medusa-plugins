import type { PluginOption } from "vite"

export function testPlugin(options?: { sources?: string[]}) {
  return {
    name: "test-plugin",
    buildStart() {
      console.log("Using test-plugin")
      console.log(options?.sources)
    }
  } as PluginOption
}
