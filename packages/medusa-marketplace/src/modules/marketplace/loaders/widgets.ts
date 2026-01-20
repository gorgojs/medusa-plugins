import {
  LoaderOptions,
  ModuleProvider,
  ModulesSdkTypes,
} from "@medusajs/framework/types"

// import { widgetsAppInstance } from "../utils/widgets-app-instance"

import * as widgets from "./widgets"
import * as providers from "../providers"

export default async ({
  container,
  options,
}: LoaderOptions<
  (
    | ModulesSdkTypes.ModuleServiceInitializeOptions
    | ModulesSdkTypes.ModuleServiceInitializeCustomDataLayerOptions
  ) & { providers: ModuleProvider[] }
>): Promise<void> => {
  // widgetsAppInstance.registerWidgets()

  // options?.providers.forEach((provider) => {
  //   if (typeof provider.getWidgets === "function")
  //     widgetsAppInstance.registerWidgets(provider.getWidgets())
  // })
}
