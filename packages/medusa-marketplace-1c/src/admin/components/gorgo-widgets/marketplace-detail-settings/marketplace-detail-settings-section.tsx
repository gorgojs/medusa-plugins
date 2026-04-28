import { Badge } from "@medusajs/ui"
import { useState } from "react"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Pencil } from "@medusajs/icons"
import { Container } from "../../common/container"
import { Header } from "../../common/header"
import { SectionRow } from "../../common/section-row"
import { MarketplaceDetailSettingsEditModal } from "./marketplace-detail-settings-edit-modal"
import { OneCSettings } from "../../../types"

type MarketplaceDetailSettingsSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailSettingsSection = ({
  marketplace,
}: MarketplaceDetailSettingsSectionProps) => {
  const [editOpen, setEditOpen] = useState(false)
  const settings = (marketplace.settings || {}) as OneCSettings

  const formatBytes = (bytes?: number) => {
    if (!bytes) return "-"
    if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(0)} MB`
    if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`
    return `${bytes} B`
  }

  const attributeLabels: Record<string, string> = {
    height: "Height",
    width: "Width",
    length: "Length",
    weight: "Weight",
    mid_code: "MID Code",
    hs_code: "HS Code",
    origin_country: "Origin Country",
  }

  const filledAttributes = Object.entries(settings.attributes || {}).filter(
    ([, v]) => v
  )

  return (
    <>
      <Container>
        <Header
          title="1C Sync Settings"
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
                        onClick: () => setEditOpen(true),
                      },
                    ],
                  },
                ],
              },
            },
          ]}
        />
        <SectionRow
          title="Use ZIP compression"
          value={settings.useZip ? "Yes" : "No"}
        />
        <SectionRow
          title="Chunk size"
          value={formatBytes(settings.chunkSize)}
        />
      </Container>

      {filledAttributes.length > 0 && (
        <Container>
          <Header title="Attribute Mappings" />
          {filledAttributes.map(([key, value]) => (
            <SectionRow
              key={key}
              title={attributeLabels[key] || key}
              value={
                <Badge size="xsmall" color="grey">
                  {value}
                </Badge>
              }
            />
          ))}
        </Container>
      )}

      <MarketplaceDetailSettingsEditModal
        marketplace={marketplace}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
