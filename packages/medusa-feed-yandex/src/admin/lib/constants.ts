export type ScheduleOption = {
  value: string
  label: string
}

export const scheduleData: ScheduleOption[] = [
  { value: "10", label: "10 min" },
  { value: "30", label: "30 min" },
  { value: "60", label: "1 hour" },
  { value: "120", label: "2 hours" },
  { value: "180", label: "3 hours" },
  { value: "360", label: "6 hours" },
  { value: "720", label: "12 hours" },
  { value: "1440", label: "1 day" }
]