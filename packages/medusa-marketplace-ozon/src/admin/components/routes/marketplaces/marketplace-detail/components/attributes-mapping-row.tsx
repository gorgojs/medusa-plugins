import { IconButton, Select } from "@medusajs/ui"
import { XMarkMini } from "@medusajs/icons"
import { Form } from "../../../../../components/common/form"
import { transformOptions, AttributeMappingRowProps } from "../../../../../types"

export const AttributeMappingRow = ({
  categoryIndex,
  attrIndex,
  medusaGroups,
  ozonOptions,
  onRemove,
}: AttributeMappingRowProps) => {
  return (
    <div className="bg-ui-bg-subtle border-ui-border-base flex flex-row gap-2 rounded-xl border px-2 py-2">
      <div className="grow">
        <div className="grid grid-cols-2 gap-2">
          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.medusa_attribute`}
            render={({ field }) => {
              const { onChange, ref, ...fieldProps } = field

              return (
                <Form.Item>
                  <Form.Control>
                    <Select {...fieldProps} onValueChange={onChange}>
                      <Select.Trigger ref={ref} className="bg-ui-bg-base">
                        <Select.Value placeholder="Select Medusa" />
                      </Select.Trigger>
                      <Select.Content>
                        {medusaGroups.map((g) => (
                          <Select.Group key={`medusa-group-${g.label}`}>
                            <Select.Label>{g.label}</Select.Label>
                            {g.options.map((o) => (
                              <Select.Item key={`medusa-${o.value}`} value={o.value}>
                                <span className="text-ui-fg-subtle">{o.label}</span>
                              </Select.Item>
                            ))}
                          </Select.Group>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.ErrorMessage />
                </Form.Item>
              )
            }}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.ozon_attribute_id`}
            render={({ field }) => {
              const { onChange, ref, ...fieldProps } = field

              return (
                <Form.Item>
                  <Form.Control>
                    <Select {...fieldProps} onValueChange={onChange} disabled={!ozonOptions.length}>
                      <Select.Trigger ref={ref} className="bg-ui-bg-base">
                        <Select.Value placeholder="Select Ozon" />
                      </Select.Trigger>
                      <Select.Content>
                        {ozonOptions.map((o) => (
                          <Select.Item key={`ozon-${o.value}`} value={o.value}>
                            <span className="text-ui-fg-subtle">{o.label}</span>
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.ErrorMessage />
                </Form.Item>
              )
            }}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.default_value`}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <input
                    {...field}
                    className="txt-compact-small bg-ui-bg-base shadow-borders-base text-ui-fg-base h-8 w-full rounded-md px-2 py-1.5"
                    placeholder="Default value"
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />

          <Form.Field
            name={`category_mappings.${categoryIndex}.mappings.${attrIndex}.transform`}
            render={({ field }) => {
              const { onChange, ref, ...fieldProps } = field

              return (
                <Form.Item>
                  <Form.Control>
                    <Select {...fieldProps} onValueChange={onChange}>
                      <Select.Trigger ref={ref} className="bg-ui-bg-base">
                        <Select.Value placeholder="Select Transform" />
                      </Select.Trigger>
                      <Select.Content>
                        {transformOptions.map((o) => (
                          <Select.Item key={`transform-${o.value}`} value={o.value}>
                            <span className="text-ui-fg-subtle">{o.label}</span>
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.ErrorMessage />
                </Form.Item>
              )
            }}
          />
        </div>
      </div>

      <div className="size-7 flex-none self-center">
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
    </div>
  )
}
