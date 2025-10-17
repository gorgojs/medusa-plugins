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
      "variants.*"
    ],
    filters: {
      id: input.ids?.length ? input.ids : undefined,
      status: "published"
    },
  })

  return products
}
