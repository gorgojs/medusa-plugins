import { SourceMap } from "magic-string"
import path from "node:path"
import { rm, writeFile } from "node:fs/promises"
import { GorgoVitePlugin } from "./types"
import { generateVirtualWidgetModule } from "./virtual-modules"
import { isResolvedVirtualModuleId, isVirtualModuleId, resolveVirtualId, VirtualModule, vmod } from "./vmod"
import { generateWidgetHash } from "./widgets"

enum Mode {
  PLUGIN = "plugin",
  APPLICATION = "application",
}

export const gorgoVitePlugin: GorgoVitePlugin = (options) => {
  const hashMap = new Map<VirtualModule, string>()
  const _sources = new Set<string>(options?.sources ?? [])

  const mode = options?.pluginMode ? Mode.PLUGIN : Mode.APPLICATION

  async function loadVirtualModule(
    config: ModuleConfig
  ): Promise<{ code: string; map: SourceMap } | null> {
    const hash = await config.hashGenerator(_sources)
    hashMap.set(config.hashKey, hash)

    return config.moduleGenerator(_sources)
  }

  // Function to generate the index.js file
  async function generatePluginEntryModule(
    sources: Set<string>
  ): Promise<string> {
    // Generate all the module content
    const widgetModule = await generateVirtualWidgetModule(sources, true)

    // Create the index.js content that re-exports everything
    return `
      // Auto-generated index file for Medusa Admin UI extensions
    ${widgetModule.code}

    export default widgetModule
    `
  }

  const pluginEntryFile = path.resolve(
    process.cwd(),
    "src/admin/__gorgo-admin-extensions__.js"
  )

  return {
    name: "@gorgo/medusa-vite-plugin",
    async buildStart() {
      console.log("Using @gorgo/medusa-vite-plugin")

      switch (mode) {
        case Mode.PLUGIN: {
          const code = await generatePluginEntryModule(_sources)
          await writeFile(pluginEntryFile, code, "utf-8")
          break
        }
        case Mode.APPLICATION: {
          break
        }
      }
    },
    async buildEnd() {
      switch (mode) {
        case Mode.PLUGIN: {
          try {
            await rm(pluginEntryFile, { force: true })
          } catch (error) {
            // Ignore the error if the file doesn't exist
          }
          break
        }
        case Mode.APPLICATION: {
          break
        }
      }
    },
    resolveId(id) {
      if (!isVirtualModuleId(id)) {
        return null
      }

      return resolveVirtualId(id)
    },
    async load(id) {
      if (!isResolvedVirtualModuleId(id)) {
        return null
      }
      const config = loadConfigs[id]

      if (!config) {
        return null
      }

      return loadVirtualModule(config)
    },
  }
}

type ModuleConfig = {
  hashGenerator: (sources: Set<string>) => Promise<string>
  moduleGenerator: (
    sources: Set<string>
  ) => Promise<{ code: string; map: SourceMap }>
  hashKey: VirtualModule
}

const loadConfigs: Record<string, ModuleConfig> = {
  [vmod.resolved.widget]: {
    hashGenerator: async (sources) => generateWidgetHash(sources),
    moduleGenerator: async (sources) => generateVirtualWidgetModule(sources),
    hashKey: vmod.virtual.widget,
  },
}
