<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c">
      <img alt="Medusa-T-Kassa logo" src="https://github.com/user-attachments/assets/1c5291d8-b708-4337-8776-fb81d7b5cf9c" height="120">
    </picture>
  </a>
  
</p>

<h1 align="center">
T-Kassa Payments for Medusa
</h1>

<p align="center">
  A Medusa plugin that provides T-Kassa payments.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.ru.md">Читать README на русском →</a>
</p>

<br/>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.10.1-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_tkassa">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷T--Kassa_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷1C on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

## 💬 Plugin Support Chat on Telegram

Join the [Medusa.js ⊷ T-Kassa (T-Bank)](https://t.me/medusajs_tkassa) plugin development chat to discuss features and get support.

## 👥 Medusa.js Community Chat on Telegram

Join the [Medusa.js Chat](https://t.me/medusajs_chat) to connect with developers building on Medusa.

## Prerequisites

- Medusa server v2.7.0 or later
- Node.js v20 or later
- A T-Business account with T-Kassa internet acquiring – [sign in or create one](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c)

## Features

🛒 **Seamless integration** with the T-Kassa payment system   
📝 **Receipt generation** compliant with Federal Law No. 54, supporting FFD 1.05 and 1.2 formats   
💳 **One-step** (autocapture) **and two-step** (authorization/hold) payment flows   
📊 **Webhook support** for real-time payment status updates   
🔄 **Refund** and **order cancellation** support   
🛡 **Token-based webhook verification** to ensure security   
🔧 **Detailed logging** for debugging and transaction auditing   

## Installation

```bash
yarn add @gorgo/medusa-payment-tkassa
# or
npm install @gorgo/medusa-payment-tkassa
```

## Configuration

Add the provider configuration in your `medusa-config.js` file of the Medusa admin application:

```ts
# ...
module.exports = defineConfig({
  # ...
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-tkassa/providers/payment-tkassa",
            id: "tkassa",
            options: {
              terminalKey: process.env.TKASSA_TERMINAL_KEY,
              password: process.env.TKASSA_PASSWORD,
              capture: true,
              useReceipt: true,
              ffdVersion: "1.05",
              taxation: "osn",
              taxItemDefault: "none",
              taxShippingDefault: "none"
            },
          }   
        ]
      }
    }
  ]
})
```

Add environment variables with your shop identifier `TerminalKey` and secret `Password` from your T-Business account:

```
TKASSA_TERMINAL_KEY=123456789
TKASSA_PASSWORD=supersecret
```

## Provider Options

| Option               | Description                                                                                                                                                                                                                                                              | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `terminalKey`        | Terminal key provided by T-Kassa (required for authentication)                                                                                                                                                                                                           | -       |
| `password`           | Password for request signing (required for authentication)                                                                                                                                                                                                               | -       |
| `capture`            | Automatic payment capture:<br>- `true` for one-step payment, passes `O` to T-Kassa API<br>- `false` for two-steps payment, passes `T` payment                                                                                                                            | `true`  |
| `useReceipt`         | Enable receipt generation according to Russian fiscal data format (FFD)                                                                                                                                                                                                  | `false` |
| `ffdVersion`         | Fiscal data format version: `1.2` or `1.05`<br>Applicable only if `useReceipt` = `true`                                                                                                                                                                                 | -       |
| `taxation`           | Tax system type:<br>- `osn`: General<br>- `usn_income`: Simplified (income)<br>- `usn_income_outcome`: Simplified (income-expenses)<br>- `esn`: Agricultural<br>- `patent`: Patent<br>Applicable only if `useReceipt` = `true`                                           | -       |
| `taxItemDefault`     | Default VAT rate for products:<br>- `none`: No VAT<br>- `vat0`: 0%<br>- `vat5`: 5%<br>- `vat7`: 7%<br>- `vat10`: 10%<br>- `vat20`: 20%<br>- `vat105`: 5/105<br>- `vat107`: 7/107<br>- `vat110`: 10/110<br>- `vat120`: 20/120<br>Applicable only if `useReceipt` = `true` | -       |
| `taxShippingDefault` | Default VAT rate for shipping, same options as `taxItemDefault`<br>Applicable only if `useReceipt` = `true`                                                                                                                                                              | -       |

## Storefront Integration

To integrate the T-Kassa payment provider in a Next.js storefront, start by adding the required UI components. So, the provider is displayed on the checkout page alongside other available payment methods.

When T-Kassa is selected, the storefront should call `initiatePayment` with the necessary parameters. This will create a payment session through the T-Kassa API and prepare the customer for redirection. The Place Order button should then send the customer to the T-Kassa payment page, where he can select his preferred payment method.

Once the payment is completed, T-Kassa will concurrently send a webhook and redirect the customer back to the storefront. Whichever arrives first will complete the cart and create a new order in Medusa.

For the Next.js start you need to make the following changes:

### 1. Payment Provider Configuration

To make T-Kassa available as a payment method on the storefront checkout page, you must add its configuration to the payment provider mapping in your storefront’s constants file. This mapping determines how each payment provider is displayed in the UI.

Open [`src/lib/constants.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/constants.tsx#L33-L36) and add the following:

![Directory structure in the Medusa Storefront after updating the file for constants](https://github.com/user-attachments/assets/0aee001e-958f-40c6-b329-618e318ff019)

```ts
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.ReactNode }
> = {
  // ... other providers
  pp_tkassa_tkassa: {
    title: "T-Kassa",
    icon: <CreditCard />,
  },
}

// Helper to check if a provider is T-Kassa
export const isTkassa = (providerId?: string) => {
  return providerId?.startsWith("pp_tkassa")
}
```

You extend the `paymentInfoMap` object to include a `pp_tkassa_tkassa` entry. This entry defines the title and the icon that will be shown for T-Kassa on the checkout page.

The helper function `isTkassa` checks whether a given `providerId` belongs to T-Kassa. This is useful when rendering provider-specific UI-components.

### 2. Cookie Settings Update

When integrating T-Kassa, you need to adjust your cookie policy to allow cross-domain payment redirects. Some payment providers require more permissive cookie settings so the payment session can be preserved when the customer is redirected back to the storefront.

Open [`src/lib/data/cookies.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/data/cookies.ts#L79) and update the cookie configuration as follows:

![Directory structure in the Medusa Storefront after updating the file for cookies](https://github.com/user-attachments/assets/4274d249-6994-4d9f-b4b6-98f2016f0e9f)

```ts
export const setCartId = async (cartId: string) => {
  cookies.set("_medusa_cart_id", cartId, {
    // ... other cookie settings
    sameSite: "lax", // Changed from "strict" for payment redirects
  })
}
```

This helper function stores the cart ID in a cookie named `_medusa_cart_id`.

The `sameSite` option is set to `lax` instead of `strict`. This change ensures the cookie is sent with cross-site requests during the T-Kassa redirect flow, preventing the payment session from being lost.

### 3. Payment Session Initialization 

To redirect a customer to T-Kassa, the payment session must be properly initialized with the required parameters, including the return URLs for both success and failure outcomes.

Open [`src/modules/checkout/components/payment/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment/index.tsx#L90-L91) and update the payment initialization logic to include T-Kassa’s redirect URLs:

![Directory structure in the Medusa Storefront after updating the file for payment component](https://github.com/user-attachments/assets/5c4dfcf9-57e7-48f6-956c-0e0a91ec6c8f)

```ts
await initiatePaymentSession(cart, {
  provider_id: selectedPaymentMethod,
  data: {
    SuccessURL: `${getBaseURL()}/api/capture-payment/${cart?.id}?country_code=${countryCode}`,
    FailURL: `${getBaseURL()}/api/capture-payment/${cart?.id}?country_code=${countryCode}`,
    cart: cart,
  }
})
```

When initiating the payment session for T-Kassa, the `SuccessURL` and `FailURL` parameters define where the customer will be redirected after attempting payment. Both URLs are dynamically constructed using the storefront’s base URL, the cart ID, and the selected country code.

The `cart` object is included in the initialization data to build a receipt in accordance with Federal Law No. 54.

### 4. Payment Button Component 

Medusa storefront requires a dedicated payment button component for each payment provider to handle the checkout flow after the customer confirms his order. This component leverages the payment session data and navigates the customer to the T-Kassa payment page.

Open [`src/modules/checkout/components/payment-button/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment-button/index.tsx#L163-L211) and add the following code:

![Directory structure in the Medusa Storefront after updating the file for payment button component](https://github.com/user-attachments/assets/4b76ee52-747f-452e-9160-6365f742e33e)

```ts
const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  // ...
  switch (true) {
    // ... other cases
    case isTkassa(paymentSession?.provider_id):
      return (
        <TkassaPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    // ... other cases
  }
}

// ... other payment button's components

type TkassaPaymentProps = {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}

const TkassaPaymentButton: React.FC<TkassaPaymentProps> = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    session =>
      session.provider_id === "pp_tkassa_tkassa"
  )

  const handlePayment = () => {
    setSubmitting(true)
    const paymentUrl = (paymentSession?.data as any).PaymentURL
    if (paymentUrl) {
      router.push(paymentUrl)
    } else {
      setErrorMessage("Payment URL отсутствует")
      setSubmitting(false)
    }
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
        data-testid={dataTestId}
        size="large"
      >
        Place order
      </Button>
      <ErrorMessage
        error={errorMessage}
        data-testid="tkassa-payment-error-message"
      />
    </>
  )
}
```

This component locates the `payment_session` for T-Kassa in the current cart and retrieves the `PaymentURL` provided by the backend. When the Place order button is clicked, the customer is redirected to this URL to complete the transaction on the T-Kassa payment page.

If the `PaymentURL` is missing, the component displays an error message without proceeding. The `isLoading` state provides visual feedback while the redirection is being prepared.

The `PaymentButton` component determines whether the current payment session belongs to T-Kassa by using the `isTkassa` helper function. If it does, it renders the `TkassaPaymentButton` to handle the payment flow.

Integrating this component ensures that T-Kassa’s payment process is seamlessly triggered from the checkout flow.

### 5. Payment Capture Endpoint

After the customer completes payment on the T-Kassa page, he is redirected back to the storefront. You need an API route to handle this callback, verify the payment status, and complete the cart.

Create the [`src/app/api/capture-payment/[cartId]/route.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/app/api/capture-payment/%5BcartId%5D/route.ts) file with the following content:

![Directory structure in the Medusa Storefront after creating the file for API route](https://github.com/user-attachments/assets/89ac89de-62ad-4b6c-af61-ab6299587dbf)

```ts
import { NextRequest, NextResponse } from "next/server"
import { revalidateTag } from "next/cache"
import {
  getCacheTag,
  getAuthHeaders,
  removeCartId
} from "@lib/data/cookies"
import { sdk } from "@lib/config"
import { placeOrder } from "@lib/data/cart"

type Params = Promise<{ cartId: string }>

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { cartId } = await params
  const { origin, searchParams } = req.nextUrl

  const countryCode = searchParams.get("country_code") || ""
  const headers = { ...(await getAuthHeaders()) }

  // Retreive fresh cart values
  const cartCacheTag = await getCacheTag("carts")
  revalidateTag(cartCacheTag)
  const { cart } = await sdk.store.cart.retrieve(cartId, {
    fields: "id, order_link.order_id"
  },
    headers
  )
  if (!cart) {
    return NextResponse.redirect(`${origin}/${countryCode}`)
  }

  const orderId = (cart as unknown as Record<string, any>).order_link?.order_id
  if (!orderId) {
    await placeOrder(cartId)
    // Fail when payment not authorized
    return NextResponse.redirect(
      `${origin}/${countryCode}/checkout?step=review&error=payment_failed`
    )
  }

  const orderCacheTag = await getCacheTag("orders")
  revalidateTag(orderCacheTag)
  removeCartId()
  return NextResponse.redirect(
    `${origin}/${countryCode}/order/${orderId}/confirmed`
  )
}
```

This route handles the redirect from T-Kassa after a payment attempt. It retrieves the latest state of the cart to ensure any updates made during payment are reflected.

If the cart does not contain an associated order ID, the route tries to place an order. If successful, the customer is redirected to the order confirmation page. If any error happens during cart completion, the customer is redirected back to the checkout page indicating an error, and he can proceed the checkout once again.

When the payment is successful, the route revalidates the cached cart and order data, removes the cart cookie, and redirects the customer to the order confirmation page. This ensures a consistent post-payment experience while keeping storefront data up to date.

### Example

You can refer to the modifications made in the Medusa Next.js Starter Template, which are located in the [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), which are located in the [`examples/medusa-storefront`](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa/medusa-storefront) directory.

The complete integration diff can be viewed in the [comparison page](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-tkassa%400.0.1...main), open the "Files changed" tab, and explore the differences under the `examples/payment-tkassa/medusa-storefront` directory. Or run diff in the terminal:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-tkassa@0.0.1...main -- examples/payment-tkassa/medusa-storefront
```

## Webhook Setup

To properly handle payment notifications from T-Kassa, configure webhooks in your T-Business account as following:

1. Navigate to `Internet acquiring` → `Shops` → Choose your shop → `Terminals` → Choose `Testing` or `Working` Terminal → Click `Settings` to open the setting window

2. Choose to send Notifications `Via HTTP protocol`

3. Add a URL like:

```
https://$YOUR_MEDUSA_DOMAIN/hooks/payment/tkassa_tkassa
```

Change `{YOUR_MEDUSA_DOMAIN}` with your medusa store domain.

> **Warning!** T-Kassa expects an `OK` response message to confirm successful webhook processing and to prevent duplicate notifications. Currently, Medusa does not natively support custom webhook response messages, but webhooks are still processed correctly without this. For more details, check out the [related discussion](https://github.com/medusajs/medusa/discussions/12887).

## Development

Find documentation on bootstrapping a development environment [here](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa).

## License

Licensed under the [MIT License](LICENSE).
