import { PropsWithChildren } from "react"
import { ExtensionContext } from "./extension-context"
import ExtensionApp from "../layout/extension-app"

type ExtensionProviderProps = PropsWithChildren<{
  api: ExtensionApp["api"]
}>

export const ExtensionProvider = ({
  api,
  children,
}: ExtensionProviderProps) => {
  return (
    <ExtensionContext.Provider value={api}>
      {children}
    </ExtensionContext.Provider>
  )
}
