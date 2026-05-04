import { useToggleState } from "@medusajs/ui"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import {
  IntegrationAddModal,
  IntegrationListTable,
} from "../../../components/routes/integrations"
import { SingleColumnPageWithWidgets } from "../../../components/layout"
import { WidgetProvider } from "../../../providers/widget-provider"

const IntegrationList = () => {
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
    <WidgetProvider>
      <SingleColumnPageWithWidgets
        widgets={{
          before: "integration.list.before",
          after: "integration.list.after"
        }}
      >
        <IntegrationListTable
          stateModal={stateModal}
          openModal={openModal}
        />
        <IntegrationAddModal
          stateModal={stateModal}
          closeModal={closeModal}
        />
      </SingleColumnPageWithWidgets>
    </WidgetProvider>
  )
}

export const config = defineRouteConfig({
  label: "Integrations",
})

export const handle = {
  breadcrumb: () => "Integrations",
}

export default IntegrationList

