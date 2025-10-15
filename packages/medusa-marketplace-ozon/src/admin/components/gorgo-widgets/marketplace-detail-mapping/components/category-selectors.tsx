import { Label } from "@medusajs/ui"
import { Form } from "../../../common/form"
import { Combobox } from "../../../common/combobox"
import { UseFormReturn } from "react-hook-form"
import { MappingFormValues } from "../../../../types"

type CategorySelectorsProps = {
  form: UseFormReturn<MappingFormValues>
  productCategoriesCombobox: Record<any, any>
  ozonCategoriesCombobox: Record<any, any>
  rootOzonCategoriesCombobox: Record<any, any>
  isOzonDisabled: boolean
  selectedMedusaCategoryIds: string[]
  selectedOzonRootCategoryValue: string | undefined
  onRootOzonCategoryChange: () => void
  onOzonCategoryTypeChange: () => void
}

export const CategorySelectors = ({
  form,
  productCategoriesCombobox,
  rootOzonCategoriesCombobox,
  ozonCategoriesCombobox,
  isOzonDisabled,
  selectedMedusaCategoryIds,
  selectedOzonRootCategoryValue,
  onRootOzonCategoryChange,
  onOzonCategoryTypeChange,
}: CategorySelectorsProps) => {
  const showSubcategory =
    !!selectedMedusaCategoryIds?.length && !!selectedOzonRootCategoryValue

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex-1">
          <Label size="small" weight="plus">
            Medusa Category
          </Label>
          <Form.Field
            name="category_mapping.medusa_category_ids"
            rules={{
              validate: (value: string[]) =>
                value && value.length > 0
                  ? true
                  : "Select at least one category",
            }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Categories"
                    value={field.value}
                    limit={20}
                    onChange={field.onChange}
                    options={productCategoriesCombobox.options}
                    disabled={productCategoriesCombobox.disabled}
                    allowClear
                  />
                </Form.Control>
                <Form.ErrorMessage />
              </Form.Item>
            )}
          />
        </div>

        <div className="flex-1">
          <Label size="small" weight="plus">
            Ozon Category
          </Label>
          <Form.Field
            name="category_mapping.root_ozon_category_id"
            rules={{ required: "Select Ozon category" }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Category"
                    value={field.value}
                    limit={20}
                    onChange={(value) => {
                      field.onChange(value)
                      onRootOzonCategoryChange()
                    }}
                    options={rootOzonCategoriesCombobox.options}
                    disabled={
                      isOzonDisabled || rootOzonCategoriesCombobox.disabled
                    }
                    allowClear
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
          <Label size="small" weight="plus">
            Ozon Subcategory
          </Label>
          <Form.Field
            name="category_mapping.ozon_category_type_value"
            rules={{ required: "Select Ozon subcategory" }}
            render={({ field }) => (
              <Form.Item>
                <Form.Control>
                  <Combobox
                    placeholder="Select Subcategory"
                    value={field.value}
                    limit={20}
                    onChange={(value) => {
                      onOzonCategoryTypeChange()
                      field.onChange(value)
                    }}
                    options={ozonCategoriesCombobox.options}
                    disabled={
                      isOzonDisabled ||
                      !form.getValues("category_mapping.root_ozon_category_id") ||
                      ozonCategoriesCombobox.disabled
                    }
                    allowClear
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
