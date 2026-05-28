# V1WarehouseInvalidProductsGetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_id** | **number** | Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.   Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. Получите значение параметра методом [/v1/warehouse/warehouses-with-invalid-products](#operation/WarehouseWithInvalidProducts). | [default to undefined]

## Example

```typescript
import { V1WarehouseInvalidProductsGetRequest } from './api';

const instance: V1WarehouseInvalidProductsGetRequest = {
    last_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
