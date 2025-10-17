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
    },
    databaseDriverOptions: {
      ssl: false,
      sslmode: "disable",
    },
  },
  modules: [
    {
      resolve: "@gorgo/medusa-marketplace-ozon/modules/ozon-export",
      options: {},
    },
    {
      resolve: "@gorgo/medusa-marketplace-ozon/modules/marketplace",
      options: {},
    }
  ],
  plugins: [
    {
      resolve: "@gorgo/medusa-marketplace-ozon",
      options: {
        clientId: process.env.OZON_CLIENT_ID!,
        apiKey: process.env.OZON_API_KEY!,
        baseUrl: process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru",
      },
    },
  ],
})
