# V2InvoiceCreateOrUpdateV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | **string** | Дата счёта-фактуры. | [default to undefined]
**hs_codes** | [**Array&lt;V2HsCode&gt;**](V2HsCode.md) | HS-коды товаров. | [optional] [default to undefined]
**number** | **string** | Номер счёта-фактуры. Номер может содержать буквы и цифры, максимальная длина — 50 символов. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [default to undefined]
**price** | **number** | Стоимость, указанная в счёте-фактуре. Разделитель дробной части — точка, до двух знаков после точки. | [optional] [default to undefined]
**price_currency** | **string** | Валюта счёта-фактуры: - &#x60;USD&#x60; — доллар,  - &#x60;EUR&#x60; — евро,  - &#x60;TRY&#x60; — турецкая лира,  - &#x60;CNY&#x60; — юань,  - &#x60;RUB&#x60; — рубль,  - &#x60;GBP&#x60; — фунт стерлингов.  Значение по умолчанию — &#x60;USD&#x60;.  | [optional] [default to undefined]
**url** | **string** | Ссылка на счёт-фактуру. Чтобы создать ссылку, используйте метод [v1/invoice/file/upload](#operation/invoice_upload). | [default to undefined]

## Example

```typescript
import { V2InvoiceCreateOrUpdateV2Request } from './api';

const instance: V2InvoiceCreateOrUpdateV2Request = {
    date,
    hs_codes,
    number,
    posting_number,
    price,
    price_currency,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
