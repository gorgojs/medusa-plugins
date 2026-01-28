import { createContext } from "react"
import ExtensionApp from "../layout/extension-app"

type ExtensionContextValue = ExtensionApp["api"]

export const ExtensionContext = createContext<ExtensionContextValue | null>(
  null
)
