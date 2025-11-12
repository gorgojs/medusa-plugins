import {
  createStep,
  StepResponse
} from "@medusajs/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import { runExportStepInput, ProductRow } from "../types"

export const getProductsStep = createStep<runExportStepInput, ProductRow[], void>(
  "get-products",
  async (input, { container }) => {
    if (Array.isArray(input?.medusaItems) && input!.medusaItems!.length) {
      return new StepResponse<ProductRow[], void>(input!.medusaItems!)
    }

    const query = container.resolve(ContainerRegistrationKeys.QUERY)
    const status = input?.statusFilter ?? "published"

    const { data } = await query.graph({
      entity: "product",
      filters: { status },
      fields: [
        "id", "title", "subtitle", "description", "handle",
        "weight", "length", "height", "width",
        "origin_country", "hs_code", "metadata",
        "images.url", "categories.id", "categories.name",
        "variants.id", "variants.sku", "variants.barcode",
        "variants.options.*", "variants.prices.amount", "variants.prices.currency_code",
      ],
    })

    console.log(`data`, data)

    const all = (Array.isArray(data) ? (data as ProductRow[]) : [])

    const catName = (input?.medusaCategoryName || "").trim().toLowerCase()
    const products = catName
      ? all.filter((p) => (p.categories || []).some((c) => (c.name || "").toLowerCase() === catName))
      : all

    return new StepResponse<ProductRow[], void>(products)
  },
  async () => { }
)
