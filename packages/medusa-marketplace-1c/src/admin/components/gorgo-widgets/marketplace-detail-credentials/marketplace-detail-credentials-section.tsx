import { Badge, Toaster, toast } from "@medusajs/ui"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Eye, EyeSlash, Pencil } from "@medusajs/icons"
import { Container } from "../../common/container"
import { Header } from "../../common/header"
import { SectionRow } from "../../common/section-row"
import { MarketplaceDetailCredentialsEditModal } from "./marketplace-detail-credentials-edit-modal"

type MarketplaceDetailCredentialsSectionProps = {
  marketplace: MarketplaceHttpTypes.AdminMarketplace
}

function getRedactedKey(key?: string): string {
  if (!key) return ""
  if (key.length <= 6) return key
  const firstThree = key.slice(0, 4)
  const lastTwo = key.slice(-2)
  const bulletsCount = Math.min(key.length - 6, 15)
  return `${firstThree}${"•".repeat(bulletsCount)}${lastTwo}`
}

export const MarketplaceDetailCredentialsSection = ({
  marketplace,
}: MarketplaceDetailCredentialsSectionProps) => {
  const [editOpen, setEditOpen] = useState(false)
  const [showFullPassword, setShowFullPassword] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if ((location.state as any)?.openEdit) {
      setEditOpen(true)
    }
  }, [location.state])

  const login = marketplace.credentials?.login as string
  const password = marketplace.credentials?.password as string
  const displayedPassword = showFullPassword
    ? password
    : getRedactedKey(password)

  const exchangeUrl = `/hooks/1c/${marketplace.id}/exchange`

  return (
    <>
      <Toaster />
      <Container>
        <Header
          title="1C Credentials"
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
          title="Login"
          value={
            login ? (
              <Badge size="xsmall" color="grey">
                {login}
              </Badge>
            ) : (
              "-"
            )
          }
        />
        <SectionRow
          title="Password"
          value={
            password ? (
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-ui-tag-neutral-bg text-ui-tag-neutral-text border-ui-tag-neutral-border items-center gap-x-0.5 border box-border txt-compact-xsmall-plus py-px h-6 rounded-md px-1.5 truncate">
                  {displayedPassword}
                </span>
                <button
                  onClick={() => setShowFullPassword(!showFullPassword)}
                  className="text-ui-fg-muted hover:text-ui-fg-base"
                >
                  {showFullPassword ? <EyeSlash /> : <Eye />}
                </button>
              </div>
            ) : (
              "-"
            )
          }
        />
        <SectionRow
          title="Exchange URL"
          value={
            <span
              onClick={() => {
                navigator.clipboard.writeText(
                  `${window.location.origin}${exchangeUrl}`
                )
                toast.success("Copied exchange URL to clipboard")
              }}
              className="bg-ui-tag-neutral-bg text-ui-tag-neutral-text border-ui-tag-neutral-border items-center gap-x-0.5 border box-border txt-compact-xsmall-plus py-px h-6 rounded-md px-1.5 cursor-pointer truncate"
            >
              {exchangeUrl}
            </span>
          }
        />
      </Container>

      <MarketplaceDetailCredentialsEditModal
        marketplace={marketplace}
        open={editOpen}
        setOpen={setEditOpen}
      />
    </>
  )
}
