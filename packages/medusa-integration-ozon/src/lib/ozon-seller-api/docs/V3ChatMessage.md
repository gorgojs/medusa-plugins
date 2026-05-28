# V3ChatMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ChatMessageContext**](ChatMessageContext.md) |  | [optional] [default to undefined]
**created_at** | **string** | Дата создания сообщения. | [optional] [default to undefined]
**data** | **Array&lt;string&gt;** | Массив с содержимым сообщения в формате Markdown. | [optional] [default to undefined]
**is_image** | **boolean** | Признак, что сообщение содержит изображение. | [optional] [default to undefined]
**is_read** | **boolean** | Признак, что сообщение прочитано. | [optional] [default to undefined]
**message_id** | **number** | Идентификатор сообщения. | [optional] [default to undefined]
**moderate_image_status** | [**ChatMessageModerateImageStatus**](ChatMessageModerateImageStatus.md) |  | [optional] [default to undefined]
**user** | [**V3User**](V3User.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V3ChatMessage } from './api';

const instance: V3ChatMessage = {
    context,
    created_at,
    data,
    is_image,
    is_read,
    message_id,
    moderate_image_status,
    user,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
