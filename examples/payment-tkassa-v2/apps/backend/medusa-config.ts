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
        encryptionKey: process.env.GORGO_INTEGRATION_KEY,
        allowPlaintextInDev: true,
        descriptors: ["@gorgo/medusa-payment-tkassa-v2/integration-descriptor"],
      },
    },
    { resolve: "@gorgo/medusa-payment-tkassa-v2", options: {} },
  ],
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      dependencies: ["integration"],
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/payment-tkassa",
            id: "tkassa",
            options: {
              terminalKey: process.env.TKASSA_TERMINAL_KEY,
              password: process.env.TKASSA_PASSWORD,
              capture: true,
            },
          },
        ],
      },
    },
  ],
})
