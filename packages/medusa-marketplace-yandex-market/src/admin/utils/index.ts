export const getFullDate = ({
    date,
    includeTime = true,
  }: {
    date: string | Date
    includeTime?: boolean
  }) => {
    const d = typeof date === "string" ? new Date(date) : date

    return new Intl.DateTimeFormat(undefined, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      ...(includeTime
        ? {
          hour: "2-digit",
          minute: "2-digit",
        }
        : {}),
    }).format(d)
  }


export const formatDateTime = (value: unknown) => {
  if (!value) return "-"
  const d = value instanceof Date ? value : new Date(value as any)
  return Number.isNaN(d.getTime()) ? String(value) : d.toLocaleString()
}

export const jsonPreview = (value: unknown) => {
  if (value == null) return "-"
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}
 