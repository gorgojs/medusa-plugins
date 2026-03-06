import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { CategorySelectorsProps } from "../../../../types"

export const CategorySelectors = ({
  index,
  form,
  productCategoriesCombobox,
  rootOzonCategoriesCombobox,
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
      <div>Ozon: Корневая категория</div>
      <Form.Field
        name={`category_mappings.${index}.root_ozon_category_id`}
        render={({ field }) => (
          <Form.Item>
            <Form.Control>
              <Combobox
                value={(field.value ?? "") as string}
                onChange={field.onChange}
                options={rootOzonCategoriesCombobox.options}
                searchValue={rootOzonCategoriesCombobox.searchValue}
                onSearchValueChange={rootOzonCategoriesCombobox.onSearchValueChange}
                disabled={isOzonDisabled || rootOzonCategoriesCombobox.disabled}
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
                disabled={isOzonDisabled || !form.getValues(`category_mappings.${index}.root_ozon_category_id`) || ozonCategoriesCombobox.disabled}
              />
            </Form.Control>
            <Form.ErrorMessage />
          </Form.Item>
        )}
      />
    </div>
  )
}
