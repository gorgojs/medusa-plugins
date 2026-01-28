import { Container, Heading } from "@medusajs/ui"

const SystemWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">System Widget</Heading>
      </div>
    </Container>
  )
}

const config = {
  zone: "settings.marketplaces.list.before",
}

export default SystemWidget
