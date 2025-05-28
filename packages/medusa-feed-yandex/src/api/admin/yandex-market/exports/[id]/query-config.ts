export const defaultAdminExportFields = [
  "id",
  "title",
  "file_name",
  "file_path",
  "last_export_at",
  "is_active",
  "schedule",
  "settings",
  "created_at",
  "updated_at"
]

export const retrieveTransformQueryConfig = {
  defaults: defaultAdminExportFields,
  isList: false,
}