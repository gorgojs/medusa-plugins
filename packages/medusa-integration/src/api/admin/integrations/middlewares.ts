import { MiddlewareRoute, validateAndTransformBody } from "@medusajs/framework/http"
import { AdminUpsertIntegration } from "./validators"

export const adminIntegrationRoutesMiddlewares: MiddlewareRoute[] = [
  {
    methods: ["POST"],
    matcher: "/admin/integrations/:provider_id",
    // `as any` flattens a TS2589 (excessively deep instantiation) that zod-4 schema types
    // trigger against validateAndTransformBody's generic. Runtime validation is unchanged;
    // `req.validatedBody` is typed explicitly in the route via AdminUpsertIntegrationType.
    middlewares: [validateAndTransformBody(AdminUpsertIntegration as any)],
  },
]
