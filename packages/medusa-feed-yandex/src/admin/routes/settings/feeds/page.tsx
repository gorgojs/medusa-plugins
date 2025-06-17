import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Rss } from "@medusajs/icons"
import {
  Container,
  createDataTableColumnHelper,
  DataTable,
  DataTablePaginationState,
  useDataTable,
  useToggleState,
  FocusModal,
  Button,
  Heading,
  Text,
  Input,
  Label,
  Select,
  Tooltip,
  Switch,
  Badge
} from "@medusajs/ui"
import { InformationCircleSolid, SquareGreenSolid, SquareRedSolid } from "@medusajs/icons"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { t } from "i18next"
import { sdk } from "../../../lib/sdk"
import { Header } from "../../../components/header"
import { DateCell } from "../../../components/table/date-cell"
import { PlaceholderCell } from "../../../components/table/placeholder-cell"
import { scheduleData, fileExtension } from "../../../lib/constants"
import type { Feed, FeedsResponse, CreatedFeeds } from "../../../types"
import { I18n } from "../../../components/utilities/i18n"
import { getScheduleLabel } from "../../../lib/utils"

const PAGE_SIZE = 20

const FeedsPage = () => {
  const { t } = useTranslation()
  const columnHelper = createDataTableColumnHelper<Feed>()

  const [createOpen, openCreate, closeCreate] = useToggleState()
  const [title, setTitle] = useState("")
  const [fileName, setFileName] = useState("")
  const [schedule, setSchedule] = useState<number>(30)
  const [isActive, setIsActive] = useState(false)

  const navigate = useNavigate()
  const limit = PAGE_SIZE
  const [pagination, setPagination] = useState<DataTablePaginationState>({
    pageSize: limit,
    pageIndex: 0,
  })

  const offset = useMemo(() => pagination.pageIndex * limit, [pagination])

  const { data, isLoading } = useQuery<FeedsResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/feeds`, {
        query: { limit, offset },
      }),
    queryKey: [["feeds"]],
  })

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (newFeed: { feeds: CreatedFeeds }) => {
      return sdk.client.fetch(`/admin/feeds`, {
        method: "POST",
        body: newFeed,
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [["feeds"]],
      })
      setTitle("")
      setFileName("")
      setSchedule(30)
      setIsActive(false)
    },
    onError: (error) => {
      console.error("Error creating feed:", error)
    },
  })

  const saveFeed = () => {
    const createdFeed: CreatedFeeds = [{
      title: title,
      file_name: fileName,
      is_active: isActive,
      schedule: Number(schedule),
    }]
    mutate({ feeds: createdFeed })
    closeCreate()
  }

  const columns = [
    columnHelper.accessor("title", { header: t("feeds.fields.title") }),
    columnHelper.accessor("file_name", {
      header: t("feeds.fields.fileName"),
      cell: ({ row }) => {
        return row.original.file_name + fileExtension
      },  
    }),
    columnHelper.accessor("file_path", {
      header: t("feeds.fields.feedUrl"),
      cell: ({ row }) => {
        const filePath = row.original.file_path
        const id = row.original.id
        const fileName = row.original.file_name

        if (!filePath || !id || !fileName) {
          return <PlaceholderCell />
        }

        try {
          const url = new URL(filePath)
          const fullLink = `${url.origin}/feeds/${id}/${fileName}${fileExtension}`
          return (
            <a href={fullLink} target="_blank" rel="noopener noreferrer">
              <Badge size="xsmall">
                <Text size="small" className="text-ui-fg-interactive">
                  {fullLink}
                </Text>
              </Badge>
            </a>
          )
        } catch {
          return <PlaceholderCell />
        }
      },
    }),
    columnHelper.accessor("last_export_at", {
      header: t("feeds.fields.lastExport"),
      cell: ({ getValue }) => {
        const rawDate = getValue()
        return <DateCell date={rawDate} mode="relative" />
      }
    }),
    columnHelper.accessor("is_active", {
      header: t("feeds.fields.status"),
      cell: ({ getValue }) => {
        const isActive = getValue()
        if (isActive) {
          return (
            <div className="flex items-center gap-1"><SquareGreenSolid />
              <Text size="small" leading="compact" className="whitespace-pre-line text-pretty">
                {t("general.active")}
              </Text>
            </div>
          )
        } else {
          return (
            <div className="flex items-center gap-1">
              <SquareRedSolid />
              <Text size="small" leading="compact" className="whitespace-pre-line text-pretty">
                {t("general.inactive")}
              </Text>
            </div>
          )
        }
      }
    }),
    columnHelper.accessor("schedule", {
      header: t("feeds.fields.schedule"),
      cell: ({ getValue }) => {
        const value = getValue()
        const option = scheduleData.find((item) => item.value === value)
        return (
          <Badge size="2xsmall">
            <Text size="xsmall" leading="compact">
              {getScheduleLabel(option?.value || schedule)}
            </Text>
          </Badge>)
      },
    }),
  ]

  const table = useDataTable({
    columns,
    data: data?.feeds || [],
    getRowId: (row) => row.id,
    rowCount: data?.count || 0,
    isLoading,
    pagination: {
      state: pagination,
      onPaginationChange: setPagination,
    },
    onRowClick(_, row) {
      navigate(`${row.id}`)
    },
  })

  return (
    <>
      <I18n />
      <Container className="divide-y p-0">
        
        <DataTable instance={table}>
          <Header
            key={createOpen ? "create-open" : "create-closed"}
            title={t("feeds.domain")}
            actions={[
              {
                type: "button",
                props: {
                  children: t("actions.create"),
                  variant: "secondary",
                  onClick: () => openCreate(),
                },
              },
            ]}
          />
          <DataTable.Table />
          <DataTable.Pagination />
        </DataTable>

        <FocusModal open={createOpen} onOpenChange={(open) => { if (!open) closeCreate() }}>
          <FocusModal.Content>
            <FocusModal.Header />

            <FocusModal.Body className="flex flex-col items-center py-16">
              <div className="flex w-full max-w-lg flex-col gap-y-8">
                <div className="flex flex-col gap-y-1">
                  <Heading>{t("feeds.create.title")}</Heading>
                  <Text className="text-ui-fg-subtle">
                    {t("feeds.create.description")}
                  </Text>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="title" size="small">{t("feeds.fields.title")}</Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="file_name" size="small">{t("feeds.fields.fileName")}</Label>
                  <Input id="file_name" value={fileName} onChange={(e) => setFileName(e.target.value)} />
                </div>
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="schedule_selector" size="small">{t("feeds.fields.schedule")}</Label>
                    <Tooltip content={t("feeds.tooltips.schedule")}>
                      <InformationCircleSolid className="text-ui-fg-subtle" />
                    </Tooltip>
                  </div>
                  <Select onValueChange={(v) => setSchedule(Number(v))} value={String(schedule)}>
                    <Select.Trigger>
                      <Select.Value />
                    </Select.Trigger>
                    <Select.Content sideOffset={100}>
                      {scheduleData.map((item) => (
                        <Select.Item key={item.value} value={String(item.value)}>
                          {getScheduleLabel(item.value)}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select>
                </div>
                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="is-active-switch" size="small">{t("feeds.activityContainer.title")}</Label>
                  <Container>
                    <div className="flex gap-x-4">
                      <Switch id="is-active-switch" checked={isActive} onCheckedChange={() => setIsActive(prev => !prev)} />
                      <div className="flex flex-col gap-y-1">
                        <Label size="small" htmlFor="is-active-switch">{t("general.active")}</Label>
                        <Text size="small" className="text-ui-fg-muted">
                          {t("feeds.activityContainer.subtitle")}
                        </Text>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </FocusModal.Body>

            <FocusModal.Footer>
              <FocusModal.Close>
                <Button variant="secondary">{t("actions.cancel")}</Button>
              </FocusModal.Close>
              <Button onClick={saveFeed}>{t("actions.save")}</Button>
            </FocusModal.Footer>

          </FocusModal.Content>
        </FocusModal>
      </Container>
    </>
  )
}

export const config = defineRouteConfig({
  label: t("feeds.domain"),
  icon: Rss,
})

export const handle = {
  breadcrumb: () => t("feeds.domain"),
}

export default FeedsPage
