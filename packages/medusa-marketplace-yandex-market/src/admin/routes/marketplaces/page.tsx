import { Container, useToggleState } from "@medusajs/ui"
import { Shopping } from "@medusajs/icons"
import { defineRouteConfig } from "@medusajs/admin-sdk"
import { useLoaderData, useRevalidator } from "react-router-dom"
import {
  MarketplaceAddModal,
  MarketplaceListTable,
} from "../../components/routes/marketplaces/marketplace-list"
import { SingleColumnLayout } from "../../components/layout"
import { marketplacesData } from "../../lib/marketplaces"

export async function loader() {
  return { marketplaces: marketplacesData.list() }
}

export const config = defineRouteConfig({
  label: "Marketplaces",
  icon: Shopping,
})

export const handle = {
  breadcrumb: () => "Marketplaces",
}

export default function MarketplaceList() {
  const { marketplaces } = useLoaderData() as Awaited<ReturnType<typeof loader>>
  const revalidator = useRevalidator()
  const [stateModal, openModal, closeModal] = useToggleState()

  return (
    <SingleColumnLayout>
      <Container className="p-0">
        <MarketplaceListTable
          stateModal={stateModal}
          openModal={openModal}
          marketplaces={marketplaces}
        />

        <MarketplaceAddModal
          stateModal={stateModal}
          closeModal={closeModal}
          onCreated={() => revalidator.revalidate()}
        />
      </Container>
    </SingleColumnLayout>
  )
}
