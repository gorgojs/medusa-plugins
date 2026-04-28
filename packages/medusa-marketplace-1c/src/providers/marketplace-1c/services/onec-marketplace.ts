import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
  ExportProductsInput,
  ExportProductsOutput,
  GetProductsInput,
  GetProductsOutput,
  GetMarketplaceProductsInput,
  GetMarketplaceProductsOutput,
  MapToMedusaProductsInput,
  MapToMedusaProductsOutput,
  ImportProductsInput,
  ImportProductsOutput,
  MapToMarketplaceProductsInput,
  MapToMarketplaceProductsOutput,
  GetMarketplaceWarehousesInput,
  GetMarketplaceWarehousesOutput,
  GetMarketplaceOrdersInput,
  GetMarketplaceOrdersOutput,
  GetMarketplaceOrderTypesInput,
  GetMarketplaceOrderTypesOutput,
  MapToMedusaOrdersInput,
  MapToMedusaOrdersOutput,
} from "@gorgo/medusa-marketplace/types"
import { ORDER_TYPES } from "../types"

export class OneCMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "1c"

  async getProducts(data: GetProductsInput): Promise<GetProductsOutput> {
    const { container, ...input } = data

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
        status: "published",
      },
    })

    return products
  }

  async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
    const { container, marketplace, ...input } = data

    const productsToUpdate = (input.products || [])
      .filter((product) => product?.id)
      .map((product) => ({
        id: product.id,
        metadata: product.metadata ?? {},
      }))

    const variantsToUpdate = (input.products || [])
      .flatMap((product: any) => product?.variants ?? [])
      .filter((variant: any) => variant?.id)
      .map((variant: any) => ({
        id: variant.id,
        metadata: variant.metadata ?? {},
      }))

    const { updateProductsWorkflow, updateProductVariantsWorkflow } =
      await import("@medusajs/medusa/core-flows")

    if (productsToUpdate.length) {
      await updateProductsWorkflow(container).run({
        input: { products: productsToUpdate },
      })
    }

    if (variantsToUpdate.length) {
      await updateProductVariantsWorkflow(container).run({
        input: { product_variants: variantsToUpdate },
      })
    }

    return {
      updatedProductsIds: productsToUpdate.map((p) => p.id),
      updatedVariantsIds: variantsToUpdate.map((v) => v.id),
    }
  }

  async exportProducts(data: ExportProductsInput): Promise<ExportProductsOutput> {
    // 1C uses push-based exchange (CommerceML protocol).
    // Export to 1C is handled via the exchange endpoint's `query` mode,
    // which generates CommerceML XML for orders.
    // This method is a no-op in the provider contract.
    return { ok: true, message: "1C uses push-based CommerceML exchange. Use the exchange endpoint." }
  }

  async getMarketplaceProducts(data: GetMarketplaceProductsInput): Promise<GetMarketplaceProductsOutput> {
    const { container, ...input } = data

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
        "variants.metadata.*",
        "variants.images.*",
        "variants.options.*",
        "variants.inventory_items.*",
        "variants.prices.*",
      ],
      filters: {
        id: input.ids?.length ? input.ids : undefined,
        external_id: { $ne: null },
      },
    })

    return products
  }

  async mapToMarketplaceProducts(data: MapToMarketplaceProductsInput): Promise<MapToMarketplaceProductsOutput> {
    // 1C pulls data via CommerceML exchange endpoint.
    // Mapping from Medusa to 1C format is handled by the exchange endpoint's `query` mode.
    const products = data.products || []

    const commercemlProducts = products.map((product) => ({
      id: product.external_id || product.id,
      name: (product as any).title || "",
      description: (product as any).description || "",
      groupId: (product as any).categories?.[0]?.id,
      variants: ((product as any).variants || []).map((variant: any) => ({
        id: variant.id,
        name: variant.title || "",
        sku: variant.sku || "",
        prices: (variant.prices || []).map((price: any) => ({
          amount: price.amount,
          currency_code: price.currency_code,
        })),
      })),
    }))

    return { products: commercemlProducts }
  }

  async getMarketplaceWarehouses(data: GetMarketplaceWarehousesInput): Promise<GetMarketplaceWarehousesOutput> {
    // 1C warehouses are discovered during the offers.xml exchange.
    // They are stored in metadata on products/variants during import.
    // Return empty array — warehouses will be populated from CommerceML exchange data.
    return []
  }

  async getMarketplaceOrderTypes(data: GetMarketplaceOrderTypesInput): Promise<GetMarketplaceOrderTypesOutput> {
    return Object.values(ORDER_TYPES) as string[]
  }

  async getMarketplaceOrders(data: GetMarketplaceOrdersInput): Promise<GetMarketplaceOrdersOutput> {
    const { container, marketplace } = data

    const query = await container.resolve("query")

    const { data: orders } = await query.graph({
      entity: "order",
      fields: [
        "id",
        "display_id",
        "email",
        "currency_code",
        "items.*",
        "shipping_address.*",
        "created_at",
        "status",
        "metadata.*",
      ],
      filters: {
        sales_channel_id: marketplace.sales_channel_id || undefined,
      },
    })

    return orders
  }

  async mapToMedusaOrders(data: MapToMedusaOrdersInput): Promise<MapToMedusaOrdersOutput> {
    const { marketplace, marketplaceOrders } = data

    const medusaOrders = (marketplaceOrders as any[]).map((order) => {
      const mappedOrder: MapToMedusaOrdersOutput[number] = {
        sales_channel_id: marketplace.sales_channel?.id,
        email: order.email || `1c_customer_${String(order.id)}@example.com`,
        shipping_address: {
          address_1: order.address || "",
          city: order.city || "",
          postal_code: order.postal_code || "-",
          country_code: order.country_code || "ru",
          first_name: order.first_name || "1C",
          last_name: order.last_name || "Customer",
        },
        items: (order.items || []).map((item: any) => ({
          title: item.name || item.title || "",
          variant_sku: item.sku || item.article,
          quantity: Number(item.quantity) || 1,
          unit_price: Number(item.price) || 0,
        })),
        marketplace_order: {
          marketplace_id: marketplace.id,
          order_id: String(order.id || order.number),
          status: order.status || "New",
          type: "sale",
          data: order as Record<string, unknown>,
        },
      }
      return mappedOrder
    })

    return medusaOrders
  }

  async mapToMedusaProducts(input: MapToMedusaProductsInput): Promise<MapToMedusaProductsOutput> {
    const products = input.marketplaceProducts

    if (!products || !Array.isArray(products) || !products.length) {
      return []
    }

    // Map 1C external_id metadata onto existing products
    for (const product of products as any[]) {
      if (product.external_id) {
        product.metadata = {
          ...(product.metadata ?? {}),
          onec_id: product.external_id,
        }
      }
    }

    return products
  }
}
