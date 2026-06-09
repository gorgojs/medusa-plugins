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
        optionSecret: process.env.GORGO_OPTION_SECRET || "supersecret",
        providers: [
          {
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/integration-tkassa",
            // id: "tkassa-2",  // ??
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
            resolve: "@gorgo/medusa-payment-tkassa-v2/providers/payment-tkassa",
            id: "tkassa",
            options: {
            },
          },
        ],
      },
    },
  ],
})
