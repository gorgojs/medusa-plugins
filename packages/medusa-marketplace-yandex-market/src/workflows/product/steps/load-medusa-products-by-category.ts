import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import  { 
  RunYmProductExportWorkflowInput,
  ProductRow
} from "../types"


export const LoadMedusaProductsByCategoryStep = createStep(
  "load-medusa-products-by-category",
  async (input: RunYmProductExportWorkflowInput | undefined, { container }) => {
    const query = container.resolve(ContainerRegistrationKeys.QUERY)

    const { data } = await query.graph({
      entity: "product",
      filters: { status: "published" },
      fields: [
        "id",
        "title",
        "subtitle",
        "description",
        "handle",
        "weight",
        "length",
        "height",
        "width",
        "origin_country",
        "hs_code",
        "metadata",
        "images.url",
        "categories.id",
        "categories.name",
        "variants.id",
        "variants.sku",
        "variants.barcode",
        "variants.options.*",
        "variants.prices.amount",
        "variants.prices.currency_code",
      ],
    })

    const all = (data ?? []) as ProductRow[]

    const catName = (input?.medusaCategoryName || "Mobile Phones").toLowerCase()
    const products = all.filter((p) =>
      (p.categories || []).some((c) => c.name?.toLowerCase() === catName)
    )

    return new StepResponse(products)
  }
)
