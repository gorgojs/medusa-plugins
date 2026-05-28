# PostingFinancialDataProductV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **Array&lt;string&gt;** | Список акций. | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**commission_amount** | **number** | Размер комиссии за товар. | [optional] [default to undefined]
**commission_percent** | **number** | Процент комиссии. | [optional] [default to undefined]
**commissions_currency_code** | **string** | Код валюты, в которой рассчитывались комиссии. | [optional] [default to undefined]
**old_price** | **number** | Цена до учёта скидок. На карточке товара отображается зачёркнутой. | [optional] [default to undefined]
**payout** | **number** | Выплата продавцу. | [optional] [default to undefined]
**price** | **number** | Цена товара с учётом акций, кроме акций за счёт Ozon. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**quantity** | **number** | Количество товара в отправлении. | [optional] [default to undefined]
**total_discount_percent** | **number** | Процент скидки. | [optional] [default to undefined]
**total_discount_value** | **number** | Сумма скидки. | [optional] [default to undefined]

## Example

```typescript
import { PostingFinancialDataProductV2 } from './api';

const instance: PostingFinancialDataProductV2 = {
    actions,
    currency_code,
    commission_amount,
    commission_percent,
    commissions_currency_code,
    old_price,
    payout,
    price,
    product_id,
    quantity,
    total_discount_percent,
    total_discount_value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
