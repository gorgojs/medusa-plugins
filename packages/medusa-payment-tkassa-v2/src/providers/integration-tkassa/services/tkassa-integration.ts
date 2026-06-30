import { AbstractIntegrationProvider, defineIntegration, z } from "@gorgo/medusa-integration"
import type {
  IntegrationDescriptorInput,
  TestConnectionContext,
  TestConnectionResult,
} from "@gorgo/medusa-integration"
import { TKassa } from "t-kassa-api"

const TAX = ["none", "vat0", "vat5", "vat7", "vat10", "vat20", "vat105", "vat107", "vat110", "vat120"] as const

const descriptor = defineIntegration({
  module: "payment",
  schemaVersion: 1,
  displayName: { en: "T-Kassa", ru: "Т-Касса" },
  description: { en: "Tinkoff/T-Bank payment gateway", ru: "Платёжный шлюз Т-Банк" },
  supportsMultipleInstances: true,
  sections: [
    {
      id: "credentials",
      title: { en: "Credentials", ru: "Доступы" },
      schema: z.object({
        terminalKey: z.string().min(1).meta({
          control: "text", label: { en: "Terminal key", ru: "Терминал" },
        }),
        password: z.string().min(1).meta({
          control: "secret", secret: true, label: { en: "Password", ru: "Пароль" },
        }),
      }),
    },
    {
      id: "behavior",
      title: { en: "Behavior", ru: "Поведение" },
      column: "side",
      schema: z.object({
        capture: z.boolean().default(true).meta({
          control: "switch", label: { en: "Auto-capture", ru: "Автосписание" },
        }),
      }),
    },
    {
      id: "receipt",
      title: { en: "Receipt", ru: "Чеки" },
      // Receipts require the full FFD configuration — an intra-section rule, so it lives on
      // this section's own schema and runs both when the section is saved and during full
      // (activation) validation. Only enforced when receipts are enabled (`useReceipt`).
      schema: z.object({
        useReceipt: z.boolean().default(false).meta({
          control: "switch", label: { en: "Send receipts", ru: "Отправлять чеки" },
        }),
        ffdVersion: z.enum(["1.2", "1.05"]).optional().meta({
          control: "select", label: { en: "FFD version", ru: "Версия ФФД" },
        }),
        taxation: z.enum(["osn", "usn_income", "usn_income_outcome", "esn", "patent"]).optional().meta({
          control: "select", label: { en: "Taxation", ru: "Налогообложение" },
        }),
        taxItemDefault: z.enum(TAX).optional().meta({
          control: "select", label: { en: "Default item tax", ru: "Налог товара" },
        }),
        taxShippingDefault: z.enum(TAX).optional().meta({
          control: "select", label: { en: "Default shipping tax", ru: "Налог доставки" },
        }),
      }).superRefine((val, ctx) => {
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
      }),
    },
    {
      id: "advanced",
      title: { en: "Advanced", ru: "Дополнительно" },
      column: "side",
      schema: z.object({
        // EXAMPLE (nested/array option): zod handles arbitrary nesting fine, and it's
        // validated/stored/resolved like any field. The generated form has no widget for an
        // array-of-objects, so it's surfaced with the `json` control (a JSON textarea). For a
        // richer editor, a custom-section widget would own the UI (see the webhook-tester
        // widget). Note: nested secrets are NOT split/encrypted per-field — for secret nested
        // values, mark the whole field secret or persist via a provider-owned endpoint.
        notifications: z
          .array(
            z.object({
              event: z.enum(["payment", "refund", "all"]),
              url: z.string().min(1),
            })
          )
          .default([])
          .meta({
            control: "json",
            label: { en: "Extra notifications", ru: "Доп. уведомления" },
            hint: {
              en: 'Array of { "event", "url" } objects, edited as JSON.',
              ru: 'Массив объектов { "event", "url" }, редактируется как JSON.',
            },
          }),
      }),
    },
  ],
  // EXAMPLE (cross-section validation): a rule spanning two sections — receipts (receipt)
  // require auto-capture (behavior). Lives here, not on a section schema, because it
  // references fields from different sections. Runs only at full/activation validation
  // (resolve + is_complete), never blocks saving an individual section.
  validate: (full, ctx) => {
    const { capture, useReceipt } = full as { capture?: boolean; useReceipt?: boolean }
    if (useReceipt && !capture) {
      ctx.addIssue({
        path: ["capture"],
        message: "Auto-capture must be enabled to send receipts",
      })
    }
  },
})

export type TKassaSettings = z.infer<typeof descriptor.schema>

/**
 * Integration-provider for T-Kassa: declares the plugin's settings contract to the
 * `integration` module. `static identifier` becomes the descriptor's `pluginId`, so
 * settings are stored/resolved under `plugin_id = "tkassa"`.
 *
 * Payment behaviour lives in the separate `payment-tkassa` provider (payment module),
 * which reads the resolved options via `getResolvedOptions("tkassa")`.
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
  async testConnection({ options }: TestConnectionContext): Promise<TestConnectionResult> {
    const s = options as Partial<TKassaSettings>
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
