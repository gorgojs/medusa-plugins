import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { optional } from 'zod'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  plugins: [
    {
      resolve: "@gorgo/medusa-integration",
      options: {
        // 32-byte base64 key (openssl rand -base64 32). "supersecret" is NOT a valid key
        // and would throw at first write; allowPlaintextInDev lets dev run without a key.
        encryptionKey: process.env.GORGO_INTEGRATION_ENCRYPTION_KEY,
        allowPlaintextInDev: false,
        providers: [
          {
            // Each registration = one integration instance, keyed by `int_<identifier>[_<id>]`.
            // Omit `id` for the single/default instance → key `int_tkassa`, stored as
            // (plugin_id="tkassa", instance_id=null).
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/integration-tkassa",
            id: "tkassa",
            options: {},
          },
          // Multi-instance: register the SAME class once per account, each with a distinct
          // `id`. The consuming provider must be registered with a matching `options.id`
          // so it resolves the right instance (see the payment module below).
          {
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/integration-tkassa",
            id: "acct2", // → key int_tkassa_acct2, stored as instance_id="acct2"
            options: {},
          },
        ],
      },
    },
    // {
    //   resolve: "@gorgo/medusa-integration-marketplace",
    //   options: {
    //   }
    // },
    // {
    //   resolve: "@gorgo/medusa-integration-marketplace-ozon",
    //   options: {
    //   }
    // },
  ],
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      dependencies: ["integration"],
      options: {
        providers: [
          {
            // No settings here on purpose: T-Kassa's credentials/behaviour are stored in
            // the `integration` module (Admin → Integrations) and read at runtime via
            // `dependencies: ["integration"]`. medusa-config is no longer a settings source.
            // Single instance → no `options.id`, so it resolves `int_tkassa` (instance null).
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/payment-tkassa",
            id: "tkassa",
            options: { id: "tkassa"}
          },
          // Multi-instance: one payment registration per account, each binding to its
          // integration instance via `options.id` (must match the integration `id` above).
          {
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/payment-tkassa",
            id: "acct2",
            options: { id: "acct2" }, // → reads integration instance int_tkassa_acct2
          },
        ],
      },
    },
  ],
})
