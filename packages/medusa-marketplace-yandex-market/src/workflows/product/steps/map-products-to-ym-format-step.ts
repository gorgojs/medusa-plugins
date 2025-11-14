import {
    createStep,
    StepResponse
} from "@medusajs/workflows-sdk"
import {
    OfferWeightDimensionsDTO,

} from "../../../lib/yandex-market-client/api"
import {
    UpdateOfferMappingDTO
} from "../../../lib/yandex-market-client/api"

export type itemsYm = {
    offerId: string,
    name: string,
    description: string,
    dimensions: OfferWeightDimensionsDTO,
    vendor: string,
    marketCategoryId: number,
    pictures: Array<string>
}


function mapProductsToYmFormat(products) {
    // TODO Add flexibile categoryId:
    const marketCategoryId = Number(91491)
    const vendor = "Medusa"
    const productsList: any[] = Array.isArray(products) ? (products as any[]) : []
    const ymItems: itemsYm[] = []

    for (const product of productsList) {
        const pictures: string[] = product.thumbnail
            ? [product.thumbnail]
            : []
        if (!pictures.length) continue


        const offerId = product.handle
        const name = product.title
        const description = product.description
        const dimensions: OfferWeightDimensionsDTO = {
            length: Number((product.length / 10).toFixed(2)),
            width: Number((product.width / 10).toFixed(2)),
            height: Number((product.height / 10).toFixed(2)),
            weight: Number((product.weight / 1000).toFixed(2))
        }

        ymItems.push({
            offerId: offerId,
            name: name,
            description: description,
            dimensions: dimensions,
            vendor: vendor,
            marketCategoryId: marketCategoryId,
            pictures: pictures
        })
    }
    return ymItems
}


export const mapProductsToYmFormatStep = createStep(
    "map-products-to-ym-format-step",
    async (products: unknown[]) => {
        const mappedProducts = mapProductsToYmFormat(products)
        const convertedProducts: UpdateOfferMappingDTO[] = mappedProducts.map((item) => ({
            offer: {
                offerId: item.offerId,
                name: item.name,
                description: item.description,
                vendor: item.vendor,
                marketCategoryId: item.marketCategoryId,
                pictures: item.pictures,
                weightDimensions: item.dimensions,
            },
        }))
        return new StepResponse(convertedProducts)
    }
)
