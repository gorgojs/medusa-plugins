import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import ApiKeyModule from '@medusajs/medusa/api-key'

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
      resolve: "@gorgo/medusa-marketplace-wildberries",
      options: {}
    }
  ],
  modules: [
    {
      resolve: "@gorgo/medusa-marketplace-wildberries/modules/wildberries",
      options: {
        apiKey: process.env.WB_API_KEY,
      }
    }
  ]
})
