import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { resolve } from 'path'

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
  featureFlags: {
    backend_hmr: true
  },
  plugins: [
    {
      resolve: "@gorgo/medusa-marketplace-ozon",
      options: {
      }
    },
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-marketplace-ozon/providers/marketplace-ozon",
            id: "test",
            options: {

            }
          }
        ]
      }
    }
  ],
})
