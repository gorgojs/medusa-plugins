# V1GetReturnsListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**GetReturnsListRequestFilter**](GetReturnsListRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество подгружаемых возвратов. Максимальное значение — 500. | [default to undefined]
**last_id** | **number** | Идентификатор последнего подгруженного возврата. | [optional] [default to undefined]

## Example

```typescript
import { V1GetReturnsListRequest } from './api';

const instance: V1GetReturnsListRequest = {
    filter,
    limit,
    last_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
