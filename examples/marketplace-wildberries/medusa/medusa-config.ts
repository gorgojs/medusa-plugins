import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'
import path from "path"

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
              "@gorgo/medusa-marketplace-wildberries",
            ],
            pluginMode: true
          }),
        ],
        optimizeDeps: {
          exclude: [
            "@gorgo/medusa-marketplace"
          ]
        },
        resolve: {
          alias: [
            { find: /^react$/, replacement: require.resolve("react") },
            { find: /^react-dom$/, replacement: require.resolve("react-dom") },
            // Добавляем эту строку:
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
      resolve: "@gorgo/medusa-marketplace-wildberries",
      options: {
        
      }
    },
    {
      resolve: "@gorgo/medusa-marketplace",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-marketplace-wildberries/providers/marketplace-wildberries",
            id: "test",
            options: {

            }
          }
        ]
      }
    }
  ],
})
