# V3ChatInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat** | [**V3ChatDetailsInfo**](V3ChatDetailsInfo.md) |  | [optional] [default to undefined]
**first_unread_message_id** | **number** | Идентификатор первого непрочитанного сообщения в чате. | [optional] [default to undefined]
**last_message_id** | **number** | Идентификатор последнего сообщения в чате. | [optional] [default to undefined]
**unread_count** | **number** | Количество непрочитанных сообщений в чате. | [optional] [default to undefined]

## Example

```typescript
import { V3ChatInfo } from './api';

const instance: V3ChatInfo = {
    chat,
    first_unread_message_id,
    last_message_id,
    unread_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
