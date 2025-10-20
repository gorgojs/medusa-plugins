import { createStep, createWorkflow, StepResponse, WorkflowResponse } from "@medusajs/framework/workflows-sdk"
import WildberriesModuleService, { WildberriesProduct } from "../modules/wildberries/service"
import { WB_MODULE } from "../modules/wildberries"

export const dummyProducts = [
  {
    "subjectID": 105,
    "variants": [
      {
        "vendorCode": "АртикулПродавца11",
        "wholesale": 
          {
            "enabled": true,
            "quantum": 30
          },
        "title": "Кроссовки / белые",
        "description": "Описание товара 1",
        "brand": "Nike",
        "dimensions": 
          {
            "length": 40,
            "width": 30,
            "height": 15,
            "weightBrutto": 0.9
          },
        "characteristics": [
          {
            "id": 40,
            "value": [
              "Искусственный мех"
            ]
          },
          {
            "id": 1023,
            "value": [
              "Искусственный мех"
            ]
          },
          {
            "id": 18769,
            "value": [
              "зима"
            ]
          }
        ],
        "sizes": [
          {
            "techSize": "45",
            "price": 1000,
            "skus": [
              "111111111122111"
            ]
          }
        ]
      },
      {
        "vendorCode": "АртикулПродавца12",
        "wholesale": 
          {
            "enabled": true,
            "quantum": 30
          },
        "title": "Кроссовки / черные",
        "description": "Описание товара 2",
        "brand": "Nike",
        "dimensions": 
          {
            "length": 40,
            "width": 30,
            "height": 15,
            "weightBrutto": 0.9
          },
        "characteristics": [
          {
            "id": 40,
            "value": [
              "Искусственный мех"
            ]
          },
          {
            "id": 1023,
            "value": [
              "Искусственный мех"
            ]
          },
          {
            "id": 18769,
            "value": [
              "зима"
            ]
          }
        ],
        "sizes": [
          {
            "techSize": "45",
            "price": 1000,
            "skus": [
              "111111111133111"
            ]
          }
        ]
      },
    ]
  }
]

type ExportProductsToWildberriesStep = Array<WildberriesProduct>

const exportProductsToWildberriesStep = createStep(
  "export-products-to-wildberries",
  async (products: ExportProductsToWildberriesStep, { container }) => {
    const wildberriesModuleService: WildberriesModuleService = container.resolve(WB_MODULE)

    const response = await wildberriesModuleService.createProductCards(products)

    return new StepResponse(response)
  }
)

type ExportProductsToWildberriesWorkflow = Array<WildberriesProduct>

const exportProductsToWildberriesWorkflow = createWorkflow(
  "export-products-to-wildberries",
  (products: ExportProductsToWildberriesWorkflow) => {
    const response = exportProductsToWildberriesStep(products)

    return new WorkflowResponse(response)
  }
)

export default exportProductsToWildberriesWorkflow

