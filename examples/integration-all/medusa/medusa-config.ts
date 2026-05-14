import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { gorgoPluginsInject } from '@gorgo/medusa-integration/exports'

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
  admin: {
    vite: (config) => {
      return {
        ...config,
        plugins: [
          gorgoPluginsInject({
            sources: [
              "@gorgo/medusa-integration",
              "@gorgo/medusa-integration-ozon",
              "@gorgo/medusa-integration-wildberries",
              "@gorgo/medusa-integration-yandex-market"
            ],
            pluginMode: true
          }),
        ],
        optimizeDeps: {
          exclude: [
            "@gorgo/medusa-integration"
          ]
        },
        resolve: {
          alias: [
            { find: /^react$/, replacement: require.resolve("react") },
            { find: /^react-dom$/, replacement: require.resolve("react-dom") },
            { find: /^@tanstack\/react-query$/, replacement: require.resolve("@tanstack/react-query") },
            { find: /^react-router-dom$/, replacement: require.resolve("react-router-dom") },
          ],
          dedupe: ["react", "react-dom", "@tanstack/react-query", "react-router-dom"],
          preserveSymlinks: false,
        }
      }
    },
  },
  plugins: [
    {
      resolve: "@gorgo/medusa-integration-ozon",
      options: {
      }
    },
    {
      resolve: "@gorgo/medusa-integration-wildberries",
      options: {
      }
    },
    {
      resolve: "@gorgo/medusa-integration-yandex-market",
      options: {
      }
    },
    {
      resolve: "@gorgo/medusa-integration",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-integration-ozon/providers/integration-ozon",
            id: "test",
            options: {
            }
          },
          {
            resolve: "@gorgo/medusa-integration-wildberries/providers/integration-wildberries",
            id: "test",
            options: {
            }
          },
          {
            resolve: "@gorgo/medusa-integration-yandex-market/providers/integration-yandex-market",
            id: "test",
            options: {
            }
          }
        ]
      }
    }
  ],
})
