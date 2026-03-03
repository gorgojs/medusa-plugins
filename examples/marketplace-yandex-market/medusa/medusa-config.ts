import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

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
  featureFlags: {
    backend_hmr: true,
  },
 admin: {
    vite: (config) => {
      return {
        ...config,
        // Used only during testing, do not enable in production
        plugins: [
          gorgoPluginsInject({
            sources: [
              "@gorgo/medusa-marketplace",
              "@gorgo/medusa-marketplace-yandex-market",
            ],
            pluginMode: true
          }),
        ],
        optimizeDeps: {
          exclude: [
            "@gorgo/medusa-marketplace"
          ]
        },
      }
    },
  },
  plugins: [
    {
      resolve: "@gorgo/medusa-marketplace-yandex-market",
      options: {
      }
    },
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-marketplace-yandex-market/providers/marketplace-yandex-market",
            id: "test",
            options: {

            }
          }
        ]
      }
    }
  ],
})
