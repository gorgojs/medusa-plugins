import { Button, FocusModal } from "@medusajs/ui"
import { useRef } from "react"
import { DefaultValues, useForm } from "react-hook-form"
import { useQueryClient } from "@tanstack/react-query"
import { Form } from "../../../../common/form"
import { MappingRow } from "./mapping-row"
import { AttrsSummary, MappingFormValues, OzonCategoryNode } from "../../../../../types"
import { buildOzonMappingPayload } from "../../../../../utils"
import { sdk } from "../../../../../lib/sdk"
import { OzonAttributesResponse } from "../../../../../types"

const makeDefaults = (): DefaultValues<MappingFormValues> => ({
  category_mappings: [
    {
      medusa_category_ids: [],
      ozon_category_type_value: "",
      mappings: [],
    },
  ],
})

export const CategoryMappingRuleAddModal = ({
  stateModal,
  closeModal,
  marketplaceId,
}: {
  stateModal: boolean
  closeModal: () => void
  marketplaceId: string
}) => {
  const form = useForm<MappingFormValues>({ defaultValues: makeDefaults(), mode: "onChange" })
  const queryClient = useQueryClient()
  const ozonTreeByValueRef = useRef(new Map<string, OzonCategoryNode>())

  const onSubmit = form.handleSubmit(async (values) => {
    const attrsSummaryByValue = new Map<string, AttrsSummary>()

    for (const categoryMapping of values.category_mappings ?? []) {
      const selectedValue = categoryMapping.ozon_category_type_value
      if (!selectedValue) continue

      const [descriptionCategoryId, typeId] = selectedValue.split(":").map(Number)
      if (!descriptionCategoryId || !typeId) continue

      const queryKey = ["ozon-attributes", marketplaceId, descriptionCategoryId, typeId]

      const data = await queryClient.ensureQueryData<OzonAttributesResponse>({
        queryKey,
        queryFn: async () => {
          const params = new URLSearchParams({
            description_category_id: String(descriptionCategoryId),
            type_id: String(typeId),
          })
          return sdk.client.fetch(`/admin/ozon/${marketplaceId}/attributes?${params.toString()}`)
        },
      })

      const attributes = data.result ?? []
      const total = attributes.length
      const required = attributes.filter((a) => Boolean(a.is_required)).length

      attrsSummaryByValue.set(selectedValue, { total, required })
    }

    const payload = buildOzonMappingPayload(
      values,
      ozonTreeByValueRef.current,
      attrsSummaryByValue
    )

    await sdk.client.fetch(`/admin/marketplaces/${marketplaceId}`, {
      method: "POST",
      body: { settings: payload },
    })

    form.reset(makeDefaults())
    closeModal()
  })

  return (
    <FocusModal open={stateModal} onOpenChange={(open) => !open && closeModal()}>
      <FocusModal.Content>
        <Form {...form}>
          <form className="flex h-full flex-col overflow-hidden" onSubmit={onSubmit}>
            <FocusModal.Header />
            <FocusModal.Body className="flex size-full flex-col overflow-auto">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-6 px-2 py-8">
                <MappingRow form={form} ozonTreeByValueRef={ozonTreeByValueRef} />
              </div>
            </FocusModal.Body>
            <FocusModal.Footer>
              <div className="flex items-center gap-x-2">
                <Button
                  size="small"
                  variant="secondary"
                  type="button"
                  onClick={() => {
                    form.reset(makeDefaults())
                    closeModal()
                  }}
                >
                  Cancel
                </Button>
                <Button size="small" type="submit" disabled={form.formState.isSubmitting}>
                  Save
                </Button>
              </div>
            </FocusModal.Footer>
          </form>
        </Form>
      </FocusModal.Content>
    </FocusModal>
  )
}
