import { ProductDTO } from "@medusajs/framework/types"
import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { updateProductsWorkflow, updateProductVariantsWorkflow } from "@medusajs/medusa/core-flows"

export type ImportIntegrationProductsStepInput = {
  products: ProductDTO[]
}

export const importIntegrationProductsStep = createStep(
  "import-ozon-products",
  async (input: ImportIntegrationProductsStepInput, { container }) => {
    const products = input.products
    if (!products?.length) {
      return new StepResponse({
        updatedProductsIds: [],
        updatedVariantsIds: [],
      })
    }

    const productsToUpdate = products
      .filter((product) => product?.id)
      .map((product) => ({
        id: product.id,
        metadata: product.metadata ?? {},
      }))

    const variantsToUpdate = products
      .flatMap((product: any) => product?.variants ?? [])
      .filter((variant: any) => variant?.id)
      .map((variant: any) => ({
        id: variant.id,
        metadata: variant.metadata ?? {},
      }))

    if (productsToUpdate.length) {
      await updateProductsWorkflow(container).run({ input: { products: productsToUpdate }})
    }

    if (variantsToUpdate.length) {
      await updateProductVariantsWorkflow(container).run({ input: { product_variants: variantsToUpdate }})
    }

    return new StepResponse({
      updatedProductsIds: productsToUpdate.map((product) => product.id),
      updatedVariantsIds: variantsToUpdate.map((variant) => variant.id),
    })
  }
)
