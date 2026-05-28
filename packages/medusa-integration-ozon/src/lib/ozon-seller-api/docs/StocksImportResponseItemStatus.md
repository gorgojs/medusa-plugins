# StocksImportResponseItemStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;ItemStatusError&gt;**](ItemStatusError.md) | Ошибки, которые возникли при обработке запроса. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**updated** | **boolean** | &#x60;true&#x60;, если запрос выполнен успешно и остатки обновлены.  | [optional] [default to undefined]

## Example

```typescript
import { StocksImportResponseItemStatus } from './api';

const instance: StocksImportResponseItemStatus = {
    errors,
    offer_id,
    product_id,
    sku,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
