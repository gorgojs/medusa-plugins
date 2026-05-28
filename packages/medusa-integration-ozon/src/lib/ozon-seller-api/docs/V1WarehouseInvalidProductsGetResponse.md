# V1WarehouseInvalidProductsGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернулись не все товары.  | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице. Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;. | [optional] [default to undefined]
**validation_results** | [**Array&lt;WarehouseInvalidProductsGetResponseValidationResult&gt;**](WarehouseInvalidProductsGetResponseValidationResult.md) | Результат проверки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseInvalidProductsGetResponse } from './api';

const instance: V1WarehouseInvalidProductsGetResponse = {
    has_next,
    last_id,
    validation_results,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
