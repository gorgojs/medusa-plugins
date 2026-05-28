# ProductImportProductsBySKURequestItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название товара. До 500 символов. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул.  Максимальная длина строки — 50 символов.  | [optional] [default to undefined]
**old_price** | **string** | Цена до скидок (будет зачеркнута на карточке товара). Указывается в рублях. Разделитель дробной части — точка, до двух знаков после точки. | [optional] [default to undefined]
**price** | **string** | Цена товара с учётом скидок, отображается на карточке товара. Если на товар нет скидок, укажите значение &#x60;old_price&#x60; в этом параметре. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [default to undefined]
**vat** | **string** | Ставка НДС для товара:   - &#x60;0&#x60; — не облагается НДС,   - &#x60;0.05&#x60; — 5%,   - &#x60;0.07&#x60; — 7%,   - &#x60;0.1&#x60; — 10%,   - &#x60;0.2&#x60; — 20%,   - &#x60;0.22&#x60; — 22%.  Передавайте значение ставки, актуальное на данный момент.  | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Переданное значение должно совпадать с валютой, которая установлена в настройках личного кабинета. По умолчанию передаётся &#x60;RUB&#x60; — российский рубль.  Например, если у вас установлена валюта взаиморасчётов юань, передавайте значение &#x60;CNY&#x60;, иначе вернётся ошибка.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]

## Example

```typescript
import { ProductImportProductsBySKURequestItem } from './api';

const instance: ProductImportProductsBySKURequestItem = {
    name,
    offer_id,
    old_price,
    price,
    sku,
    vat,
    currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
