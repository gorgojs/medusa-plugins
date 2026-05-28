# V2WarehouseListV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**warehouses** | [**Array&lt;WarehouseListV2ResponseWarehouse&gt;**](WarehouseListV2ResponseWarehouse.md) | Список складов. | [optional] [default to undefined]
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернулись не все значения.  | [optional] [default to undefined]

## Example

```typescript
import { V2WarehouseListV2Response } from './api';

const instance: V2WarehouseListV2Response = {
    cursor,
    warehouses,
    has_next,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
