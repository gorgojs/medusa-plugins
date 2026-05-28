# ItemPricev5

Цена товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_action_enabled** | **boolean** | &#x60;true&#x60;, если автоприменение акций у товара включено.  | [optional] [default to undefined]
**auto_add_to_ozon_actions_list_enabled** | **boolean** | &#x60;true&#x60;, если автодобавление товара в акции включено.  | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Совпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**marketing_seller_price** | **number** | Цена на товар с учётом акций продавца. | [optional] [default to undefined]
**min_price** | **number** | Минимальная цена товара после применения всех скидок. | [optional] [default to undefined]
**net_price** | **number** | Себестоимость товара. | [optional] [default to undefined]
**old_price** | **number** | Цена до учёта скидок. На карточке товара отображается зачёркнутой. | [optional] [default to undefined]
**price** | **number** | Цена товара с учётом скидок — это значение показывается на карточке товара. | [optional] [default to undefined]
**retail_price** | **number** | Цена поставщика по договору. Поле вернётся пустым, если нет договора на поставку. | [optional] [default to undefined]
**vat** | **number** | Ставка НДС для товара. | [optional] [default to undefined]

## Example

```typescript
import { ItemPricev5 } from './api';

const instance: ItemPricev5 = {
    auto_action_enabled,
    auto_add_to_ozon_actions_list_enabled,
    currency_code,
    marketing_seller_price,
    min_price,
    net_price,
    old_price,
    price,
    retail_price,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
