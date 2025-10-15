const WIDGET_VIRTUAL_MODULE = "virtual:gorgo/widgets"

const RESOLVED_WIDGET_VIRTUAL_MODULE = `\0${WIDGET_VIRTUAL_MODULE}`

const VIRTUAL_MODULES = [
  WIDGET_VIRTUAL_MODULE,
] as const

const RESOLVED_VIRTUAL_MODULES = [
  RESOLVED_WIDGET_VIRTUAL_MODULE,
] as const

export function resolveVirtualId(id: string) {
  return `\0${id}`
}

export function isVirtualModuleId(id: string): id is VirtualModule {
  return VIRTUAL_MODULES.includes(id as VirtualModule)
}

export function isResolvedVirtualModuleId(
  id: string
): id is (typeof RESOLVED_VIRTUAL_MODULES)[number] {
  return RESOLVED_VIRTUAL_MODULES.includes(
    id as (typeof RESOLVED_VIRTUAL_MODULES)[number]
  )
}

export type VirtualModule =
  | typeof WIDGET_VIRTUAL_MODULE

const resolvedVirtualModuleIds = {
  widget: RESOLVED_WIDGET_VIRTUAL_MODULE,
} as const

const virtualModuleIds = {
  widget: WIDGET_VIRTUAL_MODULE,
} as const

export const vmod = {
  resolved: resolvedVirtualModuleIds,
  virtual: virtualModuleIds,
}
