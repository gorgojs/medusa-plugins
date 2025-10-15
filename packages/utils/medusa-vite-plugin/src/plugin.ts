import { SourceMap } from "magic-string"
import { GorgoVitePlugin } from "./types"
import { generateVirtualWidgetModule } from "./virtual-modules"
import { isResolvedVirtualModuleId, isVirtualModuleId, resolveVirtualId, VirtualModule, vmod } from "./vmod"
import { generateWidgetHash } from "./widgets"

export const gorgoVitePlugin: GorgoVitePlugin = (options) => {
  const hashMap = new Map<VirtualModule, string>()
  const _sources = new Set<string>(options?.sources ?? [])

  async function loadVirtualModule(
    config: ModuleConfig
  ): Promise<{ code: string; map: SourceMap } | null> {
    const hash = await config.hashGenerator(_sources)
    hashMap.set(config.hashKey, hash)

    return config.moduleGenerator(_sources)
  }

  return {
    name: "@gorgo/medusa-vite-plugin",
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
