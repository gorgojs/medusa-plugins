import { Form } from "../../../../../components/common/form"
import { Combobox } from "../../../../../components/common/combobox"
import { CategorySelectorsProps } from "../../../../../types"

export const CategorySelectors = ({
  index,
  productCategoriesCombobox,
  ozonCategoriesCombobox,
  ozonGroupsWithIds,
  isOzonDisabled,
}: CategorySelectorsProps) => {
  return (
    <div className="space-y-4">
      <div>Medusa: Категория</div>
      <Form.Field
        name={`category_mappings.${index}.medusa_category_ids`}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <Combobox
                value={(field.value ?? []) as string[]}
                onChange={field.onChange}
                options={productCategoriesCombobox.options}
                searchValue={productCategoriesCombobox.searchValue}
                onSearchValueChange={productCategoriesCombobox.onSearchValueChange}
                disabled={productCategoriesCombobox.disabled}
              />
            </Form.Control>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />

      <div>Ozon: Категория/Тип</div>
      <Form.Field
        name={`category_mappings.${index}.ozon_category_type_value`}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <Combobox
                value={(field.value ?? "") as string}
                onChange={field.onChange}
                options={ozonCategoriesCombobox.options}
                groups={ozonGroupsWithIds}
                searchValue={ozonCategoriesCombobox.searchValue}
                onSearchValueChange={ozonCategoriesCombobox.onSearchValueChange}
                disabled={isOzonDisabled}
              />
            </Form.Control>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />
    </div>
  )
}
