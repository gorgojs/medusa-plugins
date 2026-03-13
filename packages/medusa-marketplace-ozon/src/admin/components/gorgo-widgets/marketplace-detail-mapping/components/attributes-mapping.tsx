import { Button, Text } from "@medusajs/ui"
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
  marketplace,
  ozonAttributes,
  profileOptions
}: AttributeMappingProps) => {
  return (
    <div className="flex flex-col">
      <Text size="base" weight="plus">
        Attributes Mapping
      </Text>

      <Text size="small" className="text-ui-fg-subtle mb-6">
        Add mapping rules between Ozon and Medusa attributes.
      </Text>

      <div className="flex flex-col space-y-3">
        {attrFields.map((row, attrIndex) => (
          <AttributeMappingRow
            key={row.id}
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
            marketplace={marketplace}
            ozonAttributes={ozonAttributes}
            profileOptions={profileOptions}
          />
        ))}
      </div>

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
          Add rule
        </Button>
      </div>
    </div>
  )
}
