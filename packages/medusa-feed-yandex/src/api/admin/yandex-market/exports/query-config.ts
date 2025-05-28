export const defaultAdminExportFields = [
  "id",
  "title",
  "file_name",
  "file_path",
  "is_active",
  "schedule",
  "last_export_at",
  "created_at",
  "updated_at"
]

export const retrieveTransformQueryConfig = {
  defaults: defaultAdminExportFields,
  isList: false,
}

export const listTransformQueryConfig = {
  defaults: defaultAdminExportFields,
  defaultLimit: 20,
  isList: true,
}