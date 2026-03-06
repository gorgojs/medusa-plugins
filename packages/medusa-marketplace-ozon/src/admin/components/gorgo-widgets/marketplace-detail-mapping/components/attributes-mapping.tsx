import { Fragment } from "react"
import { Button, Heading, Text } from "@medusajs/ui"
import { AttributeMappingProps } from "../../../../types"
import { AttributeMappingRow } from "./attributes-mapping-row"

export const AttributesMapping = ({
  form,
  categoryIndex,
  attrFields,
  appendAttr,
  removeAttr,
  canAdd,
  selectedMedusaCategoryIds,
  ozonIds,
  medusaCategoryNameById,
  selectedMedusaValues,
  selectedOzonValues,
}: AttributeMappingProps) => {
  return (
    <div className="flex flex-col">
      <Heading level="h2" className="mb-2">
        Attributes mapping
      </Heading>

      <Text className="text-ui-fg-subtle txt-small mb-6">
        Add rules to map Medusa attributes to Ozon attributes.
      </Text>

      {attrFields.map((row, attrIndex) => (
        <Fragment key={row.id}>
          <AttributeMappingRow
            form={form}
            rowId={row.id}
            categoryIndex={categoryIndex}
            attrIndex={attrIndex}
            selectedMedusaCategoryIds={selectedMedusaCategoryIds}
            ozonIds={ozonIds}
            medusaCategoryNameById={medusaCategoryNameById}
            selectedMedusaValues={selectedMedusaValues}
            selectedOzonValues={selectedOzonValues}
            onRemove={() => removeAttr(attrIndex)}
          />

          {attrIndex < attrFields.length - 1 && (
            <div className="relative px-6 py-3">
              <div className="border-ui-border-strong absolute bottom-0 left-[40px] top-0 z-[-1] w-px bg-[linear-gradient(var(--border-strong)_33%,rgba(255,255,255,0)_0%)] bg-[length:1px_3px] bg-repeat-y" />
            </div>
          )}
        </Fragment>
      ))}

      <div className={attrFields.length ? "mt-6" : ""}>
        <Button
          type="button"
          variant="secondary"
          className="inline-block"
          onClick={() =>
            appendAttr({
              medusa_attribute: "",
              ozon_attribute_id: "",
              default_value: "",
              transform: "none",
            })
          }
          disabled={!canAdd}
        >
          Add Attributes mapping
        </Button>
      </div>
    </div>
  )
}
