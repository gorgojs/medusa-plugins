import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

const BASE = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru";
const HEADERS = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const limit = Math.min(Number(req.query.limit ?? 20), 1000);
    const last_id = typeof req.query.last_id === "string" ? req.query.last_id : "";
    const visibility =
      (req.query.visibility as "ALL" | "VISIBLE" | "INVISIBLE" | undefined) ?? "ALL";


    const offer_id = typeof req.query.offer_id === "string"
      ? req.query.offer_id.split(",").map((s) => s.trim()).filter(Boolean)
      : [];
    const product_id = typeof req.query.product_id === "string"
      ? req.query.product_id.split(",").map((s) => s.trim()).filter(Boolean)
      : [];


    const filter: any = { visibility };
    if (offer_id.length) {
      filter.offer_id = offer_id;
      delete filter.visibility;
    } else if (product_id.length) {
      filter.product_id = product_id.map((id) => Number(id));
      delete filter.visibility;
    }

    const body: any = { filter, limit, last_id };

    const ozonResponse = await fetch(`${BASE}/v3/product/list`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!ozonResponse.ok) {
      const text = await ozonResponse.text().catch(() => "");
      return res.status(ozonResponse.status).json({ error: text || `Ozon error ${ozonResponse.status}` });
    }
    res.json(await ozonResponse.json());
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};
