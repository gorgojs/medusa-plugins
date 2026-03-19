import { Label } from "@medusajs/ui"
import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { UseFormReturn } from "react-hook-form"
import { MappingFormValues, OzonComboboxGroupWithIds } from "../../../../types"

type CategorySelectorsProps = {
  index: number
  form: UseFormReturn<MappingFormValues>
  productCategoriesCombobox: Record<any, any>
  ozonCategoriesCombobox: Record<any, any>
  rootOzonCategoriesCombobox: Record<any, any>
  ozonGroupsWithIds: OzonComboboxGroupWithIds[]
  isOzonDisabled: boolean
  selectedMedusaCategoryIds: string[]
  selectedOzonRootCategoryValue: string
}

export const CategorySelectors = ({
  index,
  form,
  productCategoriesCombobox,
  rootOzonCategoriesCombobox,
  ozonCategoriesCombobox,
  ozonGroupsWithIds,
  isOzonDisabled,
  selectedMedusaCategoryIds,
  selectedOzonRootCategoryValue,
}: CategorySelectorsProps) => {
  const showSubcategory = !!selectedMedusaCategoryIds?.length && !!selectedOzonRootCategoryValue
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label size="small" weight="plus">Medusa Category</Label>
          <Form.Field
            name={`category_mappings.${index}.medusa_category_ids`}
            rules={{ validate: (value: string[]) => value && value.length > 0 ? true : "Select at least one category" }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Categories"
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
        </div>
        <div className="flex-1">
          <Label size="small" weight="plus">Ozon Category</Label>
          <Form.Field
            name={`category_mappings.${index}.root_ozon_category_id`}
            rules={{ required: "Select Ozon category" }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Category"
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
        </div>
      </div>
      {showSubcategory && (
        <div>
          <Label size="small" weight="plus">Ozon Subcategory</Label>
          <Form.Field
            name={`category_mappings.${index}.ozon_category_type_value`}
            rules={{ required: "Select Ozon subcategory" }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Subcategory"
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
      )}
    </div>
  )
}
