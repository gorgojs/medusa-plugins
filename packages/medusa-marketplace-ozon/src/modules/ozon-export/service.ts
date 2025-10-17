import { MedusaService } from "@medusajs/framework/utils"
import { OzonExport } from "./models/ozon-export"

class OzonExportModuleService extends MedusaService({
  OzonExport,
}) {}

export default OzonExportModuleService
