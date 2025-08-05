import {
  Container,
  FocusModal,
  Button,
  Heading,
  Text,
  Input,
  Label,
  Select,
  Tooltip,
  Switch,
} from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import { useState, useEffect } from "react"
import { t } from "i18next"

import { sdk } from "../../../../lib/sdk"
import { scheduleIntervals } from "../../../../lib/constants"
import type { Feed, ProvidersResponse } from "../../../../types"
import { getScheduleLabel } from "../../../../lib/utils"

export const FeedCreateModal = ({
  stateModal,
  closeModal
}: {
  stateModal: boolean,
  closeModal: () => void
}) => {
  const { data } = useQuery<ProvidersResponse>({
    queryFn: () =>
      sdk.client.fetch(`/admin/feeds/providers`),
    queryKey: [["feed-providers"]],
  })
  const providers = data?.providers ?? []

  const [providerId, setProviderId] = useState<string>("")

  useEffect(() => {
    if (providers.length > 0 && !providerId) {
      setProviderId(providers[0].identifier)
    }
  }, [providers])

  const [title, setTitle] = useState("")
  const [fileName, setFileName] = useState("")
  const [fileNameError, setFileNameError] = useState(false)
  const [schedule, setSchedule] = useState<number>(scheduleIntervals[1])
  const [isActive, setIsActive] = useState(false)

  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (newFeed: { feeds: Partial<Feed>[] }) => {
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
      setProviderId("")
      setTitle("")
      setFileName("")
      setSchedule(scheduleIntervals[1])
      setIsActive(false)
    },
    onError: (error) => {
      console.error("Error creating feed:", error)
    },
  })

  // TODO: change to zod and use medusa form component
  const handleFileNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setFileName(v)
    setFileNameError(v.includes("/"))
  }

  const saveFeed = () => {
    const newFeed: Partial<Feed>[] = [{
      provider_id: providerId,
      title: title,
      file_name: fileName,
      is_active: isActive,
      schedule: Number(schedule),
    }]
    mutate({ feeds: newFeed })
    closeModal()
  }

  // TODO: rewrite this to use a form library
  // to handle validation and submission more effectively
  return (
    <FocusModal open={stateModal} onOpenChange={(open) => { if (!open) closeModal() }}>
      <FocusModal.Content>
        <FocusModal.Header />

        <FocusModal.Body className="flex flex-col items-center py-16 overflow-y-auto">
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
              <Input
                id="file_name"
                value={fileName}
                onChange={handleFileNameChange}
                aria-invalid={fileNameError}
              />
              {fileNameError && (
                <Text size="small" className="text-red-600">
                  {t("feeds.validation.noSlash")}
                </Text>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-1">
                  <Label htmlFor="provider_selector" size="small">{t("feeds.fields.feedFormat")}</Label>
                </div>
                <Select onValueChange={(v) => setProviderId((v))} value={providerId}>
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Content>
                    {providers.map((p) => (
                      <Select.Item key={p.identifier} value={p.identifier}>
                        {p.title}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select>
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
                  <Select.Content>
                    {scheduleIntervals.map((value) => (
                      <Select.Item key={value} value={String(value)}>
                        {getScheduleLabel(value)}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select>
              </div>
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
          <Button onClick={saveFeed} disabled={fileNameError}>
            {t("actions.save")}
          </Button>
        </FocusModal.Footer>

      </FocusModal.Content>
    </FocusModal>
  )
}
