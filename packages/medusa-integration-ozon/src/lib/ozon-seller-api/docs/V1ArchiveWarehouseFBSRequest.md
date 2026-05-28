# V1ArchiveWarehouseFBSRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **string** | Причина переноса склада в архив. | [default to undefined]
**return_point_id** | **number** | Идентификатор пункта возврата. Получите значение параметра методом [/v1/warehouse/fbs/update/return-point/list](#operation/WarehouseFBSUpdateReturnPointList). | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1ArchiveWarehouseFBSRequest } from './api';

const instance: V1ArchiveWarehouseFBSRequest = {
    reason,
    return_point_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
