<p align="center">
  <a href="https://www.medusajs.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6">
      <source media="(prefers-color-scheme: light)" srcset="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6">
      <img alt="Medusa-Robokassa logo" src="https://github.com/user-attachments/assets/119f3faf-da2e-476e-bf08-6e557de689b6" height="120">
    </picture>
  </a>
</p>

<h1 align="center">
Robokassa Payments для Medusa
</h1>

<p align="center">
Плагин для Medusa, который добавляет поддержку платежей через Robokassa.
</p>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.9.0-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_robokassa">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js⊷Robokassa_Support_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js⊷Robokassa on Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Medusa.js_Dev_Community_Chat-0088cc?logo=telegram&style=social" alt="Medusa.js Chat on Telegram" />
  </a>
</p>

> [Read README in English](./README.md)

## Возможности

🛒 **Бесшовная интеграция** с платежной системой Robokassa  
💳 **Одностадийные** (автосписание) и **двухстадийные** (авторизация/холд) сценарии оплаты  
🔄 **Полные возвраты** и **отмена заказа**  
📊 **Webhook-уведомления** о статусе платежа в реальном времени  
🛡 **Проверка подписи webhook’ов** для повышенной безопасности  
⚙️ **Тестовый режим** — имитация оплаты без реальных списаний  
🔧 **Подробное логирование** для отладки и аудита транзакций  

## 💬 Чат поддержки плагина в Telegram

Присоединяйтесь к чату [Medusa.js ⊷ Robokassa](https://t.me/medusajs_robokassa), чтобы обсуждать функциональность и получать поддержку.

## 👥 Сообщество Medusa.js в Telegram

Присоединяйтесь к [Medusa.js Chat](https://t.me/medusajs_chat), чтобы общаться с разработчиками, создающими проекты на Medusa.

## Требования

- Medusa server v2.7.0 или новее  
- Node.js v20 или новее  
- Аккаунт Robokassa — [зарегистрируйтесь или войдите](https://login.robokassa.ru/reg?promoCode=gorgo)

## Установка

```bash
yarn add @gorgo/medusa-payment-robokassa
# или
npm install @gorgo/medusa-payment-robokassa
```

## Настройка

Добавьте конфигурацию провайдера в `medusa-config.js` вашего приложения Medusa:

```js
// ...
module.exports = defineConfig({
  // ...
  modules: [
    {
      resolve: "@medusajs/medusa/payment",
      options: {
        providers: [
          {
            resolve: "@gorgo/medusa-payment-robokassa/providers/payment-robokassa",
            id: "robokassa",
            options: {
              merchantLogin: process.env.ROBOKASSA_MERCHANT_LOGIN,
              hashAlgorithm: process.env.ROBOKASSA_HASH_ALGORITHM,
              password1: process.env.ROBOKASSA_PASSWORD_1,
              password2: process.env.ROBOKASSA_PASSWORD_2,
              testPassword1: process.env.ROBOKASSA_TEST_PASSWORD_1,
              testPassword2: process.env.ROBOKASSA_TEST_PASSWORD_2,
              capture: false,  // по умолчанию true
              isTest: true,    // по умолчанию false
            },
          }   
        ]
      }
    }
  ]
})
```

Добавьте переменные окружения: идентификатор магазина `merchantLogin`, алгоритм подписи `hashAlgorithm`, секретные пароли `password1`, `password2`, а также тестовые пароли `testPassword1`, `testPassword2`:

```
ROBOKASSA_MERCHANT_LOGIN=test-shop
ROBOKASSA_HASH_ALGORITHM=md5
ROBOKASSA_PASSWORD_1=supersecret
ROBOKASSA_PASSWORD_2=supersecret
ROBOKASSA_TEST_PASSWORD_1=supersecret
ROBOKASSA_TEST_PASSWORD_2=supersecret
```

> **Важно!** Значение `ROBOKASSA_HASH_ALGORITHM` должно совпадать с настройкой в аккаунте Robokassa и быть одним из: `md5`, `sha1`, `sha256`, `sha384`, `sha512` или `ripemd160` (обратите внимание: для `ripemd160` возможны ошибки на стороне провайдера).

В настройках магазина Robokassa укажите **Метод отправки данных на Result URL** — `GET` или `POST`, и задайте **Result URL** в формате:

```
https://{YOUR_MEDUSA_DOMAIN}/hooks/payment/robokassa_robokassa
```

## Опции провайдера

| Опция            | Описание                                                                 | Обязательно | По умолчанию |
|------------------|--------------------------------------------------------------------------|-------------|--------------|
| `merchantLogin`  | Идентификатор магазина Robokassa                                         | Да          | -            |
| `hashAlgorithm`  | Алгоритм подписи: `md5`, `sha1`, `sha256`, `sha384`, `sha512`            | Да          | -            |
| `password1`      | Технический пароль №1 для расчёта подписи при инициализации платежа      | Да         | -            |
| `password2`      | Технический пароль №2 для проверки подписи в уведомлениях об оплате      | Да         | -            |
| `testPassword1`  | Тестовый пароль №1 для подписи в тестовом режиме *(если `isTest=true`)*  | Нет         | -            |
| `testPassword2`  | Тестовый пароль №2 для уведомлений в тестовом режиме *(если `isTest=true`)* | Нет       | -            |
| `capture`        | Автосписание: `true` — 1‑стадийно; `false` — предавторизация (двухстадийно) | Нет       | `true`       |
| `isTest`         | Включить тестовый режим                                                   | Нет         | `false`      |

## Интеграция со storefront

Чтобы интегрировать Robokassa в витрину Next.js, сначала добавьте необходимые UI‑компоненты, чтобы провайдер отображался на странице оформления заказа рядом с другими методами.

Когда пользователь выбирает Robokassa, витрина вызывает `initiatePaymentSession` с нужными параметрами. Бэкенд Medusa создаёт подписанную ссылку на оплату и сохраняет её в данных платёжной сессии. Кнопка *Place order* перенаправляет пользователя на хост‑страницу Robokassa. После завершения попытки оплаты Robokassa перенаправляет пользователя обратно и отправляет серверное уведомление (ResultURL). Что бы ни пришло раньше, может завершить корзину и создать заказ (обычно финальное подтверждение делается по ResultURL).

Для Next.js Starter внесите следующие изменения.

### 1. Конфигурация платёжного провайдера

Сделайте Robokassa доступной на странице checkout — добавьте её конфигурацию в маппинг провайдеров витрины. Этот маппинг определяет название и иконку в UI.

Откройте [`src/lib/constants.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/lib/constants.tsx#L33-L36) и добавьте:

![Directory structure in the Medusa Storefront after updating the file for constants](https://github.com/user-attachments/assets/0aee001e-958f-40c6-b329-618e318ff019)

```ts
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.ReactNode }
> = {
  // ... other providers
  pp_robokassa_robokassa: {
    title: "Robokassa",
    icon: <CreditCard />,
  }
}

// Helper to check if a provider is Robokassa
export const isRobokassa = (providerId?: string) => {
  return providerId?.startsWith("pp_robokassa")
}
```

Вы расширяете объект `paymentInfoMap`, добавляя запись `pp_robokassa_robokassa`. Эта запись задаёт заголовок и иконку провайдера на странице оформления заказа.

Хелпер `isRobokassa` проверяет, относится ли `providerId` к Robokassa. Он используется для отрисовки специфичного UI и маршрутизации шага оплаты к нужному компоненту.

### 2. Настройки cookie

При интеграции Robokassa ослабьте политику cookie для кросс‑доменных редиректов: используйте `SameSite: "lax"`, чтобы корзинная cookie передавалась при возврате со страницы Robokassa и сессия не терялась.

Откройте [`src/lib/data/cookies.ts`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/lib/data/cookies.ts#L79) и обновите конфигурацию:

![Directory structure in the Medusa Storefront after updating the file for cookies](https://github.com/user-attachments/assets/4274d249-6994-4d9f-b4b6-98f2016f0e9f)

```ts
export const setCartId = async (cartId: string) => {
  cookies.set("_medusa_cart_id", cartId, {
    // ... other cookie settings
    sameSite: "lax", // Changed from "strict" for payment redirects
  })
}
```

Эта функция сохраняет идентификатор корзины в cookie `_medusa_cart_id`. Значение `lax` гарантирует передачу cookie при кросс‑сайтовом возврате после оплаты.

### 3. Инициализация платёжной сессии

Чтобы перенаправить пользователя на Robokassa, корректно инициализируйте сессию с параметрами для success/fail‑URL, языка и email.

Откройте [`src/modules/checkout/components/payment/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/modules/checkout/components/payment/index.tsx#L89-L96) и добавьте логику с redirect‑параметрами Robokassa:

![Directory structure in the Medusa Storefront after updating the file for payment component](https://github.com/user-attachments/assets/5c4dfcf9-57e7-48f6-956c-0e0a91ec6c8f)

```ts
await initiatePaymentSession(cart, {
  provider_id: selectedPaymentMethod,
  data: {
    SuccessUrl2: `${getBaseURL()}/api/capture-payment/${cart?.id}?country_code=${countryCode}`,
    SuccessUrl2Method: "GET",
    FailUrl2: `${getBaseURL()}/api/capture-payment/${cart?.id}?country_code=${countryCode}`,
    FailUrl2Method: "GET",
    EMail: cart?.email,
    Culture: countryCode === "ru" ? "ru" : "en",
  }
})
```

При инициализации Robokassa ваш бэкенд возвращает подписанный **payment URL** (сохраняется в сессии), по которому витрина выполняет редирект. Затем Robokassa вернёт пользователя на `SuccessUrl2`/`FailUrl2` и отправит асинхронное уведомление на ваш `ResultURL` для серверной проверки.

### 4. Компонент кнопки оплаты

Витрина Medusa требует отдельную кнопку для каждого провайдера на шаге подтверждения. Для Robokassa кнопка читает текущую платёжную сессию и переносит пользователя на `paymentUrl` из `session.data`.

Откройте [`src/modules/checkout/components/payment-button/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/modules/checkout/components/payment-button/index.tsx#L163-L211) и добавьте следующий код:

![Directory structure in the Medusa Storefront after updating the file for payment button component](https://github.com/user-attachments/assets/4b76ee52-747f-452e-9160-6365f742e33e)

```ts
const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  // ...
  switch (true) {
    // ... other cases
    case isRobokassa(paymentSession?.provider_id):
      return (
        <RobokassaPaymentButton
          notReady={notReady}
          cart={cart}
          data-testid={dataTestId}
        />
      )
    default:
      return <Button disabled>Select a payment method</Button>
  }
}

// ... other payment button's components

type RobokassaPaymentProps = {
  cart: HttpTypes.StoreCart
  notReady: boolean
  "data-testid"?: string
}

const RobokassaPaymentButton: React.FC<RobokassaPaymentProps> = ({
  cart,
  notReady,
  "data-testid": dataTestId,
}) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    session =>
      session.provider_id === "pp_robokassa_robokassa"
  )

  const handlePayment = () => {
    setSubmitting(true)
    const paymentUrl = (paymentSession?.data as any).paymentUrl
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
        data-testid="robokassa-payment-error-message"
      />
    </>
  )
}
```

Этот компонент находит в активной корзине платёжную сессию Robokassa и читает `data.paymentUrl`. При клике по *Place order* пользователь перенаправляется на этот URL, чтобы завершить оплату на хост‑странице Robokassa.

Если `paymentUrl` отсутствует, компонент показывает сообщение об ошибке и не выполняет переход. Состояние `isLoading` даёт визуальную обратную связь, пока готовится редирект.

Родительский `PaymentButton` использует `isRobokassa`, чтобы отрисовать `RobokassaPaymentButton` для текущей сессии; иначе показывается неактивная кнопка *Select a payment method*.

### 5. Эндпоинт захвата платежа (capture)

После завершения оплаты на стороне Robokassa пользователь возвращается в витрину. Нужен API‑маршрут, который обработает этот колбэк, проверит статус платежа и завершит корзину.

Создайте файл [`src/app/api/capture-payment/[cartId]/route.ts`](https://github.com/gorgojs/medusa-plugins/blob/main/examples/payment-robokassa/medusa-storefront/src/app/api/capture-payment/%5BcartId%5D/route.ts) со следующим содержимым:

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

  // Retrieve fresh cart values
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

Этот маршрут обрабатывает редирект с Robokassa после попытки оплаты. Он извлекает актуальное состояние корзины, чтобы учесть изменения, произошедшие в процессе платежа.

Если у корзины нет связанного `order_id`, маршрут пытается создать заказ. При успехе пользователь отправляется на страницу подтверждения заказа. Если при завершении корзины произошла ошибка, он возвращается на шаг review с индикатором ошибки и может повторить оплату.

При успешной оплате маршрут инвалидирует кэш корзины и заказа, удаляет cookie корзины и делает редирект на страницу подтверждения — это обеспечивает согласованный опыт после оплаты и актуальные данные витрины.

## Пример

Посмотрите изменения в [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa) — обновлённые файлы доступны в каталоге [`examples/payment-robokassa/medusa-storefront`](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa/medusa-storefront).

Полный diff интеграции доступен на [странице сравнения](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-robokassa%400.0.1...main) — откройте вкладку **Files changed** и изучите изменения в папке `examples/payment-robokassa/medusa-storefront`. Или выполните в терминале:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-robokassa@0.0.1...main -- examples/payment-robokassa/medusa-storefront
```

## Разработка

Документация по запуску окружения для разработки — [здесь](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa).

## Лицензия

Распространяется по [лицензии MIT](LICENSE).
