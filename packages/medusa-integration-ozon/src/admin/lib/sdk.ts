import Medusa from "@medusajs/js-sdk"

export const sdk = new Medusa({
  baseUrl: process.env.BACKEND_URL || "/", // TODO: not sure how to set it correctly
  auth: {
    type: "session",
  },
})
