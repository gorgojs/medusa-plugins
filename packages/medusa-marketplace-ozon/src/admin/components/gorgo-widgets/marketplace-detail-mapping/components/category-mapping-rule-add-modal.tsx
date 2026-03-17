import { Button, FocusModal } from "@medusajs/ui"
import { useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { MarketplaceHttpTypes } from "@gorgo/medusa-marketplace/types"
import { Form } from "../../../common/form"
import { MappingRow } from "./mapping-row"
import {
  AttrsSummary,
  MappingFormValues,
  OzonCategoryNode,
  OzonAttributesResponse,
  OutputAttributeOptionRule,
} from "../../../../types"
import { buildOzonMappingPayload } from "../../../../utils"
import { sdk } from "../../../../lib/sdk"

const makeDefaults = (): MappingFormValues => ({
  category_mappings: [
    {
      mapping_id: "",
      medusa_category_ids: [],
      root_ozon_category_id: "",
      ozon_category_type_value: "",
      mappings: [],
    },
  ],
})

const makeDefaultsFromSettingsRule = (
  ruleId: string,
  rule: any | undefined
): MappingFormValues => {
  if (!rule) {
    return makeDefaults()
  }
  const medusa_category_ids: string[] = rule.medusa_categories
  const categoryNode = rule.ozon_category.children[0]
  const typeNode = categoryNode.children[0]

  const root_ozon_category_id = String(categoryNode.category_name)

  const ozon_category_type_value = `${categoryNode.description_category_id}:${typeNode.type_id}`

  const fields = rule.fields

  const mappings =
    fields
      .filter((f: any) => f.to === "attributes" && f.optionRules)
      .flatMap((f: any) => {
        const optionRules: Record<string, OutputAttributeOptionRule> = f.optionRules
        return Object.values(optionRules).map((value) => ({
          ozon_attribute_id: `attr:${value?.attributeId}`,
          medusa_attribute: value.medusa_attribute ?? "",
          default_value: value.default?.[0] ?? "",
          transform: (value.transform?.name as any) ?? "none",
        }))
      }) ?? []

  return {
    category_mappings: [
      {
        mapping_id: ruleId,
        medusa_category_ids,
        root_ozon_category_id,
        ozon_category_type_value,
        mappings,
      },
    ],
  }
}



export const CategoryMappingRuleAddModal = ({
  stateModal,
  closeModal,
  marketplace,
  editingId,
}: {
  stateModal: boolean
  closeModal: () => void
  marketplace: MarketplaceHttpTypes.AdminMarketplace
  editingId: string | null
}) => {
  const form = useForm<MappingFormValues>({
    defaultValues: makeDefaults(),
    mode: "onChange",
    reValidateMode: "onChange",
  })
  const { trigger, getValues, reset } = form
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()
  const ozonTreeByValueRef = useRef(new Map<string, OzonCategoryNode>())

  const mapping = marketplace.settings?.mapping as any

  useEffect(() => {
    if (!stateModal) return

    if (editingId) {
      const rule = mapping[editingId]
      console.log("editingId", editingId, "rule", rule)
      const defaults = makeDefaultsFromSettingsRule(editingId, rule)
      console.log("defaults", defaults)
      reset(defaults)
    } else {
      reset(makeDefaults())
    }
  }, [stateModal, editingId, mapping, reset])

  const createMapping = useMutation({
    mutationFn: async (values: MappingFormValues) => {
      const attrsSummaryByValue = new Map<string, AttrsSummary>()

      for (const categoryMapping of values.category_mappings ?? []) {
        const selectedValue = categoryMapping.ozon_category_type_value
        if (!selectedValue) continue

        const [descriptionCategoryId, typeId] = selectedValue.split(":").map(Number)
        if (!descriptionCategoryId || !typeId) continue

        const data = await queryClient.ensureQueryData<OzonAttributesResponse>({
          queryKey: ["ozon-attributes", marketplace.id, descriptionCategoryId, typeId],
          queryFn: async () => {
            const params = new URLSearchParams({
              description_category_id: String(descriptionCategoryId),
              type_id: String(typeId),
            })
            return sdk.client.fetch(`/admin/ozon/${marketplace.id}/attributes?${params.toString()}`)
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

      return sdk.client.fetch(`/admin/marketplaces/${marketplace.id}`, {
        method: "POST",
        body: { settings: payload },
      })
    },
    onSuccess: () => {
      revalidate()
      form.reset(makeDefaults())
      closeModal()
    },
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const valid = await trigger()
    if (!valid) {
      return
    }
    const values = getValues()
    createMapping.mutate(values)
  }

  return (
    <FocusModal open={stateModal} onOpenChange={(open) => !open && closeModal()}>
      <FocusModal.Content>
        <Form {...form}>
          <form className="flex h-full flex-col overflow-hidden" onSubmit={onSubmit}>
            <FocusModal.Header />
            <FocusModal.Body className="flex size-full flex-col overflow-auto">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-6 px-2 py-8">
                <MappingRow form={form} ozonTreeByValueRef={ozonTreeByValueRef} marketplace={marketplace} />
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
                <Button size="small" type="submit" disabled={createMapping.isPending}>
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
