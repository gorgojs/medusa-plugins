# GetChatInfoDTO

Информация о чате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chatId** | **number** | Идентификатор чата. | [default to undefined]
**orderId** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**context** | [**ChatFullContextDTO**](ChatFullContextDTO.md) |  | [default to undefined]
**type** | [**ChatType**](ChatType.md) |  | [default to undefined]
**status** | [**ChatStatusType**](ChatStatusType.md) |  | [default to undefined]
**createdAt** | **string** | Дата и время создания чата.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]
**updatedAt** | **string** | Дата и время последнего сообщения в чате.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]

## Example

```typescript
import { GetChatInfoDTO } from './api';

const instance: GetChatInfoDTO = {
    chatId,
    orderId,
    context,
    type,
    status,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
