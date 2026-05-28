# ChatList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**ChatListRequestFilter**](ChatListRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. Значение по умолчанию — 30. Максимальное значение — 1000. | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset&#x3D;10&#x60;, ответ начнётся с 11-го найденного элемента. | [optional] [default to undefined]

## Example

```typescript
import { ChatList } from './api';

const instance: ChatList = {
    filter,
    limit,
    offset,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
