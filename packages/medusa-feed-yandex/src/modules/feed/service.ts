import { MedusaService } from "@medusajs/framework/utils"
import Feed from "./models/feed"

class FeedModuleService extends MedusaService({
  Feed
}){
}

export default FeedModuleService