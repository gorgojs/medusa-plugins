import {
  Button,
  FocusModal,
  Heading,
  Input,
  Label,
  Select,
} from "@medusajs/ui"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import type { Marketplace } from "../../../../types"

const PROVIDERS = [
  { value: "Wildberries", label: "Wildberies" },
  { value: "Ozon", label: "Ozon" },
  { value: "Yandex Market", label: "Yandex Market" },
]

export const MarketplaceAddModal = ({
  stateModal,
  closeModal,
  marketplaces,
  setMarketplaces,
}: {
  marketplaces: Marketplace[]
  setMarketplaces: React.Dispatch<React.SetStateAction<Marketplace[]>>
  stateModal: boolean
  closeModal: () => void
}) => {
  const [title, setTitle] = useState<string>("")
  const [provider, setProvider] = useState<string>("")

  const { mutate, isPending } = useMutation({
    mutationFn: async (newMarketplace: { marketplaces: Marketplace[] }) => {
      setMarketplaces(newMarketplace.marketplaces)
      console.log("marketplaces", marketplaces)
    },
    onError: (error) => {
      console.error("Error creating feed:", error)
    },
  })

  const canSubmit = title.trim().length > 0 && provider.length > 0

  const addMarketplace = () => {
    if (!canSubmit) return

    const newMarketplaces: Marketplace[] = [
      {
        title: title.trim(),
        provider: provider
      } as Marketplace,
    ]

    mutate({ marketplaces: newMarketplaces })
  }

  return (
    <FocusModal
      open={stateModal}
      onOpenChange={(open) => {
        if (!open) closeModal()
      }}
    >
      <FocusModal.Content>
        <form
          className="flex h-full flex-col overflow-hidden"
          onSubmit={(e) => e.preventDefault()}
        >

          <FocusModal.Header>
          </FocusModal.Header>


          <FocusModal.Body className="flex size-full flex-col overflow-auto">
            <div className="mx-auto flex w-full max-w-lg flex-col gap-y-6 px-2 py-8">
              <div className="flex flex-col gap-y-4">
                <div className="flex w-full items-center justify-between">
                  <Heading level="h1">Add marketplace connection</Heading>
                </div>

                <div className="flex flex-col gap-y-2">
                  <Label htmlFor="title" size="small">
                    Title
                  </Label>
                  <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. My marketplace" />
                </div>

                <div className="flex flex-col gap-y-2">
                  <Label size="small">Marketplace provider</Label>
                  <Select value={provider} onValueChange={setProvider}>
                    <Select.Trigger>
                      <Select.Value placeholder="Select provider" />
                    </Select.Trigger>

                    <Select.Content>
                      {PROVIDERS.map((p) => (
                        <Select.Item key={p.value} value={p.value}>
                          {p.label}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select>
                </div>
              </div>
            </div>
          </FocusModal.Body>

          <FocusModal.Footer>
            <div className="flex items-center gap-x-2">
              <FocusModal.Close asChild>
                <Button size="small" variant="secondary">
                  Cancel
                </Button>
              </FocusModal.Close>
              <Button type="button" onClick={addMarketplace} size="small">
                Add
              </Button>
            </div>
          </FocusModal.Footer>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
