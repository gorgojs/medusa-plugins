# InvoiceGetV2ResponseResult

Информация о счёте-фактуре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Дата загрузки счёта-фактуры. | [optional] [default to undefined]
**file_url** | **string** | Ссылка на счёт-фактуру. | [optional] [default to undefined]
**hs_codes** | [**Array&lt;V2HsCode&gt;**](V2HsCode.md) | HS-коды товаров. | [optional] [default to undefined]
**number** | **string** | Номер счёта-фактуры. | [optional] [default to undefined]
**price** | **number** | Стоимость, указанная в счёте-фактуре. Разделитель дробной части — точка, до двух знаков после точки. Пример: &#x60;199.99&#x60;.  | [optional] [default to undefined]
**price_currency** | **string** | Валюта счёта-фактуры: - &#x60;USD&#x60; — доллар,  - &#x60;EUR&#x60; — евро,  - &#x60;TRY&#x60; — турецкая лира,  - &#x60;CNY&#x60; — юань,  - &#x60;RUB&#x60; — рубль,  - &#x60;GBP&#x60; — фунт стерлингов.  Значение по умолчанию — &#x60;USD&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { InvoiceGetV2ResponseResult } from './api';

const instance: InvoiceGetV2ResponseResult = {
    date,
    file_url,
    hs_codes,
    number,
    price,
    price_currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
