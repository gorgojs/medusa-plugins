import { MedusaService } from "@medusajs/framework/utils"
import { YandexMarketExport } from "./models/yandex_market_export"

class YandexMarketExportService extends MedusaService({
  YandexMarketExport,
}) {}

export default YandexMarketExportService
