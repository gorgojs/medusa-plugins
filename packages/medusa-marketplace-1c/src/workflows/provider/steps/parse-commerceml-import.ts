import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk"
import { CommerceMlImportParser } from "commerceml-parser"
import {
  Catalog,
  Classifier,
  ClassifierGroup,
  ClassifierProperty,
  Product,
} from "../../../types/commerceml"
import { createReadStream } from "fs"
import { ParseFileStepInput } from "../../../types"
import { Logger } from "@medusajs/framework/types"

export const parseCommercemlImportStep = createStep(
  "mp-1c-parse-import-files",
  async (filePaths: ParseFileStepInput, { container }) => {
    const logger = container.resolve<Logger>("logger")
    const importParser = new CommerceMlImportParser()

    const catalogs: Catalog[] = []
    const properties: ClassifierProperty[] = []
    const products: Product[] = []
    const classifierGroups: ClassifierGroup[] = []
    let classifier: Classifier | undefined

    importParser.onClassifier((cl) => {
      classifier = cl
    })
    importParser.onClassifierProperty((cp) => {
      properties.push(cp)
    })
    importParser.onClassifierGroup((cg) => {
      classifierGroups.push(cg)
    })
    importParser.onProduct((p) => {
      products.push(p)
    })
    importParser.onCatalog((c) => {
      catalogs.push(c)
    })

    try {
      if (filePaths) {
        logger.info(`[1C Marketplace] Parsing import files: ${filePaths}`)
        await Promise.all(
          filePaths.map((filePath) =>
            importParser.parse(createReadStream(filePath))
          )
        )
        logger.info(`[1C Marketplace] Parsed import data successfully.`)
      }
    } catch (e) {
      logger.error(
        `[1C Marketplace] Failed to parse import file: ${(e as Error).message}`
      )
      throw e
    }

    return new StepResponse({
      classifier,
      properties,
      classifierGroups,
      products,
    })
  }
)
