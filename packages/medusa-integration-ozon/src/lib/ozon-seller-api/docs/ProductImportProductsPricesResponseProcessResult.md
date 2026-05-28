# ProductImportProductsPricesResponseProcessResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;ProductImportProductsPricesResponseError&gt;**](ProductImportProductsPricesResponseError.md) | Массив ошибок, которые возникли при обработке запроса. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**updated** | **boolean** | Если информации о товаре успешно обновлена — &#x60;true&#x60;. | [optional] [default to undefined]

## Example

```typescript
import { ProductImportProductsPricesResponseProcessResult } from './api';

const instance: ProductImportProductsPricesResponseProcessResult = {
    errors,
    offer_id,
    product_id,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
