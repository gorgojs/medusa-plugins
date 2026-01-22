import { Container, Heading } from "@medusajs/ui"

const WbTestWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">WB Test Widget</Heading>
      </div>
    </Container>
  )
}

export const config = {
  zone: ["marketplaces.list.before",]
}

export default WbTestWidget
