import { Settings } from "../../types/settings"

export type ExportsResponse = {
  exports: Export[]
  count: number
  limit: number
  offset: number
}

export type CreatedExports = {
  title: string
  file_name: string
  is_active: boolean
  schedule?: number
}[]

export type Export = {
  id: string
  title?: string
  file_name?: string
  file_path?: string
  last_export_at?: Date
  is_active?: boolean
  schedule?: number
  settings?: Settings
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}

export type ExportResponse = {
  export: Export
}