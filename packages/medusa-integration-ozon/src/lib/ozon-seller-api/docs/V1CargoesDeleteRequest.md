# V1CargoesDeleteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_ids** | **Array&lt;string&gt;** | Список идентификаторов грузомест, которые нужно удалить.  Максимум 70 значений.  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]

## Example

```typescript
import { V1CargoesDeleteRequest } from './api';

const instance: V1CargoesDeleteRequest = {
    cargo_ids,
    supply_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
