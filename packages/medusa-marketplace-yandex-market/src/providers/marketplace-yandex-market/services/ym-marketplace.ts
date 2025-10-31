import { AbstractMarketplaceProvider } from "@gorgo/medusa-marketplace/modules/marketplace/utils"
import {
    ProductDTO,
} from "@medusajs/framework/types"
import {
    ApiResponseStatusType,
    GetOfferMappingsRequest,
    GetOfferMappingDTO
} from "../../../lib/yandex-market-client/api"
import { MedusaContainer } from "@medusajs/framework"
import {
    ExportProductsInput,
    ExportProductsOutput,
    GetProductsInput,
    GetProductsOutput,
    ImportProductsInput,
    ImportProductsOutput,
    MapProductsInput,
    MapProductsOutput,
    MAX_VARIANTS_TO_CREATE,
} from "@gorgo/medusa-marketplace/modules/marketplace/types"
import {
    importYmMarketplaceProductsWorkflow
} from "../../../workflows/provider"
import { withBusinessId, businessOfferMappingsApi } from "../../../lib/ym-client"
import { PAGE_LIMIT } from "../types"

type GetOfferMappingsStepInput = {
    request?: GetOfferMappingsRequest
}

type OfferMappingsPage = {
    status: ApiResponseStatusType
    offerMappings: GetOfferMappingDTO[]
    nextPageToken?: string | null
}


export class YandexMarketMarketplaceProvider extends AbstractMarketplaceProvider {
    static identifier = "YandexMarket"

    async getProducts(input?: GetOfferMappingsStepInput) {
        const { request } = input ?? {}
        const pages: OfferMappingsPage[] = []
        let pageToken: string | undefined

        do {
            const response = await businessOfferMappingsApi.getOfferMappings(
                withBusinessId({
                    pageToken,
                    limit: PAGE_LIMIT,
                    getOfferMappingsRequest: request,
                })
            )

            const { status, result } = response.data

            const offerMappings: GetOfferMappingDTO[] = result?.offerMappings ?? []
            const nextPageToken = result?.paging?.nextPageToken ?? null

            pages.push({ status, offerMappings, nextPageToken })

            pageToken = nextPageToken || undefined
        } while (pageToken)

        return pages
    }

    async importProducts(data: ImportProductsInput): Promise<ImportProductsOutput> {
        const { container, ...input } = data

        const { result } = await importYmMarketplaceProductsWorkflow(container).run({ input })

        return result
    }

    
}
