import { AbstractMarketplaceProvider } from "../utils";

export class SystemMarketplaceProvider extends AbstractMarketplaceProvider {
  static identifier = "system"

  async get(): Promise<string> {
    return "SystemMarketplaceProvider"
  }
}

export default SystemMarketplaceProvider
