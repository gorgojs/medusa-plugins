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
            resolve: "@gorgo/medusa-payment-robokassa/providers/payment-robokassa",
            id: "robokassa",
            options: {
              merchantLogin: process.env.ROBOKASSA_MERCHANT_LOGIN,
              hashAlgorithm: process.env.ROBOKASSA_HASH_ALGORITHM,
              password1: process.env.ROBOKASSA_PASSWORD_1,
              password2: process.env.ROBOKASSA_PASSWORD_2,
              testPassword1: process.env.ROBOKASSA_TEST_PASSWORD_1,
              testPassword2: process.env.ROBOKASSA_TEST_PASSWORD_2,
              capture: true,
              useReceipt: true,
              taxation: "osn",
              taxItemDefault: "vat20",
              taxShippingDefault: "vat20",
            },
          },
        ],
      },
    },
  ],
})
