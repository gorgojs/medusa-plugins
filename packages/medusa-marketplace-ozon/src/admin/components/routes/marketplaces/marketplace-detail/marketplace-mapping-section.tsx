import { Heading } from "@medusajs/ui"
import { Container } from "../../../../components/common/container"
import { MappingRow } from "./components/mapping-row"


export const MarketplaceMappingSection = () => {
  return (
    <Container>
      <div className="px-6 py-4 flex items-center justify-between gap-x-4">
        <Heading>Mapping</Heading>
      </div>
      <MappingRow />
    </Container>
  )
}
