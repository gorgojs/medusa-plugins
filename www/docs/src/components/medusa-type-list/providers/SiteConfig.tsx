"use client"

import React, { createContext, useContext, useState } from "react"

type SiteConfigType = {
  baseUrl: string
  basePath: string
}

type SiteConfigContextType = {
  config: SiteConfigType
  setConfig: React.Dispatch<React.SetStateAction<SiteConfigType>>
}

const SiteConfigContext = createContext<SiteConfigContextType | null>(null)

type SiteConfigProviderProps = {
  config?: Partial<SiteConfigType>
  children?: React.ReactNode
}

export const SiteConfigProvider = ({
  config: initConfig,
  children,
}: SiteConfigProviderProps) => {
  const [config, setConfig] = useState<SiteConfigType>({
    baseUrl:
      typeof window !== "undefined" ? window.location.origin : "",
    basePath: "",
    ...initConfig,
  })

  return (
    <SiteConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </SiteConfigContext.Provider>
  )
}

export const useSiteConfig = (): SiteConfigContextType => {
  const context = useContext(SiteConfigContext)

  if (!context) {
    throw new Error("useSiteConfig must be used inside a SiteConfigProvider")
  }

  return context
}
