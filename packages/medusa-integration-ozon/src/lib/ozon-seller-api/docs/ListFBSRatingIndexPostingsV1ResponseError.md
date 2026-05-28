# ListFBSRatingIndexPostingsV1ResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_percent** | **number** | Процент стоимости обработки от стоимости отправления. | [optional] [default to undefined]
**charge_price** | **number** | Стоимость обработки ошибок. | [optional] [default to undefined]
**charge_price_currency_code** | **string** | Код валюты стоимости обработки ошибок: - &#x60;RUB&#x60; — российский рубль, - &#x60;BYN&#x60; — белорусский рубль,  - &#x60;KZT&#x60; — тенге, - &#x60;EUR&#x60; — евро, - &#x60;USD&#x60; — доллар США, - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]
**delivery_schema** | **string** | Схема доставки: - &#x60;FBS&#x60;,  - &#x60;rFBS&#x60;,  - &#x60;erFBS&#x60;.  | [optional] [default to undefined]
**error_at** | **string** | Дата, когда возникла ошибка. | [optional] [default to undefined]
**has_grace_status** | **boolean** | &#x60;true&#x60;, если у отправления льготный статус.  | [optional] [default to undefined]
**index** | **number** | Значение индекса ошибок. | [optional] [default to undefined]
**posting_error_type** | [**PostingErrorTypeEnum**](PostingErrorTypeEnum.md) |  | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**product_price** | **number** | Стоимость товара в отправлении. | [optional] [default to undefined]
**product_price_currency_code** | **string** | Код валюты стоимости товара: - &#x60;RUB&#x60; — российский рубль, - &#x60;BYN&#x60; — белорусский рубль,  - &#x60;KZT&#x60; — тенге, - &#x60;EUR&#x60; — евро, - &#x60;USD&#x60; — доллар США, - &#x60;CNY&#x60; — юань.  | [optional] [default to undefined]

## Example

```typescript
import { ListFBSRatingIndexPostingsV1ResponseError } from './api';

const instance: ListFBSRatingIndexPostingsV1ResponseError = {
    charge_percent,
    charge_price,
    charge_price_currency_code,
    delivery_schema,
    error_at,
    has_grace_status,
    index,
    posting_error_type,
    posting_number,
    product_price,
    product_price_currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
