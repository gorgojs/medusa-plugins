# Fbsv4PostingProductDetailWithoutDimensions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mandatory_mark** | **Array&lt;string&gt;** | Обязательная маркировка «Честный ЗНАК». | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**price** | **string** | Цена. | [optional] [default to undefined]
**quantity** | **number** | Количество товара в отправлении. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**currency_code** | **string** | Валюта ваших цен. Cовпадает с валютой, которая установлена в настройках личного кабинета.  Возможные значения:    - &#x60;RUB&#x60; — российский рубль,   - &#x60;BYN&#x60; — белорусский рубль,   - &#x60;KZT&#x60; — тенге,   - &#x60;EUR&#x60; — евро,   - &#x60;USD&#x60; — доллар США,   - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]

## Example

```typescript
import { Fbsv4PostingProductDetailWithoutDimensions } from './api';

const instance: Fbsv4PostingProductDetailWithoutDimensions = {
    mandatory_mark,
    name,
    offer_id,
    price,
    quantity,
    sku,
    currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
