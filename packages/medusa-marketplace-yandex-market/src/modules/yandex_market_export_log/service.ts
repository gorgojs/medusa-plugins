import { MedusaService } from "@medusajs/framework/utils"
import { YandexMarketExport } from "./models/yandex_market_export"

class YandexMarketExportLogService extends MedusaService({
  YandexMarketExport,
}) {}

export default YandexMarketExportLogService
