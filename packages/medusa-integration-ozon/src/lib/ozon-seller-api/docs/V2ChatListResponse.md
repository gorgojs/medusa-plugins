# V2ChatListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chats** | [**Array&lt;ChatInfo&gt;**](ChatInfo.md) | Данные чатов. | [optional] [default to undefined]
**total_chats_count** | **number** | Общее количество чатов. | [optional] [default to undefined]
**total_unread_count** | **number** | Общее количество непрочитанных сообщений. | [optional] [default to undefined]

## Example

```typescript
import { V2ChatListResponse } from './api';

const instance: V2ChatListResponse = {
    chats,
    total_chats_count,
    total_unread_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
