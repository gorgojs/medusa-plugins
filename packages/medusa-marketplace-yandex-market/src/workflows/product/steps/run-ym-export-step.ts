import {
    createStep,
    StepResponse
} from "@medusajs/workflows-sdk"
import {
    BusinessOfferMappingsApi,
    Configuration,
    ApiResponseStatusType,
} from "../../../lib/yandex-market-client"
import {
    UpdateOfferMappingDTO,
} from "../../../lib/yandex-market-client/api"
import { YM_API_KEY, YM_BUSINESS_ID } from "../../../lib/constants"
import type { itemsYm } from "./map-products-to-ym-format-step"

type ExportResult = { status: ApiResponseStatusType }

export const runYmExportStep = createStep<itemsYm[], ExportResult, void>(
    "run-ym-export-step",
    async (items) => {
        const config = new Configuration({
            apiKey: YM_API_KEY as string,
        })

        const api = new BusinessOfferMappingsApi(config)
        const businessId = Number(YM_BUSINESS_ID)

        const offerMappings: UpdateOfferMappingDTO[] = items.map((item) => ({
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



        const result = await api.updateOfferMappings(
            businessId,
            { offerMappings },
            "RU"
        )

        const { status } = result.data


        return new StepResponse<ExportResult, void>({ status })
    }
)
