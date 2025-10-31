import { MedusaService } from "@medusajs/framework/utils"
import { YMExportLog } from "./models/yandex_market_export_log"

class YandexMarketExportLogService extends MedusaService({
  YMExportLog,
}) {}

export default YandexMarketExportLogService
