# V3ChatList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**V3ChatListRequestFilter**](V3ChatListRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. Значение по умолчанию — 30. Максимальное значение — 100. | [default to undefined]
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]

## Example

```typescript
import { V3ChatList } from './api';

const instance: V3ChatList = {
    filter,
    limit,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
