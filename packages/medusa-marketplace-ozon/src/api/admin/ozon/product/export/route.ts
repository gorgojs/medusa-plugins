import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { runOzonProductExport } from "../../../../../workflows/product/workflows/run-ozon-product-export";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const body = (req.body ?? {}) as { items?: any[] }
    const items = Array.isArray(body.items) ? body.items : []
    const exec = await runOzonProductExport.run({
      container: req.scope,
      input: body,
      context: { idempotencyKey: req.get("Idempotency-Key") || undefined },
    });

    return res.status(200).json(exec.result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" })
  }
};
