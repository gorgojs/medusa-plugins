import {
  createStep,
  StepResponse,
} from "@medusajs/framework/workflows-sdk"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import {
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
        // TODO: Add all fields. Now only basic.

        // Medusa fields | YM fields

        "id",                           //  offerId : string
        "title",                        //  name : string
        "description",                  //  description : string
        "weight",                       //  OfferWeightDimensionsDTO.weight  : number
        "length",                       //  OfferWeightDimensionsDTO.length  : number
        "height",                       //  OfferWeightDimensionsDTO.height  : number
        "width",                        //  OfferWeightDimensionsDTO.width   : number
        "origin_country",               //  manufacturerCountries : Set<string> | null
        "images.url",                   //  pictures : Array<string> | null
        "categories.id",                //  category : string
        "hs_code",                      //  customsCommodityCode : string
        "variants.barcode",             //  barcodes  : Set<string> | null
        "tags.value",                   //  tags      : Set<string> | null

        // from metadata

        'shelfLife',                    //  shelfLife : TimePeriodDTO
        'lifeTime',                     //  lifeTime : TimePeriodDTO
        'guaranteePeriod',              //  guaranteePeriod : TimePeriodDTO
        "manuals",                      //  manuals : Array<OfferManualDTO> | null
        "vendor",                       //  vendor  : string
        "downloadable",                 //  downloadable : boolean
        "commodityCodes",               //  commodityCodes : Array<CommodityCodeDTO> | null
        "certificates",                 //  certificates : Set<string> | null

      ],
    })

    const all = (data ?? []) as ProductRow[]
    const categoryId = input?.medusaCategoryId

    const products = categoryId
      ? all.filter((p) =>
          (p.categories || []).some((c) => c.id === categoryId)
        )
      : all

    return new StepResponse(products)
  }
)
