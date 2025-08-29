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
T-Kassa Payments для Medusa
</h1>

<p align="center">
  Плагин для Medusa, который добавляет поддержку платежей через T-Kassa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.md">Read README in English →</a>
</p>

<br>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Tested_with_Medusa-v2.9.0-green?logo=checkmarx" alt="Medusa" />
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

## 💬 Чат поддержки плагина в Telegram

Присоединяйтесь к чату по разработке плагина [Medusa.js ⊷ T-Kassa (T-Bank)](https://t.me/medusajs_tkassa), чтобы обсудить новые функции и получить поддержку.

## 👥 Medusa.js Чат сообщества в Telegram

Присоединяйтесь к [Medusa.js Чату](https://t.me/medusajs_chat), чтобы общаться с разработчиками, работающими над Medusa.

## Требования

- Medusa server v2.7.0 или выше  
- Node.js v20 или выше  
- Аккаунт T-Business с подключённым интернет-эквайрингом T-Kassa

## Возможности

🛒 **Бесшовная интеграция** с платёжной системой T-Kassa  
📝 **Формирование чеков** в соответствии с 54-ФЗ, поддержка форматов ФФД 1.05 и 1.2  
💳 Поддержка **одностадийных** (автосписание) и **двухстадийных** (авторизация/холдирование) сценариев оплаты  
📊 **Webhook-уведомления** о статусе платежа в реальном времени  
🔄 **Возвраты** и **отмена заказов**  
🛡 **Проверка webhook по токену** для обеспечения безопасности  
🔧 **Подробное логирование** для отладки и аудита транзакций  

## Установка

```bash
yarn add @gorgo/medusa-payment-tkassa
# или
npm install @gorgo/medusa-payment-tkassa
```

## Настройка

Добавьте конфигурацию провайдера в файл `medusa-config.js` приложения Medusa Admin:

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

Добавьте переменные окружения `TerminalKey` и `Password` из личного кабинета T-Business:

```
TKASSA_TERMINAL_KEY=123456789
TKASSA_PASSWORD=supersecret
```

## Параметры провайдера

| Параметр             | Описание                                                                                                                                                                                                                                                                         | По умолчанию |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `terminalKey`        | Ключ терминала, предоставленный T-Kassa (обязателен для аутентификации)                                                                                                                                                                                                          | -            |
| `password`           | Пароль для подписи запросов (обязателен для аутентификации)                                                                                                                                                                                                                      | -            |
| `capture`            | Определяет тип проведения платежа:<br>- `true` — одностадийная оплата (`O` в API)<br>- `false` — двухстадийная оплата (`T` в API)                                                                                                                                                | `true`       |
| `useReceipt`         | Включает формирование онлайн-чеков по 54-ФЗ                                                                                                                                                                                                                                      | `false`      |
| `ffdVersion`         | Версия ФФД: `1.2` или `1.05`<br>Применимо только при `useReceipt=true`                                                                                                                                                                                                           | -            |
| `taxation`           | Система налогообложения:<br>- `osn` — общая СН<br>- `usn_income` — упрощенная СН (доходы)<br>- `usn_income_outcome` — упрощенная СН (доходы минус расходы)<br>- `esn` — единый сельскохозяйственный налог<br>- `patent` — патентная СН<br>Применимо только при `useReceipt=true` | -            |
| `taxItemDefault`     | Ставка НДС по товарам:<br>- `none` — без НДС<br>- `vat0` — 0%<br>- `vat5` — 5%<br>- `vat7` — 7%<br>- `vat10` — 10%<br>- `vat20` — 20%<br>- `vat105` — 5/105<br>- `vat107` — 7/107<br>- `vat110` — 10/110<br>- `vat120` — 20/120<br>Применимо только при `useReceipt=true`        | -            |
| `taxShippingDefault` | Ставка НДС для доставки (аналогично `taxItemDefault`)<br>Применимо только при `useReceipt=true`                                                                                                                                                                                  | -            |

## Интеграция с Storefront (витриной магазина)

Чтобы подключить T-Kassa к витрине магазина на Next.js, добавьте необходимые UI-компоненты, чтобы провайдер отображался на странице checkout.

При выборе T-Kassa storefront вызывает `initiatePaymentSession`, создавая сессию через API T-Kassa. Кнопка Place order перенаправляет пользователя на страницу оплаты T-Kassa. После завершения оплаты T-Kassa отправляет webhook и делает редирект назад. Любое из событий завершает корзину и создаёт заказ в Medusa.

### 1. Конфигурация платежного провайдера

Чтобы сделать T-Kassa доступным в качестве способа оплаты на странице оформления заказа в магазине, вы должны добавить его конфигурацию к сопоставлению поставщиков платежей в файле констант вашего storefront. Это сопоставление определяет, как каждый поставщик платежей отображается в пользовательском интерфейсе.

Откройте [`src/lib/constants.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/constants.tsx#L33-L36) и добавьте следующее:

![Структура каталогов в storefront Medusa после обновления файла с константами](https://github.com/user-attachments/assets/0aee001e-958f-40c6-b329-618e318ff019)

```ts
export const paymentInfoMap: Record<
  string,
  { title: string; icon: React.ReactNode }
> = {
  // ... другие провайдеры
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

Вы расширяете объект `paymentInfoMap`, добавляя в него запись `pp_tkassa_tkassa`. Эта запись определяет заголовок и иконку, которые будут отображаться для провайдера T-Kassa на странице оформления заказа.

Вспомогательная функция `isTkassa` проверяет, принадлежит ли данный `providerId` T-Kassa. Она используется при отображении UI-компонентов, относящихся к конкретному провайдеру.

### 2. Настройки Сookie

При интеграции T-Kassa вам необходимо изменить политику использования файлов cookie, чтобы разрешить перенаправление платежей между доменами. Некоторые платежные провайдеры требуют более строгих настроек файлов cookie, чтобы сохранить сеанс оплаты, когда клиент будет перенаправлен обратно в магазин.

Откройте [`src/lib/data/cookies.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/data/cookies.ts#L79) и обновите конфигурацию файлов cookie следующим образом:

![Структура каталогов в storefront магазина Medusa после обновления файлов cookie](https://github.com/user-attachments/assets/4274d249-6994-4d9f-b4b6-98f2016f0e9f)

```ts
export const setCartId = async (cartId: string) => {
  cookies.set("_medusa_cart_id", cartId, {
    // ... other cookie settings
    sameSite: "lax", // Changed from "strict" for payment redirects
  })
}
```

Эта вспомогательная функция сохраняет идентификатор корзины в файле cookie с именем `_medusa_cart_id`.

Для параметра `SameSite` установлено значение `lax` вместо `strict`. Это изменение гарантирует, что файл cookie отправляется с межсайтовыми запросами во время процесса перенаправления T-Kassa, предотвращая потерю сеанса оплаты.

### 3. Инициализация платёжной сессии

Чтобы перенаправить клиента на T-Kassa, платежный сеанс должен быть должным образом инициализирован с требуемыми параметрами, включая URL-адреса возврата как для успешных, так и для неудачных результатов.

Откройте [`src/modules/checkout/components/payment/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment/index.tsx#L90-L91) и обновите логику инициализации платежа, включив в нее URL-адреса перенаправления T-Kassa:

![Структура каталогов в storefront магазина Medusa после обновления файла для компонента оплаты](https://github.com/user-attachments/assets/5c4dfcf9-57e7-48f6-956c-0e0a91ec6c8f)

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

При запуске сеанса оплаты в T-Kassa параметры `SuccessURL` и `FailURL` определяют, куда клиент будет перенаправлен после попытки оплаты. Оба URL-адреса создаются динамически с использованием базового URL-адреса магазина, идентификатора корзины и выбранного кода страны.

Объект `cart` включен в данные инициализации для создания чеков в соответствии с Федеральным законом № 54.

### 4. Кнопка оплаты

В Medusa storefront для каждого провайдера платежных услуг требуется специальный компонент кнопки оплаты, который будет обрабатывать процесс оформления заказа после подтверждения клиентом своего заказа. Этот компонент использует данные платежного сеанса и переводит клиента на страницу оплаты T-Kassa.

Откройте [`src/modules/checkout/components/payment-button/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment-button/index.tsx#L163-L211) и добавьте следующий код:

![Структура каталогов в storefront магазина Medusa после обновления файла для компонента кнопки оплаты](https://github.com/user-attachments/assets/4b76ee52-747f-452e-9160-6365f742e33e)

```ts
const TkassaPaymentButton: React.FC<TkassaPaymentProps> = ({ cart, notReady }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const router = useRouter()

  const paymentSession = cart.payment_collection?.payment_sessions?.find(
    session => session.provider_id === "pp_tkassa_tkassa"
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
}
```

Этот компонент находит `payment_session` для T-Kassa в текущей корзине и извлекает `PaymentURL`, предоставленный серверной частью. При нажатии кнопки Place order клиент перенаправляется на этот URL-адрес для завершения транзакции на странице оплаты T-Kassa.

Если параметр `PaymentURL` отсутствует, компонент отображает сообщение об ошибке, не позволяя продолжить. Состояние `isLoading` обеспечивает визуальную обратную связь во время подготовки перенаправления.

Компонент `PaymentButton` определяет, принадлежит ли текущий платежный сеанс T-Kassa, используя вспомогательную функцию `isTkassa`. Если это так, он отображает `TkassaPaymentButton` для обработки потока платежей.

Интеграция этого компонента гарантирует, что процесс оплаты в T-Kassa будет легко запускаться из процесса оформления заказа.

### 5. Эндпоинт захвата платежа

После того, как клиент завершит оплату на странице T-Kassa, он будет перенаправлен обратно на страницу магазина. Вам нужен API-интерфейс для обработки обратного вызова, проверки статуса платежа и оформления корзины.

Создайте файл [`src/app/api/capture-payment/[cartId]/route.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/app/api/capture-payment/%5BcartId%5D/route.ts) со следующим содержимым:

![Структура каталогов в storefront магазина Medusa после создания файла для API route](https://github.com/user-attachments/assets/89ac89de-62ad-4b6c-af61-ab6299587dbf)

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

Этот маршрут обрабатывает перенаправление с T-Kassa после попытки оплаты. Он извлекает последнее состояние корзины, чтобы убедиться, что все изменения, внесенные во время оплаты, отражены.

Если корзина не содержит связанного идентификатора заказа, маршрут пытается разместить заказ. В случае успеха клиент перенаправляется на страницу подтверждения заказа. Если при заполнении корзины возникает какая-либо ошибка, клиент перенаправляется обратно на страницу оформления заказа с указанием ошибки, и он может продолжить оформление заказа еще раз.

После успешной оплаты route повторно проверяет сохраненные в кэше данные о корзине и заказе, удаляет файл cookie корзины и перенаправляет клиента на страницу подтверждения заказа. Это обеспечивает последовательный процесс оплаты после оплаты, сохраняя при этом актуальность данных в storefront магазина.

### Пример

Вы можете ознакомиться с изменениями, внесенными в стартовый шаблон Medusa Next.js, которые находятся в каталоге [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), который находится в каталоге [`examples/medusa-storefront`](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa/medusa-storefront).

Полное описание интеграции можно посмотреть в разделе [сcomparison page](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-tkassa%400.0.1...main), откройте вкладку "Files changed" и изучите различия в каталоге `examples/payment-tkassa/medusa-storefront`. Или запустите diff в терминале:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-tkassa@0.0.1...main -- examples/payment-tkassa/medusa-storefront
```

## Настройка webhook’ов

Чтобы правильно обрабатывать уведомления о платежах от T-Kassa, настройте webhooks в своей учетной записи T-Business следующим образом:

1. Перейдите в раздел `Интернет-эквайринг` → `Магазины` → Выберите свой магазин → `Терминалы` → Выберите `Тестовый` или `Рабочий` терминал → Нажмите `Настройки`, чтобы открыть окно настройки

2. Выберите отправку уведомлений `По протоколу HTTP`

3. Укажите URL вида:

```
https://{YOUR_MEDUSA_DOMAIN}/hooks/payment/tkassa_tkassa
```

> **Важно!** T-Kassa ожидает ответное сообщение "OK", подтверждающее успешную обработку веб-запросов и предотвращающее дублирование уведомлений. В настоящее время Medusa изначально не поддерживает пользовательские ответные сообщения webhook, но веб-запросы по-прежнему корректно обрабатываются и без этого. Для получения более подробной информации ознакомьтесь с [обсуждением по теме](https://github.com/medusajs/medusa/discussions/12887).

## Разработка

Документация по запуску окружения разработки: [examples/payment-tkassa](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa).

## Поддержка и сообщество

Присоединяйтесь к [чату сообщества Medusa Telegram](https://t.me/medusajs_chat), чтобы обсудить новые функции, получить поддержку и пообщаться с разработчиками, работающими над Medusa.

## Лицензия

Распространяется по [MIT License](LICENSE).
