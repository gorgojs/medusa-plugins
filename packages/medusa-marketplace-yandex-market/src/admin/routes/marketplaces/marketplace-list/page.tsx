import { Container, Heading, Button, FocusModal, Input, Label } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"

const MarketplaceList = () => {

  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4" >
        <Heading level="h1">Marketplaces</Heading>
        <div className="flex items-center justify-between px-6 py-4">
          <FocusModal>
            <FocusModal.Trigger asChild>
              <Button size="small" variant="secondary">
                Add
              </Button>
            </FocusModal.Trigger>
            <FocusModal.Content>
              <FocusModal.Content>
                <FocusModal.Body className="flex flex-col items-center py-16">
                  <div className="flex w-full max-w-lg flex-col gap-y-8">
                    <div className="flex flex-col gap-y-1">
                      <Heading>Add marketplace</Heading>
                    </div>
                    <div className="flex flex-col gap-y-2">

                      <Label htmlFor="marketplace_id" className="text-ui-fg-subtle">
                        Marketplace id
                      </Label>

                      <Input id="marketplace_id" placeholder="marketplace" />

                    </div>
                  </div>
                </FocusModal.Body>
                <FocusModal.Footer>
                  <Button>Save</Button>
                </FocusModal.Footer>
              </FocusModal.Content>
            </FocusModal.Content>
          </FocusModal>
        </div>
      </div>

    </Container>
  )
}


export const config = defineRouteConfig({
  label: "Marketplaces",
  icon: Shopping,
})


export default MarketplaceList



// export function FocusModalDemo() {
//   return (
//     <FocusModal>

// <FocusModal.Content>
//   <FocusModal.Header>
//     <FocusModal.Title>Edit Variant</FocusModal.Title>
//   </FocusModal.Header>
//   <FocusModal.Body className="flex flex-col items-center py-16">
//     <div className="flex w-full max-w-lg flex-col gap-y-8">
//       <div className="flex flex-col gap-y-1">
//         <Heading>Create API key</Heading>
//         <Text className="text-ui-fg-subtle">
//           Create and manage API keys. You can create multiple keys to
//           organize your applications.
//         </Text>
//       </div>
//       <div className="flex flex-col gap-y-2">
//         <Label htmlFor="key_name" className="text-ui-fg-subtle">
//           Key name
//         </Label>
//         <Input id="key_name" placeholder="my_app" />
//       </div>
//     </div>
//   </FocusModal.Body>
//   <FocusModal.Footer>
//     <Button>Save</Button>
//   </FocusModal.Footer>
// </FocusModal.Content>
//     </FocusModal>
//   )
// }
