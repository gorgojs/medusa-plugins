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
    }
  },
  modules: [
    {
      resolve: "@medusajs/medusa/fulfillment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-fulfillment-apiship/providers/fulfillment-apiship",
            id: "apiship",
            options: {
              token: process.env.APISHIP_TOKEN,
              isTest: true,
              settings: {
                defaultSenderSettings: {
                  countryCode: "RU",
                  addressString: "Москва, улица Лестева, 19к1, офис 306",
                  contactName: "Иванов Иван Иванович",
                  phone: "+79999999900"
                },
                connectionsMap: {
                  cdek: "36253"
                },
                defaultProductSizes: {
                  length: 10,
                  width: 10,
                  height: 10,
                  weight: 20
                },
                deliveryCostVat: -1,
                isCod: false
              }
            },
          },
        ],
      },
    },
  ],
  plugins: [
    {
      resolve: "@gorgo/medusa-fulfillment-apiship",
      options: {},
    },
  ],
})
