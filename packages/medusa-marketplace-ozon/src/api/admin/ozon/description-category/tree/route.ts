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
    const langRaw = typeof req.query.lang === "string" ? req.query.lang.trim().toUpperCase() : "";
    const lang = ["DEFAULT", "RU", "EN", "TR", "ZH_HANS"].includes(langRaw) ? langRaw : "DEFAULT";

    const ozonResponse = await fetch(`${BASE}/v1/description-category/tree`, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({ language: lang }),
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
