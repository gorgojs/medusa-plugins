# V2WarehouseListV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Количество значений в ответе. | [default to undefined]
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Идентификаторы складов. | [optional] [default to undefined]

## Example

```typescript
import { V2WarehouseListV2Request } from './api';

const instance: V2WarehouseListV2Request = {
    limit,
    cursor,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
