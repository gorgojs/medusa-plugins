import {
  Button,
  FocusModal,
  Heading,
  Input,
  Label,
} from "@medusajs/ui"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import type { Marketplace } from "../../../../types"

export const MarketplaceAddModal = ({
  stateModal,
  closeModal,
  marketplaces,
  setMarketplaces,
}: {
  marketplaces: Marketplace[],
  setMarketplaces: React.Dispatch<React.SetStateAction<Marketplace[]>>,
  stateModal: boolean,
  closeModal: () => void
}) => {
  const [title, setTitle] = useState("")

  // const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: async (newMarketplace: { marketplaces: Marketplace[] }) => {
      // return sdk.client.fetch(`/admin/feeds`, {
      //   method: "POST",
      //   body: newFeed,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      setMarketplaces(newMarketplace.marketplaces)
      console.log("marketplaces", marketplaces)
    },
    onSuccess: () => {
      // queryClient.invalidateQueries({
      //   queryKey: [["marketplaces"]],
      // })
      // setTitle("")
    },
    onError: (error) => {
      console.error("Error creating feed:", error)
    },
  })

  const addMarketplace = () => {
    const newMarketplaces: Marketplace[] = [{
      title: title,
    }]
    mutate({ marketplaces: newMarketplaces })
  }


  return (
    <FocusModal open={stateModal} onOpenChange={(open) => { if (!open) closeModal() }}>
      <FocusModal.Content>
        <form className="flex h-full flex-col overflow-hidden">
          <FocusModal.Header>
            <div className="flex w-full items-center justify-between">
              <Heading level="h1">Add marketplace connection</Heading>

              <div className="flex items-center gap-x-2">
                <FocusModal.Close asChild>
                  <Button size="small" variant="secondary">
                    Cancel
                  </Button>
                </FocusModal.Close>
                <Button onClick={addMarketplace} size="small" variant="primary">
                  Save
                </Button>
              </div>
            </div>
          </FocusModal.Header>

          <FocusModal.Body className="flex flex-1 flex-col items-center overflow-y-auto">
            <div className="flex w-full max-w-lg flex-col gap-y-6 px-2 py-8">
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="title" size="small">
                  Marketplace title
                </Label>
                <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
            </div>
          </FocusModal.Body>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
