import { Button } from "@medusajs/ui"
import { useForm } from "react-hook-form"
import { Form } from "../../../common/form"
import { MappingFormValues } from "../../../../types"
import { MappingRow } from "./components/mapping-row"


export const MarketplaceMappingSection = () => {
  const form = useForm<MappingFormValues>({
    defaultValues: {
      category_mappings: [],
    },
    mode: "onChange",
  })

  const onSubmit = (values: MappingFormValues) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
        <MappingRow form={form} />
        <Button type="submit">Save</Button>
      </form>
    </Form>
  )
}
