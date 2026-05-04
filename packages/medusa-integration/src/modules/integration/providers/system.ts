import { AbstractIntegrationProvider } from "../utils";

export class SystemIntegrationProvider extends AbstractIntegrationProvider {
  static identifier = "system"

  async get(): Promise<string> {
    return "SystemIntegrationProvider"
  }
}

export default SystemIntegrationProvider
