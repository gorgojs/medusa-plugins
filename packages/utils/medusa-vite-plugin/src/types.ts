import { Plugin } from "vite"

export interface GorgoVitePluginOptions {
  sources?: string[]
  pluginMode?: boolean
}

export type GorgoVitePlugin = (config?: GorgoVitePluginOptions) => Plugin
