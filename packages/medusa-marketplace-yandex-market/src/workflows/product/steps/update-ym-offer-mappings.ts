import {
    createStep,
    StepResponse,
} from "@medusajs/framework/workflows-sdk"
import axios from "axios"
import {
  OfferMappingsApiAxiosParamCreator,
  Configuration,
  type UpdateOfferMappingEntryRequest,
  type UpdateOfferMappingsRequest,
  type CatalogLanguageType,
  type ParameterValueDTO
} from "../../../lib/yandex-market-client"

import  { 
    ProductRow, 
    YmParam,
    RunYmProductExportWorkflowOutput,
    YM_BUSINESS_ID,
    MAX_OFFERS_PER_REQUEST,
    ChunkArray,
    UpdateOfferMappingResultDTO,
    AssertHasPictures,
    GetMinimalRublePrice,
    YM_DEFAULT_VENDOR,
    YmParameterValue,
    PushYmParameterValue,
    MapPackageDimensions,
    YM_BASE,
    YmAuthHeaders,
    Delay,
    ExtractOfferMappingResults
} from "../types"


const businessId = Number(YM_BUSINESS_ID)

const configuration = new Configuration({
  basePath: YM_BASE,                    
  baseOptions: { headers: YmAuthHeaders() }, 
})

const offerMappingsParams = OfferMappingsApiAxiosParamCreator(configuration)

export const UpdateYmOfferMappingsStep = createStep<
    { products: ProductRow[]; params: YmParam[]; categoryId: number },
    RunYmProductExportWorkflowOutput,
    string[]
>(
    "update-ym-offer-mappings",
    async (payload) => {
        const { products, params, categoryId } = payload
        if (!YM_BUSINESS_ID) throw new Error("Set YM_BUSINESS_ID")

        const batches = ChunkArray(products, MAX_OFFERS_PER_REQUEST)

        const allOfferIds: string[] = []
        const ymResponses: any[] = []
        const statuses: number[] = []
        const allResults: UpdateOfferMappingResultDTO[] = []
        let totalSent = 0

        for (const batch of batches) {
            const offers = batch.map((p) => {
                const pictures = (p.images || []).map((im) => im.url).filter(Boolean)
                AssertHasPictures(p.title, pictures)

                const best = GetMinimalRublePrice(p.variants)
                if (!best || best.value <= 0) {
                    throw new Error(`Product "${p.title}": RUB price is missing or <= 0`)
                }

                const optStr = best.variant.options
                    ? " " + Object.entries(best.variant.options).map(([k, v]) => `${k}: ${v}`).join(", ")
                    : ""

                const vendor = (p.metadata?.vendor as string) || YM_DEFAULT_VENDOR
                const description = p.description || p.subtitle || p.title

                const offerId =
                    best.variant.sku ||
                    (p.handle && best.variant.id ? `${p.handle}-${best.variant.id}` : `prod-${p.id}`)

                const customsCommodityCode =
                    (p.hs_code as string) || (p.metadata?.hs_code as string) || undefined

                const parameterValues: YmParameterValue[] = []

                const color =
                    best.variant.options?.Color ||
                    best.variant.options?.color ||
                    (p.metadata?.color_vendor as string) ||
                    (p.metadata?.color as string)
                PushYmParameterValue(parameterValues, params, ["Название цвета от производителя", "цвет"], color)

                const storage = best.variant.options?.Storage || best.variant.options?.storage
                if (typeof storage === "string") {
                    const romGb = parseInt(storage)
                    if (!Number.isNaN(romGb)) {
                        PushYmParameterValue(parameterValues, params, ["Объем встроенной памяти", "Память встроенная"], romGb)
                    }
                }

                const ramOpt = best.variant.options?.RAM || best.variant.options?.Ram || p.metadata?.ram
                const ramGb = typeof ramOpt === "string" ? parseInt(ramOpt) : Number(ramOpt)
                if (Number.isFinite(ramGb)) {
                    PushYmParameterValue(parameterValues, params, ["Оперативная память", "RAM"], ramGb as number)
                }

                const os = (p.metadata?.os as string) || (p.metadata?.operating_system as string)
                PushYmParameterValue(parameterValues, params, ["Операционная система", "ОС"], os)

                const screenInch = Number(p.metadata?.screen_size_inch)
                if (Number.isFinite(screenInch)) {
                    PushYmParameterValue(parameterValues, params, ["Диагональ экрана", "Размер экрана"], screenInch)
                }

                const resolution = p.metadata?.screen_resolution as string | undefined
                PushYmParameterValue(parameterValues, params, ["Разрешение экрана"], resolution)

                const nfc = p.metadata?.nfc ?? best.variant.options?.NFC
                if (typeof nfc === "boolean") PushYmParameterValue(parameterValues, params, ["NFC"], nfc)

                const fiveg = p.metadata?.five_g ?? p.metadata?.is_5g ?? best.variant.options?.["5G"]
                if (typeof fiveg === "boolean") PushYmParameterValue(parameterValues, params, ["5G"], fiveg)

                const esim = p.metadata?.esim ?? best.variant.options?.eSIM
                if (typeof esim === "boolean") PushYmParameterValue(parameterValues, params, ["eSIM"], esim)

                const year = Number(p.metadata?.release_year)
                if (Number.isFinite(year)) PushYmParameterValue(parameterValues, params, ["Год выпуска"], year)

                const barcodes = best.variant.barcode ? new Set<string>([best.variant.barcode]) : undefined

                const manufacturerCountries =
                Array.isArray(p.metadata?.manufacturerCountries) && p.metadata!.manufacturerCountries.length
                    ? new Set<string>(p.metadata!.manufacturerCountries as string[])
                    : p.origin_country
                    ? new Set<string>([p.origin_country])
                    : undefined


                const parameterValuesDto: ParameterValueDTO[] | undefined =
                parameterValues.length
                    ? parameterValues.map((pv: any) => {
                        const dto: ParameterValueDTO = { parameterId: pv.parameterId }
                        if (pv.unitId != null) dto.unitId = pv.unitId
                        if (pv.valueId != null) dto.valueId = pv.valueId
                        if (pv.value != null) dto.value = String(pv.value)
                        return dto
                    })
                    : undefined

                return {
                offerId,
                name: `${p.title}${optStr}`,
                marketCategoryId: categoryId,
                pictures,
                vendor,
                description,
                vendorCode: best.variant.sku || undefined,
                barcodes,                                
                weightDimensions: MapPackageDimensions(p),
                manufacturerCountries,         
                customsCommodityCode,
                basicPrice: { value: best.value, currencyId: "RUR" as const },
                parameterValues: parameterValuesDto,
                }

            })

            const body: UpdateOfferMappingEntryRequest = {
            offerMappingEntries: offers.map((o) => ({ offer: o })), 
            }

            const { url, options } = await offerMappingsParams.updateOfferMappingEntries(
                businessId,
                body
            )

            const resp = await axios.request({
            ...options,
            url: configuration.basePath + url,
            })

            const data = resp.data
            if (resp.status < 200 || resp.status >= 300) {
            throw new Error(typeof data === "string" ? data : `Yandex Market error ${resp.status}`)
            }

            ymResponses.push(data)
            statuses.push(resp.status)
            totalSent += offers.length
            allOfferIds.push(...offers.map((o) => o.offerId))

            const batchResults = ExtractOfferMappingResults(data)
            if (batchResults.length) {
            allResults.push(...batchResults)
            }

            await Delay(200)


        }

        return new StepResponse<RunYmProductExportWorkflowOutput, string[]>(
            {
                ok: true,
                status: 200,
                sentCount: totalSent,
                response: {
                    batches: ymResponses,
                    statuses,
                    results: allResults,
                },
            },
            allOfferIds
        )
    },
    async () => { }
)
