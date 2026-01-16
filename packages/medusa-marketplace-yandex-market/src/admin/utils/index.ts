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
