import { setupServer } from "msw/node"
import TkassaService from "../../services/tkassa"

export const TKASSA_BASE_URL = "https://securepay.tinkoff.ru"

export const server = setupServer()

export function makeLogger() {
  const noop = () => {}
  return new Proxy({} as any, {
    get: () => noop,
  })
}

/**
 * Mock of the `integration` module service as seen from the payment provider's
 * container — `resolveSettings()` reads options via `getResolvedOptions()`.
 */
export function makeIntegration(options: Record<string, any>) {
  return {
    getResolvedOptions: async () => ({
      options,
      meta: {
        provider_id: "int_tkassa",
        module: "payment",
        is_enabled: true,
      },
    }),
  }
}

/**
 * Build a T-Kassa payment provider whose settings resolve from a mock `integration`
 * module (the single source of truth after the config-options fallback was removed).
 */
export function makeProvider(settings: Record<string, any> = {}): any {
  const container = { logger: makeLogger(), integration: makeIntegration(settings) }
  return new (TkassaService as any)(container, settings)
}

export type CapturedRequest = {
  url: string
  method: string
  body: any
}

export async function captureRequest(request: Request): Promise<CapturedRequest> {
  const cloned = request.clone()
  let body: any = null
  try {
    body = await cloned.json()
  } catch {
    body = await cloned.text()
  }
  return { url: cloned.url, method: cloned.method, body }
}
