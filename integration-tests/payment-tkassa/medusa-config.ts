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
  plugins: [
    {
      resolve: "@gorgo/medusa-integration",
      options: {
        encryptionKey: process.env.GORGO_INTEGRATION_ENCRYPTION_KEY || "test-secret",
        providers: [
          {
            // No `id`: this is the single/default instance → key `int_tkassa`
            // (instance_id=null). An explicit `id` here would be treated as an
            // instance id (see load-providers.ts), producing `int_tkassa_<id>` instead.
            resolve: "@gorgo/medusa-payment-tkassa/providers/integration-tkassa",
            options: {},
          },
        ],
      },
    },
  ],
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      dependencies: ["integration"],
      options: {
        providers: [
          {
            // `id: "tkassa"` here only names this Medusa payment-provider registration
            // (→ `pp_tkassa_tkassa`) — it is NOT the integration instance id. Since the
            // integration provider above has no instance id either, `options` stays
            // empty so `this.instanceId_` resolves to null on both sides.
            resolve: "@gorgo/medusa-payment-tkassa/providers/payment-tkassa",
            id: "tkassa",
            options: {},
          },
        ],
      },
    },
  ],
})
