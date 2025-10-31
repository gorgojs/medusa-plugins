import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

const BASE = process.env.OZON_BASE_URL ?? "https://api-seller.ozon.ru";
const H = {
  "Client-Id": process.env.OZON_CLIENT_ID!,
  "Api-Key": process.env.OZON_API_KEY!,
  "Accept": "application/json",
  "Content-Type": "application/json",
};

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  try {
    const description_category_id = Number(String(req.params?.category_id ?? ""));
    const type_id = Number(String(req.params?.type_id ?? ""));
    const langRaw = typeof req.query.lang === "string" ? req.query.lang.trim().toUpperCase() : "";
    const language = ["DEFAULT", "RU", "EN", "TR", "ZH_HANS"].includes(langRaw) ? langRaw : "DEFAULT";

    if (!Number.isFinite(description_category_id) || description_category_id <= 0) {
      return res.status(400).json({ error: "Path param 'category_id' must be a positive number" });
    }
    if (!Number.isFinite(type_id) || type_id <= 0) {
      return res.status(400).json({ error: "Path param 'type_id' must be a positive number" });
    }

    const r = await fetch(`${BASE}/v1/description-category/attribute`, {
      method: "POST",
      headers: H,
      body: JSON.stringify({ description_category_id, type_id, language }),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return res.status(r.status).json({ error: text || `Ozon error ${r.status}` });
    }

    res.json(await r.json());
  } catch (e: any) {
    res.status(500).json({ error: e?.message ?? "Internal error" });
  }
};
