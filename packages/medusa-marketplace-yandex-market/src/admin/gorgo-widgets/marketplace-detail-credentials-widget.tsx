// import {
//   MarketplaceDetailCredentialsSection,
//   MarketplaceDetailCredentialsEditModal
// } from "../components/gorgo-widgets"

const MarketplaceDetailCredentialsWidget = (data: any) => {
  console.log("MarketplaceDetailCredentialsWidget", { data })
  return (
    <>
      {/* <MarketplaceDetailCredentialsSection />
      <MarketplaceDetailCredentialsEditModal
        response={{ marketplace }}
        open={editOpen}
        setOpen={setEditOpen}
      /> */}
    </>
  )
}

export const config = {
  zone: ["marketplace.detail.after",]
}

export default MarketplaceDetailCredentialsWidget
