import { Container, Heading, CodeBlock } from "@medusajs/ui"

type OpenJsonSectionProps = {
  title: string
  data: object
}

export const OpenJsonSection = ({ title, data }: OpenJsonSectionProps) => {
  return (
    <Container className="px-6 py-4">
      <Heading level="h2" className="mb-4">
        {title}
      </Heading>
      <CodeBlock
        className="dark"
        snippets={[
          {
            language: "json",
            label: title,
            code: JSON.stringify(data, null, 2),
          },
        ]}
      >
        <CodeBlock.Body />
      </CodeBlock>
    </Container>
  )
}
