import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { adminOzonProductImportWorkflow } from "../../../../../workflows/import-product";
import { getDemoOzonOffers } from "../../../../../config/ozon-offers";

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const body = req.body as { items?: any[] };

    const itemsToImport = Array.isArray(body.items) && body.items.length > 0
      ? body.items
      : getDemoOzonOffers();

    if (itemsToImport.length === 0) {
      return res.status(400).json({ error: "Body 'items' must be a non-empty array" });
    }

    const exec = await adminOzonProductImportWorkflow.run({
      container: req.scope,
      input: { items: itemsToImport },
      context: { idempotencyKey: req.get("Idempotency-Key") || undefined },
    });

    return res.status(200).json(exec.result);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};
