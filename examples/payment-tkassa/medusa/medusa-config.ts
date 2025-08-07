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
  admin: {
    vite: () => {
      return {
        // Used only during testing, do not enable in production
        server: {
          allowedHosts: true,
        },
      }
    },
  },
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-tkassa/providers/payment-tkassa",
            id: "tkassa",
            options: {
              terminalKey: process.env.TKASSA_TERMINAL_KEY,
              password: process.env.TKASSA_PASSWORD,
              capture: true,
              useReceipt: true,
              ffdVersion: "1.05",
              taxation: "osn",
              taxItemDefault: "none",
              taxShippingDefault: "none",
            },
          },
          
        ],
      },
    },
  ],
})
