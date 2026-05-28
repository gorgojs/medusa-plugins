# V2FbsPostingProductCountrySetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [default to undefined]
**country_iso_code** | **string** | Двухбуквенный код добавляемой страны по стандарту ISO_3166-1.  Список доступных стран-изготовителей и их ISO коды можно получить с помощью метода [/v2/posting/fbs/product/country/list](#operation/PostingAPI_ListCountryProductFbsPostingV2).  | [default to undefined]

## Example

```typescript
import { V2FbsPostingProductCountrySetRequest } from './api';

const instance: V2FbsPostingProductCountrySetRequest = {
    posting_number,
    product_id,
    country_iso_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
