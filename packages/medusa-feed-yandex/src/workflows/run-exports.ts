import { Modules } from "@medusajs/framework/utils"
import {
  createStep,
  StepResponse,
  createWorkflow,
  WorkflowResponse,
  transform,
  WorkflowData
} from '@medusajs/framework/workflows-sdk'
import { MARKETPLACE_YANDEX_MARKET_MODULE } from '../modules/marketplace-yandex-market'
import MarketplaceYandexMarketModuleService from '../modules/marketplace-yandex-market/service'
import { updateExportWorkflow } from "../workflows/update-export"
import { deleteExportFilesWorkflow } from "../workflows/delete-export-files"
import { Category } from "../types/settings"
import yml from "yandex-market-language"
import { gzip } from "zlib"
import { promisify } from "util"

export type GetExportsStepInput = string[]

export const getExportsStep = createStep(
  'get-exports-step',
  async (ids: GetExportsStepInput, { container }) => {
    const service = container.resolve<MarketplaceYandexMarketModuleService>(MARKETPLACE_YANDEX_MARKET_MODULE)
    const exportList = ids.length > 0
      ? await service.listYandexMarketCatalogExports({ id: ids })
      : await service.listYandexMarketCatalogExports({ is_active: true })
    return new StepResponse(exportList)
  }
)

export type GenerateExportFilesStepInput = {
  id: string
  title: string | null
  file_name: string | null
  file_path: string | null
  last_export_at: Date | null
  is_active: boolean
  schedule: number
  settings: Record<string, unknown> | null
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
}[]

type CategorySetting = {
  id: string
  parentId?: string
  value: string
}

export const GenerateExportFilesStep = createStep(
  'generate-export-files-step',
  async (exports: GenerateExportFilesStepInput, { container }) => {
    const fileModuleService = container.resolve(Modules.FILE)
    const productModuleService = container.resolve("product")

    const generatedExports = await Promise.all(exports.map(async (exportItem) => {
      const categoryIds = (exportItem.settings?.categories as Category[] ?? []).map(c => c.id)
      const categoryProductsMap = new Map()
      for (const categoryId of categoryIds) {
        const products = await productModuleService.listProducts({
          status: "published",
          categories: {
            id: { $in: [categoryId] }
          },
        })
        categoryProductsMap.set(categoryId, products)
      }

      const offers: any[] = []

      for (const [categoryId, products] of categoryProductsMap.entries()) {
        for (const product of products) {
          const offer: Record<string, any> = {
            id: product.id,
            name: product.title,
            categoryId: categoryId,
          }
          if (product.thumbnail) {
            offer.picture = [product.thumbnail]
          }
          if (product.description) {
            offer.description = product.description
          }
          const weight = parseFloat(product.weight)
          if (!isNaN(weight)) {
            offer.weight = weight
          }
          if (product.length && product.width && product.height) {
            offer.dimensions = [product.length, product.width, product.height]
          }
          if (product.metadata?.barcode && Array.isArray(product.metadata.barcode)) {
            offer.barcode = product.metadata.barcode
          }
          if (product.metadata?.param && Array.isArray(product.metadata.param)) {
            offer.param = product.metadata.param
          }
          if (product.origin_country) {
            offer.country_of_origin = product.origin_country
          }
          if (product.metadata?.manufacturer_warranty === true) {
            offer.manufacturer_warranty = true
          }
          offers.push(offer)
        }
      }

      const YmlObject = {
        name: exportItem.settings?.name || "-",
        company: exportItem.settings?.company || "-",
        url: exportItem.settings?.url || "-",
        platform: exportItem.settings?.platform || "-",
        categories: exportItem.settings?.categories || [],
        offers,
      }
      const ymlString = yml(YmlObject, { validate: false }).end({ pretty: true })
      const ymlBuffer = Buffer.from(ymlString, "utf-8")
      const gzipAsync = promisify(gzip)
      const gzipedBuffer = await gzipAsync(ymlBuffer)
      
      const fileDTO = await fileModuleService.createFiles({
        filename: `${exportItem.file_name}.xml.gz`,
        mimeType: "application/gzip",
        content: gzipedBuffer.toString("binary"),
        access: "public",
      })

      return ({
        id: exportItem.id,
        file_id: fileDTO.id,
        file_url: fileDTO.url
      })
    }))

    return new StepResponse(generatedExports)
  }
)

export type RunExportWorkflowInput = {
  ids: string[]
}

export const runExportsWorkflow = createWorkflow(
  'run-export-workflow',
  (input: WorkflowData<RunExportWorkflowInput>) => {
    const exportItems = getExportsStep(input.ids)
    const generatedExports = GenerateExportFilesStep(exportItems)
    const exportsToDelete = transform(
      generatedExports,
      (data) => data.map((item) => {
        return (item.id)
      })
    )
    deleteExportFilesWorkflow.runAsStep({
      input: { ids: exportsToDelete },
    })
    const exportsToUpdate = transform(
      generatedExports,
      (data) => data.map((item) => {
        return ({
          id: item.id,
          file_path: item.file_url,
          last_export_at: new Date()
        })
      })
    )
    const updatedExports = updateExportWorkflow.runAsStep({
      input: exportsToUpdate,
    })

    return new WorkflowResponse([updatedExports])
  }
)