import { Container, Heading } from "@medusajs/ui"

const MarketplaceTestWidget = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Marketplace Test Widget</Heading>
      </div>
    </Container>
  )
}

export const MarketplaceTestWidgetConfig = {
  component: MarketplaceTestWidget,
  zone: "settings.marketplaces.list.before",
}
