import { Heading, IconButton } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { CategoryMappingCardProps } from "../../../../../types"
import { Container } from "../../../../common/container"

export const CategoryMappingCard = ({ title, onRemove, categories, attributes }: CategoryMappingCardProps) => {
  return (
    <Container>
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">{title}</Heading>
        <IconButton
          size="small"
          variant="transparent"
          className="text-ui-fg-muted"
          type="button"
          onClick={onRemove}
        >
          <XMarkMini />
        </IconButton>
      </div>

      <div className="px-6 py-4">{categories}</div>

      <div className="px-6 py-4">{attributes}</div>
    </Container>
  )
}
