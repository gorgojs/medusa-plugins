# V3ChatListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chats** | [**Array&lt;V3ChatInfo&gt;**](V3ChatInfo.md) | Данные чатов. | [optional] [default to undefined]
**total_unread_count** | **number** | Общее количество непрочитанных сообщений. | [optional] [default to undefined]
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**has_next** | **boolean** | Признак, что в ответе вернулись не все чаты: - &#x60;true&#x60; — сделайте повторный запрос с новым параметром &#x60;cursor&#x60; для получения остальных чатов; - &#x60;false&#x60; — ответ содержит все чаты для фильтра, который был задан в запросе.  | [optional] [default to undefined]

## Example

```typescript
import { V3ChatListResponse } from './api';

const instance: V3ChatListResponse = {
    chats,
    total_unread_count,
    cursor,
    has_next,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
