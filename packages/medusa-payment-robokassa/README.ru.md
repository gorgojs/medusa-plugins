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
Платежи Robokassa для Medusa
</h1>

<p align="center">
  Плагин Medusa для приёма платежей через Robokassa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-robokassa/README.md">Read README in English →</a>
</p>

<br/>

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

## Возможности

- 🔗  **Бесшовная интеграция** с платежной системой Robokassa  
- 🧾  **Формирование онлайн-чеков** в соответствии с 54-ФЗ  
- 1️⃣  Поддержка **одностадийных** (автосписание) и **двухстадийных** (авторизация/холдирование) сценариев оплаты  
- 🔔  **Вебхук-уведомления** о статусах платежей в реальном времени  
- 🔄  **Возвраты и отмена заказов**  
- 🛡  **Проверка подписи вебхуков** для обеспечения безопасности  
- ⚙️  Поддержка **тестового режима** для имитация оплаты без реальных списаний  
- 🔍  **Подробное логирование** для отладки и аудита транзакций  

## 💬  Чат поддержки плагина Robokassa

Есть вопросы или идеи по новым функциям плагина?   
Присоединяйтесь к чату в Telegram – [@medusajs_robokassa](https://t.me/medusajs_robokassa)

## 👥  Чат сообщества Medusa.js

Общайтесь в Telegram с другими разработчиками Medusa – [@medusajs_chat](https://t.me/medusajs_chat)

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

```ts
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

Добавьте следующие переменные окружения: идентификатор магазина `merchantLogin`, алгоритм подписи `hashAlgorithm`, секретные пароли `password1`, `password2`, а также тестовые пароли `testPassword1`, `testPassword2`:

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

## Параметры провайдера

| Опция            | Описание                                                                 | Обязательный | По умолчанию |
|------------------|--------------------------------------------------------------------------|-------------|--------------|
| `merchantLogin`  | Идентификатор магазина Robokassa                                         | Да          | -            |
| `hashAlgorithm`  | Алгоритм подписи: `md5`, `sha1`, `sha256`, `sha384`, `sha512`            | Да          | -            |
| `password1`      | Технический пароль №1 для расчёта подписи при инициализации платежа      | Да         | -            |
| `password2`      | Технический пароль №2 для проверки подписи в уведомлениях об оплате      | Да         | -            |
| `testPassword1`  | Тестовый пароль №1 для подписи в тестовом режиме *(если `isTest=true`)*  | Нет         | -            |
| `testPassword2`  | Тестовый пароль №2 для уведомлений в тестовом режиме *(если `isTest=true`)* | Нет       | -            |
| `capture`        | Автосписание: `true` — 1‑стадийно; `false` — предавторизация (двухстадийно) | Нет       | `true`       |
| `isTest`         | Включает тестовый режим                                                   | Нет         | `false`      |
| `useReceipt`     | Включает формирование онлайн-чеков по 54-ФЗ                                                    | Нет         | `false`      |
| `taxation`         | Система налогообложения:<br>- `osn` — общая СН<br>- `usn_income` — упрощенная СН (доходы)<br>- `usn_income_outcome` — упрощенная СН (доходы минус расходы)<br>- `esn` — единый сельскохозяйственный налог<br>- `patent` — патентная СН<br><br>Применимо только при `useReceipt=true`                                                  | Нет         | -      |
| `taxItemDefault`         | Ставка НДС по товарам:<br>- `none` — без НДС<br>- `vat0` — 0%<br>- `vat5` — 5%<br>- `vat7` — 7%<br>- `vat10` — 10%<br>- `vat20` — 20%<br>- `vat105` — 5/105<br>- `vat107` — 7/107<br>- `vat110` — 10/110<br>- `vat120` — 20/120<br><br>Применимо только при `useReceipt=true`                                                  | Нет         | -     |
| `taxShippingDefault`         | Ставка НДС для доставки (аналогично `taxItemDefault`)<br><br>Применимо только при `useReceipt=true`                                                   | Нет         | -      |

## Интеграция с Storefront (витриной магазина)

Для интеграции платёжного провайдера Robokassa с storefront на Next.js начните с добавления необходимых UI-компонентов. Таким образом провайдер будет отображаться на странице оформления заказа наряду с другими доступными методами оплаты.

Когда пользователь выбирает Robokassa, витрина должна вызвать метод `initiatePayment` с нужными параметрами. Это создаст платёжную сессию через API Robokassa и подготовит покупателя к перенаправлению. После этого кнопка *Place Order* должна отправить пользователя на страницу оплаты Robokassa, где он сможет выбрать предпочтительный способ оплаты.

После завершения оплаты Robokassa одновременно отправит вебхук и перенаправит покупателя обратно в витрину. То событие, которое придёт первым, завершит корзину и создаст новый заказ в Medusa.

Для запуска на Next.js необходимо внести следующие изменения:

### 1. Конфигурация платёжного провайдера

Чтобы сделать Robokassa доступным в качестве способа оплаты на странице оформления заказа витрины магазина, необходимо добавить её конфигурацию в маппинг платёжных провайдеров в файле с константами вашего storefront. Этот маппинг определяет как каждый провайдер отображается в интерфейсе.

Откройте [`src/lib/constants.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/lib/constants.tsx#L33-L36) и добавьте следующий код:

![Структура проекта storefront Medusa после обновления файла с константами](https://github.com/user-attachments/assets/0aee001e-958f-40c6-b329-618e318ff019)

```ts
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.ReactNode }
> = {
  // ... другие провайдеры
  pp_robokassa_robokassa: {
    title: "Robokassa",
    icon: <CreditCard />,
  }
}

// Вспомогатьсяная функция для проверки, является ли провайдер Robokassa
export const isRobokassa = (providerId?: string) => {
  return providerId?.startsWith("pp_robokassa")
}
```

Вы расширяете объект `paymentInfoMap`, добавляя запись `pp_robokassa_robokassa`. Эта запись определяет заголовок и иконку, которые будут отображаться для Robokassa на странице оформления заказа.

Вспомогательная функция `isRobokassa` проверяет, принадлежит ли переданный `providerId` к Robokassa.
Это используется при рендеринге UI-компонентов, специфичных для конкретного провайдера.

### 2. Настройки Cookie

При подключении Robokassa настройте политику cookie так, чтобы поддерживались междоменные редиректы. Это нужно для сохранения платёжной сессии при возврате пользователя в магазин.

Откройте [`src/lib/data/cookies.ts`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/lib/data/cookies.ts#L79) и обновите конфигурацию файлов cookie следующим образом:

![Структура проекта storefront Medusa после обновления файлов cookie](https://github.com/user-attachments/assets/4274d249-6994-4d9f-b4b6-98f2016f0e9f)

```ts
export const setCartId = async (cartId: string) => {
  cookies.set("_medusa_cart_id", cartId, {
    // ... другие настройки cookie
    sameSite: "lax", // Переключено с режима «Strict» для междоменных редиректов
  })
}
```

Эта вспомогательная функция сохраняет идентификатор корзины в cookie с именем `_medusa_cart_id`.

Опция `sameSite` установлена в значение `lax` вместо `strict`. Это изменение гарантирует, что cookie будет отправляться при кросс-доменных запросах во время процесса редиректа через Robokassa, предотвращая потерю платёжной сессии.

### 3. Инициализация платёжной сессии

Чтобы перенаправить покупателя в Robokassa, платёжная сессия должна быть корректно инициализирована с обязательными параметрами, включая return URL для обоих случаев: успешной и неуспешной оплаты, язык, email покупателя, а также корзину для формирования онлайн-чеков.

Откройте [`src/modules/checkout/components/payment/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/modules/checkout/components/payment/index.tsx#L89-L96) и обновите логику инициализации платежа, включив в нее данные корзины и URL возврата для Robokassa:

![Структура проекта storefront Medusa после обновления файла для компонента оплаты](https://github.com/user-attachments/assets/5c4dfcf9-57e7-48f6-956c-0e0a91ec6c8f)

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
    cart: cart
  }
})
```

При инициализации платёжной сессии для Robokassa параметры `SuccessUrl2` и `FailUrl2` определяют, куда будет перенаправлен покупатель после попытки оплаты. Оба URL динамически формируются на основе базового URL storefront, идентификатора корзины и выбранного кода страны.

Объект `cart` включается в данные инициализации для формирования чека в соответствии с Федеральным законом № 54.

### 4. Компонент кнопки оплаты

В storefront для каждого платёжного провайдера необходим отдельный компонент кнопки оплаты. Он отвечает за обработку оформления заказа после подтверждения пользователем и, используя данные платёжного сеанса, перенаправляет его на страницу оплаты Robokassa.

Откройте [`src/modules/checkout/components/payment-button/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/f2e1073275317a01f1447efe9a87d6bc135c5b61/examples/payment-robokassa/medusa-storefront/src/modules/checkout/components/payment-button/index.tsx#L163-L211) и добавьте следующий код:

![Структура проекта storefront Medusa после обновления файла для компонента кнопки оплаты](https://github.com/user-attachments/assets/4b76ee52-747f-452e-9160-6365f742e33e)

```ts
const PaymentButton: React.FC<PaymentButtonProps> = ({
  cart,
  "data-testid": dataTestId,
}) => {
  // ...
  switch (true) {
    // ... другие проверки
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

// ... другие компоненты кнопок оплаты

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

Этот компонент находит в активной корзине платёжную сессию Robokassa и читает `data.paymentUrl`. При клике по *Place order* пользователь перенаправляется на этот URL, чтобы завершить оплату на странице Robokassa.

Если `paymentUrl` отсутствует, компонент показывает сообщение об ошибке и не выполняет переход. Состояние `isLoading` даёт визуальную обратную связь, пока готовится редирект.

Родительский `PaymentButton` использует `isRobokassa`, чтобы отрисовать `RobokassaPaymentButton` для текущей сессии; иначе показывается неактивная кнопка *Select a payment method*.

### 5. Endpoint захвата платежа

После того как покупатель завершает оплату на странице Robokassa, он перенаправляется обратно в витрину магазина. Необходимо создать API-роут, который обработает этот callback, проверит статус платежа и завершит корзину.

Создайте файл [`src/app/api/capture-payment/[cartId]/route.ts`](https://github.com/gorgojs/medusa-plugins/blob/main/examples/payment-robokassa/medusa-storefront/src/app/api/capture-payment/%5BcartId%5D/route.ts) со следующим содержимым:

![Структура проекта storefront Medusa после создания файла для API route](https://github.com/user-attachments/assets/89ac89de-62ad-4b6c-af61-ab6299587dbf)

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

  // Получить актуальные значения корзины
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
    // Ошибка при неавторизованном платеже
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

Этот роут обрабатывает редирект от Robokassa после попытки оплаты. Он получает актуальное состояние корзины, чтобы убедиться, что все изменения, внесённые во время оплаты, были отражены.

Если в корзине нет связанного идентификатора заказа, обработчик роута пытается оформить заказ. В случае успеха покупатель перенаправляется на страницу подтверждения заказа. Если же при обработке корзины возникла ошибка, покупатель возвращается на страницу оформления заказа с указанием ошибки и может повторить процесс оплаты заказа.

Когда оплата проходит успешно, роут повторно валидирует кэшированные данные корзины и заказа, удаляет cookie корзины и перенаправляет покупателя на страницу подтверждения заказа. Это гарантирует корректное завершение платёжного процесса и сохранение актуальных данных в storefront.

## Пример

Вы можете ознакомиться с изменениями, внесенными в стартовый шаблон [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), в директории [`examples/payment-robokassa/medusa-storefront`](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa/medusa-storefront).

Полный код интеграции можно посмотреть в разделе [сomparison page](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-robokassa%400.0.1...main) — откройте вкладку `Files changed` и изучите различия в каталоге `examples/payment-robokassa/medusa-storefront`. Или запустите diff в терминале:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-robokassa@0.0.1...main -- examples/payment-robokassa/medusa-storefront
```

## Разработка

Документация по запуску окружения для разработки можно найти [здесь](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-robokassa).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
