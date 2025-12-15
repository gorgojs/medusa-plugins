const KEY = "ym_marketplaces_v1"

export type Marketplace = { id: string; title: string; provider: string }

const read = (): Marketplace[] => JSON.parse(localStorage.getItem(KEY) || "[]")
const write = (items: Marketplace[]) => localStorage.setItem(KEY, JSON.stringify(items))

export const marketplacesData = {
  list: () => read(),
  get: (id: string) => read().find((m) => m.id === id),
  create: (data: Omit<Marketplace, "id">) => {
    const item = { id: crypto.randomUUID(), ...data }
    write([item, ...read()])
    return item
  },
  update: (id: string, patch: Partial<Omit<Marketplace, "id">>) => {
    const items = read().map((m) => (m.id === id ? { ...m, ...patch } : m))
    write(items)
    return items.find((m) => m.id === id)!
  },
}
