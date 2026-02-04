import { Container, Heading } from "@medusajs/ui"

const OzonTestWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Ozon Test Widget</Heading>
      </div>
    </Container>
  )
}

export const config = {
  zone: ["marketplace.list.before",]
}

export default OzonTestWidget
