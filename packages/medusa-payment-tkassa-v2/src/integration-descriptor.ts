import { defineIntegration, z } from "@gorgo/medusa-integration"

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
  taxItemDefault: z.enum(["none","vat0","vat5","vat7","vat10","vat20","vat105","vat107","vat110","vat120"]).optional().meta({
    section: "receipt", control: "select",
    label: { en: "Default item tax", ru: "Налог товара" },
  }),
  taxShippingDefault: z.enum(["none","vat0","vat5","vat7","vat10","vat20","vat105","vat107","vat110","vat120"]).optional().meta({
    section: "receipt", control: "select",
    label: { en: "Default shipping tax", ru: "Налог доставки" },
  }),
})

export default defineIntegration({
  pluginKind: "payment",
  pluginId: "tkassa",
  schemaVersion: 1,
  displayName: { en: "T-Kassa", ru: "Т-Касса" },
  description: { en: "Tinkoff/T-Bank payment gateway", ru: "Платёжный шлюз Т-Банк" },
  supportsMultipleInstances: false,
  schema,
  sections: [
    { id: "credentials", title: { en: "Credentials", ru: "Доступы" } },
    { id: "behavior", title: { en: "Behavior", ru: "Поведение" } },
    { id: "receipt", title: { en: "Receipt", ru: "Чеки" } },
  ],
})
