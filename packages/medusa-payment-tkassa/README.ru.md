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
Платежи T-Kassa для Medusa
</h1>

<p align="center">
  Плагин Medusa для приёма платежей через T-Kassa.
  <br/>
  <a href="https://github.com/gorgojs/medusa-plugins/blob/HEAD/packages/medusa-payment-tkassa/README.md">Read README in English →</a>
</p>

<br>

<p align="center">
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Medusa-^2.7.0-blue?logo=medusa" alt="Medusa" />
  </a>
  <a href="https://medusajs.com">
    <img src="https://img.shields.io/badge/Протестировано_с_Medusa-v2.10.1-green?logo=checkmarx" alt="Medusa" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_tkassa">
    <img src="https://img.shields.io/badge/Telegram-Чат_поддержки_Medusa.js⊷T--Kassa-0088cc?logo=telegram&style=social" alt="Чат Medusa.js⊷T-Kassa в Telegram" />
  </a>
</p>

<p align="center">
  <a href="https://t.me/medusajs_chat">
    <img src="https://img.shields.io/badge/Telegram-Чат_dev--сообщества_Medusa.js-0088cc?logo=telegram&style=social" alt="Чат сообщества разработчиков Medusa.js в Telegram" />
  </a>
</p>

## Возможности

- 🔗  **Бесшовная интеграция** с платёжной системой YooKassa
- 🧾  **Формирование онлайн-чеков** в соответствии с 54-ФЗ
- 1️⃣  **Одностадийные** (автосписание) и  **2️⃣  двухстадийные** (авторизация/холдирование) сценарии оплаты
- 🔄  **Возвраты и отмена заказов**
- 🔔  **Вебхук-уведомления** о статусах платежей в реальном времени
- 🛡  **Проверка вебхуков** для обеспечения безопасности
- 🔍  **Подробное логирование** для отладки

## 💬  Чат поддержки плагина T-Kassa

Есть вопросы или идеи по новым функциям плагина?   
Присоединяйтесь к чату в Telegram – [@medusajs_tkassa](https://t.me/medusajs_tkassa)

## 👥  Чат сообщества Medusa.js

Общайтесь в Telegram с другими разработчиками Medusa – [@medusajs_chat](https://t.me/medusajs_chat)

## Требования

- Medusa server v2.7.0 или выше  
- Node.js v20 или выше  
- Аккаунт T-Business с подключённым интернет-эквайрингом T-Kassa – [зарегистрируйтесь или войдите](https://www.tbank.ru/kassa/?utm_source=partners_sme&utm_medium=prt.utl&utm_campaign=business.int_acquiring.7-3S975SBSY&partnerId=7-3S975SBSY&agentId=5-B6HGU9OD&agentSsoId=1316b7dd-3a90-4167-9d35-37910431a19c)

## Установка

```bash
yarn add @gorgo/medusa-payment-tkassa
# или
npm install @gorgo/medusa-payment-tkassa
```

## Настройка

Добавьте конфигурацию провайдера в файл `medusa-config.js` в приложении Medusa Admin:

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

| Параметр             | Описание                                                                                                                                                                                                                                                                         | Обязательный | По умолчанию |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| `terminalKey`        | Ключ терминала, предоставленный T-Kassa (обязателен для аутентификации)                                                                                                                                                                                                          | Да           | -            |
| `password`           | Пароль для подписи запросов (обязателен для аутентификации)                                                                                                                                                                                                                      | Да           | -            |
| `capture`            | Определяет тип проведения платежа:<br>- `true` — одностадийная оплата (`O` в API)<br>- `false` — двухстадийная оплата (`T` в API)                                                                                                                                                | Нет          | `true`       |
| `useReceipt`         | Включает формирование онлайн-чеков по 54-ФЗ                                                                                                                                                                                                                                      | Нет          | `false`      |
| `ffdVersion`         | Версия ФФД: `1.2` или `1.05`<br>Применимо только при `useReceipt=true`                                                                                                                                                                                                           | Нет          | -            |
| `taxation`           | Система налогообложения:<br>- `osn` — общая СН<br>- `usn_income` — упрощенная СН (доходы)<br>- `usn_income_outcome` — упрощенная СН (доходы минус расходы)<br>- `esn` — единый сельскохозяйственный налог<br>- `patent` — патентная СН<br>Применимо только при `useReceipt=true` | Нет          | -            |
| `taxItemDefault`     | Ставка НДС по товарам:<br>- `none` — без НДС<br>- `vat0` — 0%<br>- `vat5` — 5%<br>- `vat7` — 7%<br>- `vat10` — 10%<br>- `vat20` — 20%<br>- `vat105` — 5/105<br>- `vat107` — 7/107<br>- `vat110` — 10/110<br>- `vat120` — 20/120<br>Применимо только при `useReceipt=true`        | Нет          | -            |
| `taxShippingDefault` | Ставка НДС для доставки (аналогично `taxItemDefault`)<br>Применимо только при `useReceipt=true`                                                                                                                                                                                  | Нет          | -            |

## Интеграция с Storefront (витриной магазина)

Для интеграции платёжного провайдера T-Kassa с storefront на Next.js начните с добавления необходимых UI-компонентов. Таким образом провайдер будет отображаться на странице оформления заказа наряду с другими доступными методами оплаты.

Когда пользователь выбирает T-Kassa, витрина должна вызвать метод `initiatePayment` с нужными параметрами. Это создаст платёжную сессию через API T-Kassa и подготовит покупателя к перенаправлению. После этого кнопка *Place Order* должна отправить пользователя на страницу оплаты T-Kassa, где он сможет выбрать предпочтительный способ оплаты.

После завершения оплаты T-Kassa одновременно отправит вебхук и перенаправит покупателя обратно в витрину. То событие, которое придёт первым, завершит корзину и создаст новый заказ в Medusa.

Для запуска на Next.js необходимо внести следующие изменения:

### 1. Конфигурация платежного провайдера

Чтобы сделать T-Kassa доступным в качестве способа оплаты на странице оформления заказа витрины магазина, необходимо добавить её конфигурацию в маппинг платёжных провайдеров в файле с константами вашего storefront. Этот маппинг определяет как каждый провайдер отображается в интерфейсе.

Откройте [`src/lib/constants.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/constants.tsx#L33-L36) и добавьте следующий код:

![Структура проекта storefront Medusa после обновления файла с константами](https://github.com/user-attachments/assets/0aee001e-958f-40c6-b329-618e318ff019)

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

// Вспомогательная функция для проверки, является ли провайдер T-Kassa
export const isTkassa = (providerId?: string) => {
  return providerId?.startsWith("pp_tkassa")
}
```

Вы расширяете объект `paymentInfoMap`, добавляя в него запись `pp_tkassa_tkassa`. Эта запись определяет заголовок и иконку, которые будут отображаться для T-Kassa на странице оформления заказа.

Вспомогательная функция `isTkassa` проверяет, принадлежит ли переданный `providerId` к T-Kassa.
Это используется при рендеринге UI-компонентов, специфичных для конкретного провайдера.

### 2. Настройки Сookie

При подключении T-Kassa настройте политику cookie так, чтобы поддерживались междоменные редиректы. Это нужно для сохранения платёжной сессии при возврате пользователя в магазин.

Откройте [`src/lib/data/cookies.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/lib/data/cookies.ts#L79) и обновите конфигурацию файлов cookie следующим образом:

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

Опция `sameSite` установлена в значение `lax` вместо `strict`. Это изменение гарантирует, что cookie будет отправляться при кросс-доменных запросах во время процесса редиректа через T-Kassa, предотвращая потерю платёжной сессии.

### 3. Инициализация платёжной сессии

Чтобы перенаправить покупателя в T-Kassa, платёжная сессия должна быть корректно инициализирована с обязательными параметрами, включая return URL для обоих случаев: успешной и неуспешной оплаты.

Откройте [`src/modules/checkout/components/payment/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment/index.tsx#L90-L91) и обновите логику инициализации платежа, включив в нее данные корзины и URL возврата для T-Kassa:

![Структура проекта storefront Medusa после обновления файла для компонента оплаты](https://github.com/user-attachments/assets/5c4dfcf9-57e7-48f6-956c-0e0a91ec6c8f)

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

При инициализации платёжной сессии для T-Kassa параметры `SuccessURL` и `FailURL` определяют, куда будет перенаправлен покупатель после попытки оплаты. Оба URL динамически формируются на основе базового URL storefront, идентификатора корзины и выбранного кода страны.

Объект `cart` включается в данные инициализации для формирования чека в соответствии с Федеральным законом № 54.

### 4. Компонент кнопки оплаты

В storefront для каждого платёжного провайдера необходим отдельный компонент кнопки оплаты. Он отвечает за обработку оформления заказа после подтверждения пользователем и, используя данные платёжного сеанса, перенаправляет его на страницу оплаты T-Kassa.

Откройте [`src/modules/checkout/components/payment-button/index.tsx`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/modules/checkout/components/payment-button/index.tsx#L163-L211) и добавьте следующий код:

![Структура проекта storefront Medusa после обновления файла для компонента кнопки оплаты](https://github.com/user-attachments/assets/4b76ee52-747f-452e-9160-6365f742e33e)

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

Этот компонент находит `payment_session` для T-Kassa в текущей корзине и извлекает `PaymentURL`, предоставленный бэкендом. При нажатии кнопки *Place order* покупатель перенаправляется на этот URL для завершения транзакции на странице оплаты T-Kassa.

Если `PaymentURL` отсутствует, компонент выводит сообщение об ошибке, не позволяя продолжить. Состояние `isLoading` обеспечивает визуальную обратную связь во время подготовки перенаправления.

Компонент `PaymentButton` определяет, принадлежит ли текущая платёжная сессия к T-Kassa, с помощью вспомогательной функции `isTkassa`. Если да, он рендерит `TkassaPaymentButton` для обработки процесса оплаты.

Интеграция этого компонента гарантирует, что процесс оплаты через T-Kassa будет запускаться при оформлении заказа.

### 5. Endpoint захвата платежа

После того как покупатель завершает оплату на странице T-Kassa, он перенаправляется обратно в витрину магазина. Необходимо создать API-роут, который обработает этот callback, проверит статус платежа и завершит корзину.

Создайте файл [`src/app/api/capture-payment/[cartId]/route.ts`](https://github.com/gorgojs/medusa-plugins/blob/616703d5b2af2b3a9efc1a418632301585daac4b/examples/payment-tkassa/medusa-storefront/src/app/api/capture-payment/%5BcartId%5D/route.ts) со следующим содержимым:

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

Этот роут обрабатывает редирект от T-Kassa после попытки оплаты. Он получает актуальное состояние корзины, чтобы убедиться, что все изменения, внесённые во время оплаты, были отражены.

Если в корзине нет связанного идентификатора заказа, обработчик роута пытается оформить заказ. В случае успеха покупатель перенаправляется на страницу подтверждения заказа. Если же при обработке корзины возникла ошибка, покупатель возвращается на страницу оформления заказа с указанием ошибки и может повторить процесс оплаты заказа.

Когда оплата проходит успешно, роут повторно валидирует кэшированные данные корзины и заказа, удаляет cookie корзины и перенаправляет покупателя на страницу подтверждения заказа. Это гарантирует корректное завершение платёжного процесса и сохранение актуальных данных в storefront.

### Пример

Вы можете ознакомиться с изменениями, внесенными в стартовый шаблон [Medusa Next.js Starter Template](https://github.com/medusajs/nextjs-starter-medusa), в директории [`examples/medusa-storefront`](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa/medusa-storefront).

Полный код интеграции можно посмотреть в разделе [сomparison page](https://github.com/gorgojs/medusa-plugins/compare/%40gorgo/medusa-payment-tkassa%400.0.1...main), откройте вкладку `Files changed` и изучите различия в каталоге `examples/payment-tkassa/medusa-storefront`. Или запустите `diff` в терминале:

```bash
git clone https://github.com/gorgojs/medusa-plugins
cd medusa-plugins
git diff @gorgo/medusa-payment-tkassa@0.0.1...main -- examples/payment-tkassa/medusa-storefront
```

## Настройка вебхуков

Чтобы корректно обрабатывать платёжные уведомления от T-Kassa, настройте вебхуки в своём аккаунте T-Business следующим образом:

1. Перейдите в раздел `Интернет-эквайринг` → `Магазины` → Выберите свой магазин → `Терминалы` → Выберите `Тестовый` или `Рабочий` терминал → Нажмите `Настройки`, чтобы открыть окно настроек.

2. Установите отправку уведомлений `По протоколу HTTP`.

3. Укажите URL вида:

    ```
    https://{YOUR_MEDUSA_DOMAIN}/hooks/payment/tkassa_tkassa
    ```

    Замените `{YOUR_MEDUSA_DOMAIN}` на домен вашей витрины Medusa.

> **Внимание!** T-Kassa ожидает сообщение `OK` в ответе, чтобы подтвердить успешную обработку вебхука и избежать повторных уведомлений. В настоящее время Medusa не поддерживает кастомные ответные сообщения вебхуков «из коробки», но сами вебхуки обрабатываются корректно и без этого. Подробнее см. [связанное обсуждение](https://github.com/medusajs/medusa/discussions/12887).

## Разработка

Документацию по развертыванию окружения для разработки можно найти [здесь](https://github.com/gorgojs/medusa-plugins/tree/main/examples/payment-tkassa).

## Лицензия

Распространяется на условиях [лицензии MIT](LICENSE).
