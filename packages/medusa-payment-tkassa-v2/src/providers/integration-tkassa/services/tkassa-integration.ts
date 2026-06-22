import { AbstractIntegrationProvider, defineIntegration, z } from "@gorgo/medusa-integration"
import type {
  IntegrationDescriptorInput,
  TestConnectionContext,
  TestConnectionResult,
} from "@gorgo/medusa-integration"
import { TKassa } from "t-kassa-api"

const schema = z.object({
  terminalKey: z.string().min(1).meta({
    section: "credentials", control: "text",
    label: { en: "Terminal key", ru: "Терминал" },
  }),
  password: z.string().min(1).meta({
    section: "credentials", control: "secret", secret: true,
    label: { en: "Password", ru: "Пароль" },
  }),
  capture: z.boolean().default(true).meta({
    section: "behavior", control: "switch",
    label: { en: "Auto-capture", ru: "Автосписание" },
  }),
  useReceipt: z.boolean().default(false).meta({
    section: "receipt", control: "switch",
    label: { en: "Send receipts", ru: "Отправлять чеки" },
  }),
  ffdVersion: z.enum(["1.2", "1.05"]).optional().meta({
    section: "receipt", control: "select",
    label: { en: "FFD version", ru: "Версия ФФД" },
  }),
  taxation: z.enum(["osn", "usn_income", "usn_income_outcome", "esn", "patent"]).optional().meta({
    section: "receipt", control: "select",
    label: { en: "Taxation", ru: "Налогообложение" },
  }),
  taxItemDefault: z
    .enum(["none", "vat0", "vat5", "vat7", "vat10", "vat20", "vat105", "vat107", "vat110", "vat120"]).optional()
    .meta({
      section: "receipt",
      control: "select",
      label: {
        en: "Default item tax",
        ru: "Налог товара"
      },
    }),
  taxShippingDefault: z.enum(["none", "vat0", "vat5", "vat7", "vat10", "vat20", "vat105", "vat107", "vat110", "vat120"]).optional().meta({
    section: "receipt", control: "select",
    label: { en: "Default shipping tax", ru: "Налог доставки" },
  }),
}).superRefine((val, ctx) => {
  // Receipts require the full FFD configuration. Mirrors the rule that used to live in
  // the payment provider's `validateOptions`, now that settings are validated here on
  // write. Only enforced when receipts are actually enabled (`useReceipt` truthy).
  if (!val.useReceipt) return
  for (const field of ["ffdVersion", "taxation", "taxItemDefault", "taxShippingDefault"] as const) {
    if (val[field] == null) {
      ctx.addIssue({
        code: "custom",
        path: [field],
        message: `\`${field}\` is required when receipts are enabled`,
      })
    }
  }
})

export type TKassaSettings = z.infer<typeof schema>

const descriptor = defineIntegration({
  module: "payment",
  schemaVersion: 1,
  displayName: { en: "T-Kassa", ru: "Т-Касса" },
  description: { en: "Tinkoff/T-Bank payment gateway", ru: "Платёжный шлюз Т-Банк" },
  supportsMultipleInstances: true,
  schema,
  sections: [
    { id: "credentials", title: { en: "Credentials", ru: "Доступы" } },
    { id: "behavior", title: { en: "Behavior", ru: "Поведение" } },
    { id: "receipt", title: { en: "Receipt", ru: "Чеки" } },
  ],
})

/**
 * Integration-provider for T-Kassa: declares the plugin's settings contract to the
 * `integration` module. `static identifier` becomes the descriptor's `pluginId`, so
 * settings are stored/resolved under `plugin_id = "tkassa"`.
 *
 * Payment behaviour lives in the separate `payment-tkassa` provider (payment module),
 * which reads the resolved settings via `getResolvedSettings("tkassa")`.
 */
export class TkassaIntegrationProvider extends AbstractIntegrationProvider {
  static identifier = "tkassa"

  getDescriptor(): IntegrationDescriptorInput {
    return descriptor
  }

  /**
   * Verify the terminal credentials against T-Kassa. The SDK only throws on network/HTTP
   * failures and returns `{ Success, Message }` for app-level errors, so a structured
   * response to this signed (read-only) GetState means terminal + signature were accepted;
   * a token/terminal error means the credentials are wrong. Never throws (returns a result).
   */
  async testConnection({ settings }: TestConnectionContext): Promise<TestConnectionResult> {
    const s = settings as Partial<TKassaSettings>
    if (!s.terminalKey || !s.password) {
      return { status: "fail", message: "Terminal key or password is missing" }
    }
    try {
      const client = new TKassa(s.terminalKey, s.password, { server: "https://securepay.tinkoff.ru" })
      const res = (await client.getState({ PaymentId: "0" } as any)) as Record<string, any>
      if (res?.Success === true) {
        return { status: "ok" }
      }
      const message = `${res?.Message ?? ""} ${res?.Details ?? ""}`.trim()
      // Token/terminal errors mean bad credentials; anything else (e.g. "payment not
      // found" for the sentinel id) means we authenticated successfully.
      if (/token|подпис|terminal|термина/i.test(message)) {
        return { status: "fail", message: res?.Message || "Invalid credentials" }
      }
      return { status: "ok", message: message || "Reachable" }
    } catch (e: any) {
      return { status: "fail", message: e?.message ?? "Connection failed" }
    }
  }
}

export default TkassaIntegrationProvider
