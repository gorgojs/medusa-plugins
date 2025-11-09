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
    const description_category_id = Number(String(req.query.category_id ?? ""));
    const type_id = Number(String(req.query.type_id ?? ""));
    const attribute_id = Number(String(req.query.attribute_id ?? ""));

    if (!Number.isFinite(description_category_id) || description_category_id <= 0) {
      return res.status(400).json({ error: "Query param 'category_id' (description_category_id) must be a positive number" });
    }
    if (!Number.isFinite(type_id) || type_id <= 0) {
      return res.status(400).json({ error: "Query param 'type_id' must be a positive number" });
    }
    if (!Number.isFinite(attribute_id) || attribute_id <= 0) {
      return res.status(400).json({ error: "Query param 'attribute_id' must be a positive number" });
    }

    const langRaw = typeof req.query.lang === "string" ? req.query.lang.trim().toUpperCase() : "";
    const language = ["DEFAULT", "RU", "EN", "TR", "ZH_HANS"].includes(langRaw) ? langRaw : "DEFAULT";

    const limit = Math.min(Math.max(Number(req.query.limit ?? 1000), 1), 1000); // 1..1000
    const last_value_id = typeof req.query.last_value_id === "string" ? req.query.last_value_id : undefined;

    const body: any = { description_category_id, type_id, attribute_id, language, limit };
    if (last_value_id) body.last_value_id = last_value_id;

    const ozonResponse = await fetch(`${BASE}/v1/description-category/attribute/values`, {
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
