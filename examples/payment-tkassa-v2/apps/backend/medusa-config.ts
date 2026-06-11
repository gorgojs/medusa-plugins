import { loadEnv, defineConfig } from '@medusajs/framework/utils'

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
            // `id` only needed to register the SAME provider class more than once
            // (multi-instance, e.g. two Ozon accounts). Omit for single-instance.
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/integration-tkassa",
            options: {
            },
          },
          // {
          //   resolve: "@gorgo/medusa-integration-marketplace-ozon/providers/integration-ozon",
          //   id: "ozon-1",
          //   options: {
          //   },
          // },
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
            // No options here on purpose: T-Kassa's credentials/behaviour are stored in
            // the `integration` module (Admin → Integrations) and read at runtime via
            // `dependencies: ["integration"]`. medusa-config is no longer a config source.
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/payment-tkassa",
            id: "tkassa",
          },
        ],
      },
    },
  ],
})
