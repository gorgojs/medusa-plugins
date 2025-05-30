import { Settings } from "../../types/settings"

export type FeedsResponse = {
  feeds: Feed[]
  count: number
  limit: number
  offset: number
}

export type CreatedFeeds = {
  title: string
  file_name: string
  is_active: boolean
  schedule?: number
}[]

export type Feed = {
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

export type FeedResponse = {
  feed: Feed
}