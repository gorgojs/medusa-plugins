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
     cookieOptions: {      sameSite: "lax",      secure: false,    }
  },
  admin: {
    vite: () => {
      return {
        // Used only during testing, do not enable in production
        server: {
          allowedHosts: true,
        },
      }
    },
  },
  plugins: [
    {
      resolve: "@gorgo/medusa-integration",
      options: {
        // Any non-empty secret (SHA-256-derived to a 32-byte key). Required in dev and prod;
        // high-entropy recommended, e.g. `openssl rand -hex 32`.
        encryptionKey: process.env.GORGO_INTEGRATION_ENCRYPTION_KEY,
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
    // Registered as its own plugin (not just referenced from `modules` below) so the
    // admin build discovers its admin extensions — i18n bundle (src/admin/i18n) and
    // widgets (webhook tester / webhook URL editor). Without this entry the provider
    // still works, but its admin UI never loads and translation keys render raw
    // (e.g. "tkassa.name" instead of "T-Kassa").
    {
      resolve: "@gorgo/medusa-payment-tkassa",
      options: {},
    },
  ],
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      dependencies: ["integration"],
      options: {
        providers: [
          {
            // Credentials/behaviour are no longer read from medusa-config — configure
            // T-Kassa in Admin → Settings → Integrations instead. `id: "tkassa"` here
            // only names this Medusa payment-provider registration (→ `pp_tkassa_tkassa`);
            // since the integration provider above has no instance id, `options` stays
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
