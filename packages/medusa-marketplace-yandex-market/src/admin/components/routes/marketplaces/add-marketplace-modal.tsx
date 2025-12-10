import {
  Button,
  FocusModal,
  Heading,
  Input,
  Label,
} from "@medusajs/ui"


export const AddMarketplaceModal = () => {
  return (
    <FocusModal>
      <FocusModal.Trigger asChild>
        <Button size="small" variant="secondary">
          Add
        </Button>
      </FocusModal.Trigger>

      <FocusModal.Content>
        <form className="flex h-full flex-col overflow-hidden">
          <FocusModal.Header>
            <div className="flex w-full items-center justify-between">
              <Heading level="h1">Add marketplace</Heading>

              <div className="flex items-center gap-x-2">
                <FocusModal.Close asChild>
                  <Button size="small" variant="secondary">
                    Cancel
                  </Button>
                </FocusModal.Close>
                <Button size="small" variant="primary" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </FocusModal.Header>

          <FocusModal.Body className="flex flex-1 flex-col items-center overflow-y-auto">
            <div className="flex w-full max-w-lg flex-col gap-y-6 px-2 py-8">
              <div className="flex flex-col gap-y-1">
                <Label htmlFor="marketplace_id" className="text-ui-fg-subtle">
                  Marketplace id
                </Label>
                <Input id="marketplace_id" placeholder="marketplace"/>
              </div>
            </div>
          </FocusModal.Body>
        </form>
      </FocusModal.Content>
    </FocusModal>
  )
}
