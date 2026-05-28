# V1WarehouseWithInvalidProductsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouse_ids** | **Array&lt;string&gt;** | Список идентификаторов складов, у которых есть хотя бы 1 товар, который недоступен для доставки со склада. Чтобы получить список товаров с ограничениями, используйте метод [/v1/warehouse/invalid-products/get](#operation/WarehouseInvalidProductsGet). | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseWithInvalidProductsResponse } from './api';

const instance: V1WarehouseWithInvalidProductsResponse = {
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
