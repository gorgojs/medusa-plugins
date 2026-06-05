import { loadEnv, defineConfig } from "@medusajs/framework/utils"

loadEnv(process.env.NODE_ENV || "test", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:9000",
      authCors: process.env.AUTH_CORS || "http://localhost:9000",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    cookieOptions: { sameSite: "lax", secure: false },
  },
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-yookassa/providers/payment-yookassa",
            id: "yookassa",
            options: {
              shopId: process.env.YOOKASSA_SHOP_ID,
              secretKey: process.env.YOOKASSA_SECRET_KEY,
              capture: false,
              useReceipt: false,
              taxItemDefault: 1,
              taxShippingDefault: 1,
            },
          },
        ],
      },
    },
  ],
})
