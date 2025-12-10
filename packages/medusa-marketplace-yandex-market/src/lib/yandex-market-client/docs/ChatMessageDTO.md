# ChatMessageDTO

Информация о сообщении.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageId** | **number** | Идентификатор сообщения. | [default to undefined]
**createdAt** | **string** | Дата и время создания сообщения.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]
**sender** | [**ChatMessageSenderType**](ChatMessageSenderType.md) |  | [default to undefined]
**message** | **string** | Текст сообщения.  Необязательный параметр, если возвращается параметр &#x60;payload&#x60;.  | [optional] [default to undefined]
**payload** | [**Array&lt;ChatMessagePayloadDTO&gt;**](ChatMessagePayloadDTO.md) | Информация о приложенных к сообщению файлах.  Необязательный параметр, если возвращается параметр &#x60;message&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { ChatMessageDTO } from './api';

const instance: ChatMessageDTO = {
    messageId,
    createdAt,
    sender,
    message,
    payload,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
