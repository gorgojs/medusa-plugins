import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { exportMarketplaceProductsWorkflow } from "../../../../../workflows/product/workflows/export-marketplace-products";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const body = (req.body ?? {}) as { items?: any[] }
    const exec = await exportMarketplaceProductsWorkflow.run({
      container: req.scope,
      input: body,
      context: { idempotencyKey: req.get("Idempotency-Key") || undefined },
    });

    return res.status(200).json(exec.result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
};
