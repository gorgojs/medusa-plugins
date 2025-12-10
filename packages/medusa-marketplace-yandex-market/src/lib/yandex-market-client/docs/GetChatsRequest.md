# GetChatsRequest

Фильтры по чатам, которые нужно вернуть. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderIds** | **Set&lt;number&gt;** | Фильтр по идентификаторам заказов на Маркете. | [optional] [default to undefined]
**contexts** | [**Set&lt;ChatContextDTO&gt;**](ChatContextDTO.md) | Фильтр по контексту чата. | [optional] [default to undefined]
**contextTypes** | [**Set&lt;ChatContextType&gt;**](ChatContextType.md) | Фильтр по типу контекста чата. | [optional] [default to undefined]
**types** | [**Set&lt;ChatType&gt;**](ChatType.md) | Фильтр по типам чатов. | [optional] [default to undefined]
**statuses** | [**Set&lt;ChatStatusType&gt;**](ChatStatusType.md) | Фильтр по статусам чатов. | [optional] [default to undefined]

## Example

```typescript
import { GetChatsRequest } from './api';

const instance: GetChatsRequest = {
    orderIds,
    contexts,
    contextTypes,
    types,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
