export const getRelativeDate = (date: string | Date) => {
  const d = typeof date === "string" ? new Date(date) : date
  const diffMs = Date.now() - d.getTime()
  const sec = Math.max(0, Math.floor(diffMs / 1000))
  const min = Math.floor(sec / 60)
  const hr = Math.floor(min / 60)
  const day = Math.floor(hr / 24)

  if (sec < 30) return "just now"
  if (min < 1) return "less than a minute ago"
  if (min === 1) return "about 1 minute ago"
  if (min < 60) return `about ${min} minutes ago`
  if (hr === 1) return "about 1 hour ago"
  if (hr < 24) return `about ${hr} hours ago`
  if (day === 1) return "about 1 day ago"
  return `about ${day} days ago`
}

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
