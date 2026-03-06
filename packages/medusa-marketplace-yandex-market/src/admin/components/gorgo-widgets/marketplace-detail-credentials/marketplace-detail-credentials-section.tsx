import { Badge, toast, Toaster } from "@medusajs/ui"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Eye, EyeSlash, Pencil } from "@medusajs/icons"
import { Container } from "../../common/container"
import { Header } from "../../common/header"
import { SectionRow } from "../../common/section-row"
import { MarketplaceDetailCredentialsEditModal } from "./marketplace-detail-credentials-edit-modal"

function getRedactedKey(key?: string): string {
  if (!key) {
    return ""
  }

  if (key.length <= 6) {
    return key
  }

  const firstThree = key.slice(0, 4)
  const lastTwo = key.slice(-2)
  const bulletsCount = Math.min(key.length - 6, 15)

  return `${firstThree}${"•".repeat(bulletsCount)}${lastTwo}`
}

type MarketplaceDetailCredentialsSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

export const MarketplaceDetailCredentialsSection = ({
  marketplace,
}: MarketplaceDetailCredentialsSectionProps) => {
  const [editOpen, setEditOpen] = useState(false)
  const [showFullKey, setShowFullKey] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if ((location.state as any)?.openEdit) {
      setEditOpen(true)
    }
  }, [location.state])

  const api_key = marketplace.credentials?.api_key as string
  const displayedKey = showFullKey ? api_key : getRedactedKey(api_key)

  const handleCopy = () => {
    navigator.clipboard.writeText(api_key)

    toast.success("Copied API key to clipboard")
  }

  return (
    <>
      <Toaster />
      <Container>
        <Header
          title="Credentials"
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
                        onClick: () => {
                          setEditOpen(true)
                        },
                      },
                    ],
                  },
                ],
              },
            },
          ]}
        />
        <SectionRow
          title="API key"
          value={
            api_key ? (
              <div className="flex items-center gap-2 min-w-0">
                <span onClick={handleCopy} className="bg-ui-tag-neutral-bg text-ui-tag-neutral-text border-ui-tag-neutral-border items-center gap-x-0.5 border box-border txt-compact-xsmall-plus py-px h-6 rounded-md px-1.5 cursor-pointer truncate">
                  {displayedKey}
                </span>
                <button
                  onClick={() => setShowFullKey(!showFullKey)}
                  className="text-ui-fg-muted hover:text-ui-fg-base"
                >
                  {showFullKey ? <EyeSlash /> : <Eye />}
                </button>
              </div>
            ) : (
              "-"
            )
          }
        />
        <SectionRow
          title="Business ID"
          value={
            marketplace.credentials.business_id ? (
              <Badge size="xsmall" color="grey">
                {marketplace.credentials.business_id as React.ReactNode}
              </Badge>
            ) : (
              "-"
            )
          }
        />
      </Container>

      <MarketplaceDetailCredentialsEditModal
        marketplace={ marketplace }
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
