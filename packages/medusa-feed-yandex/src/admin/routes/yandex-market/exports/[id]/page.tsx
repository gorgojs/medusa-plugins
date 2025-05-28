import {
  Container,
  Text,
  Drawer,
  Button,
  Heading,
  useToggleState,
  Input,
  Label,
  Switch,
  Select,
  Prompt,
  Badge,
  toast
} from "@medusajs/ui"
import { Pencil, Trash, SquareGreenSolid, SquareRedSolid, Folder } from "@medusajs/icons"
import { useParams, useNavigate } from "react-router-dom"
import { SectionRow } from "../../../../components/export-section-row"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { sdk } from "../../../../lib/sdk"
import { Header } from "../../../../components/header"
import { useState, useEffect } from "react"
import { TwoColumnLayout } from "../../../../layouts/two-column"
import { scheduleData } from "../../../../lib/constants"
import type { Export, ExportResponse } from "../../../../types"
import CategoryTable from "../../../../components/category-table"

const FILE_EXTENTION = ".xml"

let exportTitle: string | undefined

const ExportDetailsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [deleteExportOpen, openDeleteExport, closeDeleteExport] = useToggleState()
  const [deleteExportFileOpen, openDeleteExportFile, closeDeleteExportFile] = useToggleState()
  const [editOpen, openEdit, closeEdit] = useToggleState()
  const [editShopOpen, openEditShop, closeEditShop] = useToggleState()
  const [title, setTitle] = useState("")
  const [fileName, setFileName] = useState("")
  const [schedule, setSchedule] = useState<string>()
  const [isActive, setIsActive] = useState(true)

  const [shopName, setShopName] = useState("")
  const [shopCompany, setShopCompany] = useState("")
  const [shopUrl, setShopUrl] = useState("")

  const { data, isError, error } = useQuery<ExportResponse>({
    queryFn: () => sdk.client.fetch(`/admin/yandex-market/exports/${id}`),
    queryKey: ["export", id],
  })

  useEffect(() => {
    if (data?.export) {
      setTitle(data.export.title!)
      setFileName(data.export.file_name!)
      setIsActive(data.export.is_active!)
      setSchedule(String(data.export.schedule))
      setShopName(data.export.settings?.name!)
      setShopCompany(data.export.settings?.company!)
      setShopUrl(data.export.settings?.url!)
    }
  }, [data])
  const exportData = data?.export
  exportTitle = exportData?.title
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: async (updatedExport: Export) => {
      return sdk.client.fetch(`/admin/yandex-market/exports/${updatedExport.id}`, {
        method: "PATCH",
        body: updatedExport,
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["export", id],
      })
      queryClient.invalidateQueries({ queryKey: [["exports"]] })
    },
    onError: (error) => {
      console.error("Error updating export:", error)
    }
  })

  const { mutate: deleteMutate } = useMutation({
    mutationFn: async (exportId: { ids: string[] }) => {
      return sdk.client.fetch(`/admin/yandex-market/exports/${exportId.ids[0]}`, {
        method: "DELETE",
        body: exportId,
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["export", id],
      })
      queryClient.invalidateQueries({ queryKey: [["exports"]] })
    },
    onError: (error) => {
      console.error("Error deleting export:", error)
    }
  })

  const { mutate: deleteExportFileMutate } = useMutation({
    mutationFn: async (exportId: string) => {
      return sdk.client.fetch(`/admin/yandex-market/exports/${exportId}/delete-file`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["export", id],
      })
      queryClient.invalidateQueries({ queryKey: [["exports"]] })
    },
    onError: (error) => {
      console.error("Error deleting file:", error)
      toast.error("Error", {
        description: "Failed to delete file",
      })
    }
  })

  const { mutate: launchMutate } = useMutation({
    mutationFn: async (exportId: string) => {
      return sdk.client.fetch(`/admin/yandex-market/exports/${exportId}/launch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["export", id],
      })
      queryClient.invalidateQueries({ queryKey: [["exports"]] })
      toast.success("Success", {
        description: "Export was started successfully",
      })
    },
    onError: (error) => {
      console.error("Error launching export:", error)
      toast.error("Error", {
        description: "Failed to launch export",
      })
    }
  })

  const saveExportSettings = () => {
    const updatedExport: Export = {
      id: id!,
      title: title,
      file_name: fileName,
      is_active: isActive,
      schedule: Number(schedule)
    }
    mutate(updatedExport)
    closeEdit()
  }

  const saveShopSettings = () => {
    const updatedExport: Export = {
      id: id!,
      settings: {
        name: shopName,
        company: shopCompany,
        url: shopUrl,
        platform: "Medusa"
      }
    }
    mutate(updatedExport)
    closeEditShop()
  }

  const deleteExport = () => {
    const deletedExport = {
      ids: [id!]
    }
    deleteMutate(deletedExport)
    navigate(`../`)
  }

  const deleteExportFile = () => {
    deleteExportFileMutate(id!)
    closeDeleteExportFile()
  }

  if (isError) {
    throw error
  }

  const launchExport = async () => {
    await launchMutate(data!.export.id)
  }

  type CategorySetting = {
    id: string
    parentId?: string
    value: string
  }

  const saveExportCategories = (
    selectedCategories: CategorySetting[]
  ) => {
    const updatedExport = {
      id: id!,
      settings: { categories: selectedCategories },
    }
    mutate(updatedExport)
  }

  const selectedIds: string[] =
    data?.export?.settings?.categories?.map((c) => c.id) ?? []

  return (
    <TwoColumnLayout
      firstCol={
        <>
          <Container className="divide-y p-0">
            <Header
              key={`${editOpen ? "edit-open" : "edit-closed"}-${deleteExportOpen ? "delete-export-open" : "delete-export-closed"}-${deleteExportFileOpen ? "delete-export-file-open" : "delete-export-file-closed"}`}

              title={exportData?.title!}
              subtitle="Basic information about export"
              status={{
                color: exportData?.is_active ? "green" : "red",
                text: exportData?.is_active ? "Active" : "Inactive"
              }}
              actions={[
                {
                  type: "button",
                  props: {
                    children: "Launch now",
                    variant: "secondary",
                    onClick: () => {
                      launchExport()
                    },
                  },
                },
                {
                  type: "action-menu",
                  props: {
                    groups: [
                      {
                        actions: [
                          {
                            icon: <Pencil />,
                            label: "Edit",
                            onClick: () => openEdit(),
                          },
                          {
                            icon: <Folder />,
                            label: "Delete file",
                            onClick: () => openDeleteExportFile(),
                          },
                          {
                            icon: <Trash />,
                            label: "Delete",
                            onClick: () => openDeleteExport(),
                          },
                        ],
                      },
                    ],
                  },
                },
              ]}
            />
            <SectionRow
              title="ID"
              value={exportData?.id || "-"}
            />
            <SectionRow
              title="File name"
              value={exportData?.file_name+FILE_EXTENTION || "-"}
              className="break-all"
            />
            <SectionRow
              title="File URL"
              value={
                exportData?.file_path && exportData?.id && exportData?.file_name ? (
                  (() => {
                    const url = new URL(exportData.file_path)
                    const exportViewUrl = `${url.origin}/yandex-market/exports/${exportData.id}/${exportData.file_name}${FILE_EXTENTION}`
                    return (
                      <a href={exportViewUrl} target="_blank" rel="noopener noreferrer">
                        <Badge size="base" className="h-full">
                          <Text size="xsmall" className="text-ui-fg-interactive break-all">{exportViewUrl}</Text>
                        </Badge>
                      </a>
                    )
                  })()
                ) : (
                  "-"
                )
              }
            />
            <SectionRow
              title="Schedule"
              value={
                exportData?.schedule
                  ? (() => {
                    const option = scheduleData.find(
                      (opt) => opt.value === String(exportData.schedule)
                    )
                    return (
                      <Badge size="2xsmall">
                        <Text size="small" leading="compact">
                          {option?.label || exportData.schedule}
                        </Text>
                      </Badge>
                    )
                  })()
                  : "-"
              }
            />
            <SectionRow
              title="File path"
              value={exportData?.file_path ?
                <a href={exportData?.file_path} target="_blank" rel="noopener noreferrer">
                  <Badge size="base" className="h-full">
                    <Text size="xsmall" className="text-ui-fg-interactive break-all">{exportData?.file_path}</Text>
                  </Badge>
                </a> : "-"} />
            <SectionRow title="Last export" value={exportData?.last_export_at ? new Date(exportData.last_export_at).toLocaleString() : "-"} />
            <SectionRow title="Created" value={exportData?.created_at ? new Date(exportData.created_at).toLocaleString() : "-"} />
            <SectionRow title="Updated" value={exportData?.updated_at ? new Date(exportData.updated_at).toLocaleString() : "-"} />

            <Drawer open={editOpen} onOpenChange={(open) => {
              if (!open) closeEdit()
            }}>
              <Drawer.Content>
                <Drawer.Header>
                  <Drawer.Title asChild><Heading>Edit Export</Heading></Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <div className="flex flex-col gap-y-4">
                    <Container>
                      <div className="flex gap-x-4">
                        <Switch id="is-active-switch" checked={isActive} onCheckedChange={() => setIsActive(prev => !prev)} />
                        <div className="flex flex-col gap-y-1">
                          <Label size="small" htmlFor="is-active-switch">Active</Label>
                          <Text size="small" className="text-ui-fg-muted">
                            When unchecked, export will not run on schedule.
                          </Text>
                        </div>
                      </div>
                    </Container>
                    <div className="flex flex-col gap-y-2">
                      <Label htmlFor="title" size="small">Title</Label>
                      <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <Label size="small" htmlFor="export-file-name-input">File name</Label>
                      <div className="relative">
                        <Input className="pr-14" id="export-file-name-input" value={fileName} onChange={(e) => setFileName(e.target.value)} />
                        <div className="absolute inset-y-0 right-0 z-10 flex w-12 items-center justify-center border-l">
                          <p className="font-medium font-sans txt-compact-small text-ui-fg-muted">
                            {FILE_EXTENTION}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <Label size="small" htmlFor="schedule-selector">Schedule</Label>
                      <Select value={schedule} onValueChange={setSchedule}>
                        <Select.Trigger>
                          <Select.Value />
                        </Select.Trigger>
                        <Select.Content sideOffset={100}>
                          {scheduleData.map((item) => (
                            <Select.Item key={item.value} value={item.value}>
                              {item.label}
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select>
                    </div>

                  </div>
                </Drawer.Body>
                <Drawer.Footer>
                  <div className="flex items-center justify-end gap-x-2">
                    <Drawer.Close asChild>
                      <Button size="small" variant="secondary">Cancel</Button>
                    </Drawer.Close>
                    <Button size="small" type="submit" onClick={saveExportSettings}>Save</Button>
                  </div>
                </Drawer.Footer>
              </Drawer.Content>
            </Drawer>
            <Prompt open={deleteExportOpen} onOpenChange={(open) => {
              if (!open) closeDeleteExport()
            }}>
              <Prompt.Content>
                <Prompt.Header>
                  <Prompt.Title>Delete export</Prompt.Title>
                  <Prompt.Description>
                    Are you sure? This cannot be undone.
                  </Prompt.Description>
                </Prompt.Header>
                <Prompt.Footer>
                  <Prompt.Cancel>Cancel</Prompt.Cancel>
                  <Prompt.Action onClick={() => deleteExport()}>Delete</Prompt.Action>
                </Prompt.Footer>
              </Prompt.Content>
            </Prompt>
            <Prompt open={deleteExportFileOpen} onOpenChange={(open) => {
              if (!open) closeDeleteExportFile()
            }}>
              <Prompt.Content>
                <Prompt.Header>
                  <Prompt.Title>Delete export file</Prompt.Title>
                  <Prompt.Description>
                    Are you sure? This cannot be undone.
                  </Prompt.Description>
                </Prompt.Header>
                <Prompt.Footer>
                  <Prompt.Cancel>Cancel</Prompt.Cancel>
                  <Prompt.Action onClick={() => deleteExportFile()}>Delete</Prompt.Action>
                </Prompt.Footer>
              </Prompt.Content>
            </Prompt>
          </Container>
          <CategoryTable
            defaultSelectedIds={selectedIds}
            onSave={async (selected) => {
              try {
                await saveExportCategories(selected)
                toast.success("Success", {
                  description: "Categories saved successfully",
                })
              } catch (e) {
                console.error(e)
                toast.error("Error", {
                  description: "Failed to save categories",
                })
              }
            }}
          />
        </>

      }
      secondCol={
        <Container className="divide-y p-0">
          <Header
            key={`${editShopOpen ? "edit-shop-open" : "edit-shop-closed"}`}

            title="Shop"
            subtitle="Description of the shop for which you are preparing the file"
            actions={[
              {
                type: "action-menu",
                props: {
                  groups: [
                    {
                      actions: [
                        {
                          icon: <Pencil />,
                          label: "Edit",
                          onClick: () => openEditShop(),
                        },
                      ],
                    },
                  ],
                },
              },
            ]}
          />
          <SectionRow title="Name" value={exportData?.settings?.name || "-"} />
          <SectionRow title="Company" value={exportData?.settings?.company || "-"} />
          <SectionRow title="Url" value={exportData?.settings?.url || "-"} />
          <SectionRow title="Platform" value="Medusa" />
          <Drawer open={editShopOpen} onOpenChange={(open) => {
            if (!open) closeEditShop()
          }}>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title asChild><Heading>Edit Shop</Heading></Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="shop-name" size="small">Name</Label>
                    <Input id="shop-name" value={shopName} onChange={(e) => setShopName(e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label size="small" htmlFor="shop-company">Company</Label>
                    <Input id="shop-company" value={shopCompany} onChange={(e) => setShopCompany(e.target.value)} />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <Label htmlFor="shop-url" size="small">URL</Label>
                    <Input id="shop-url" value={shopUrl} onChange={(e) => setShopUrl(e.target.value)} />
                  </div>
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <div className="flex items-center justify-end gap-x-2">
                  <Drawer.Close asChild>
                    <Button size="small" variant="secondary">Cancel</Button>
                  </Drawer.Close>
                  <Button size="small" type="submit" onClick={saveShopSettings}>Save</Button>
                </div>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer>
        </Container>
      }
    />
  )
}

export const handle = {
  breadcrumb: () => exportTitle
}

export default ExportDetailsPage