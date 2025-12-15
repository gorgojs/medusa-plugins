import { MedusaContainer } from "@medusajs/framework"

type GetProductsInput = {
  ids?: string[]
}

export const getProducts = async (input: GetProductsInput, container: MedusaContainer) => {
  const query = await container.resolve("query")

  const { data: products } = await query.graph({
    entity: "product",
    fields: [
      "*",
      "categories.id",
      "images.*",
      "options.*",
      "options.values.*",
      "metadata.*",
      "variants.*",
      "variants.images.*",
      "variants.options.*",
      "variants.inventory_items.*",
      "variants.prices.*",
    ],
    filters: {
      id: input.ids?.length ? input.ids : undefined,
      status: "published"
    },
  })

  return products
}
