import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

const BASE = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru";
const H = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const category_id = req.query.category_id ? Number(req.query.category_id) : NaN;
  const language = (req.query.language as string) || "RU";

  if (!category_id || Number.isNaN(category_id)) {
    return res.status(400).json({ error: "category_id is required (number)" });
  }

  try {
    const r = await fetch(`${BASE}/v4/product/info/attributes`, {
      method: "POST",
      headers: H,
      body: JSON.stringify({ category_id, language }),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return res.status(r.status).json({ error: text || `Ozon error ${r.status}` });
    }

    const data = await r.json();
    return res.json(data);
  } catch (e: any) {
    return res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};
