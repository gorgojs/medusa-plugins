import { defineMiddlewares } from "@medusajs/framework/http"
import bodyParser from "body-parser"

export default defineMiddlewares({
  routes: [
    {
      method: ["POST"],
      matcher: "/hooks/1c/:id/exchange",
      middlewares: [
        bodyParser.raw({
          type: () => true,
          limit: "50mb",
        }),
      ],
    },
  ],
})
