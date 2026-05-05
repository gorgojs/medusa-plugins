import { Button, FocusModal } from "@medusajs/ui"
import { useEffect, useRef } from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useForm } from "react-hook-form"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useRevalidator } from "react-router-dom"
import { IntegrationHttpTypes } from "@gorgo/medusa-integration/types"
import { Form } from "../../../common/form"
import { MappingRow } from "./mapping-row"
import {
  AttrsSummary,
  MappingFormValues,
  OzonCategoryNode,
  OzonAttributesResponse,
  OutputAttributeOptionRule,
} from "../../../../types"
import { buildOzonMappingPayload, extractMedusaAttributeTitles } from "../../../../utils"
import { sdk } from "../../../../lib/sdk"

type CategoryMappingRuleAddModalProps = {
  stateModal: boolean
  closeModal: () => void
  integration: IntegrationHttpTypes.AdminIntegration
  editingId: string | null
}

const makeDefaults = (): MappingFormValues => ({
  category_mapping:
  {
    mapping_id: "",
    medusa_category_ids: [],
    root_ozon_category_id: "",
    ozon_category_type_value: "",
    mappings: [],
  },
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

  const root_ozon_category_id = String(rule.ozon_category.description_category_id)

  const ozon_category_type_value = `${categoryNode.description_category_id}:${typeNode.type_id}`

  const fields = rule.fields

  const mappings =
    fields
      .filter((f: any) => f.to === "attributes" && f.optionRules)
      .flatMap((f: any) => {
        const optionRules: Record<string, OutputAttributeOptionRule> = f.optionRules
        return Object.values(optionRules).map((value) => ({
          ozon_attribute_id: `${value?.attributeId}`,
          medusa_attribute: value.medusa_attribute ?? "",
          default_value: value.default ?? [],
          transform: (value.transform?.name as any) ?? "none",
          is_error: value.is_error ?? false,
        }))
      }) ?? []

  return {
    category_mapping:
    {
      mapping_id: ruleId,
      medusa_category_ids,
      root_ozon_category_id,
      ozon_category_type_value,
      mappings,
    },
  }
}

export const CategoryMappingRuleAddModal = ({
  stateModal,
  closeModal,
  integration,
  editingId,
}: CategoryMappingRuleAddModalProps) => {
  const form = useForm<MappingFormValues>({
    defaultValues: makeDefaults(),
    mode: "onChange",
    reValidateMode: "onChange",
  })
  const { trigger, reset } = form
  const queryClient = useQueryClient()
  const { revalidate } = useRevalidator()
  const ozonTreeByValueRef = useRef(new Map<string, OzonCategoryNode>())

  const mapping = integration.settings?.mapping as any

  useEffect(() => {
    if (!stateModal) return

    if (editingId) {
      const rule = mapping[editingId]
      const defaults = makeDefaultsFromSettingsRule(editingId, rule)
      reset(defaults)
    } else {
      reset(makeDefaults())
    }
  }, [stateModal, editingId, mapping, reset])

  const createMapping = useMutation({
    mutationFn: async (values: MappingFormValues) => {
      const attrsSummaryByValue = new Map<string, AttrsSummary>()
      const medusaOptions = new Set<string>()
      const categoryMapping = values.category_mapping

      if (categoryMapping) {
        const selectedValue = categoryMapping.ozon_category_type_value
        if (selectedValue) {
          const [descriptionCategoryId, typeId] = selectedValue.split(":").map(Number)
          if (descriptionCategoryId && typeId) {
            const data = await queryClient.ensureQueryData<OzonAttributesResponse>({
              queryKey: ["ozon-attributes", integration.id, descriptionCategoryId, typeId],
              queryFn: async () => {
                const params = new URLSearchParams({
                  description_category_id: String(descriptionCategoryId),
                  type_id: String(typeId),
                })
                return sdk.client.fetch(`/admin/ozon/${integration.id}/attributes?${params.toString()}`)
              },
            })

            const attributes = data.result ?? []
            const total = attributes.length
            const required = attributes.filter((a) => Boolean(a.is_required)).length

            attrsSummaryByValue.set(selectedValue, { total, required })
          }
        }

        for (const categoryId of categoryMapping.medusa_category_ids ?? []) {
          const fields = [
            "id",
            "title",
            "description",
            "*options",
            "*variants.options",
            "*variants.images",
            "*variants.prices",
            "variants.sku",
            "variants.weight",
            "variants.length",
            "variants.height",
            "variants.width",
            "variants.barcode",
          ].join(",")
          const productsRes = await sdk.admin.product.list({
            category_id: [categoryId],
            fields,
          })
          const { options } = extractMedusaAttributeTitles(productsRes.products)
          options.forEach((o) => medusaOptions.add(o))
        }
      }

      const payload = buildOzonMappingPayload(
        values,
        ozonTreeByValueRef.current,
        attrsSummaryByValue,
        medusaOptions
      )

      return sdk.client.fetch(`/admin/integrations/${integration.id}`, {
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
    const values = form.getValues()
    createMapping.mutate(values)
  }

  return (
    <FocusModal open={stateModal} onOpenChange={(open) => !open && closeModal()}>
      <FocusModal.Content aria-describedby={undefined}>
        <Form {...form}>
          <form className="flex h-full flex-col overflow-hidden" onSubmit={onSubmit}>
            <FocusModal.Header>
              <VisuallyHidden>
                <FocusModal.Title>Add Category Mapping Rule</FocusModal.Title>
              </VisuallyHidden>
            </FocusModal.Header>
            <FocusModal.Body className="flex size-full flex-col overflow-auto">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-6 px-2 py-8">
                <MappingRow form={form} ozonTreeByValueRef={ozonTreeByValueRef} integration={integration} />
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
