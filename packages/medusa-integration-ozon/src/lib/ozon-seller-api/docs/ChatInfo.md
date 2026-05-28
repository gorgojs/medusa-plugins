# ChatInfo

Данные чата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_id** | **string** | Идентификатор чата. | [optional] [default to undefined]
**chat_status** | **string** | Статус чата: - &#x60;All&#x60; — все чаты. - &#x60;Opened&#x60; — открытые чаты. - &#x60;Closed&#x60; — закрытые чаты.  | [optional] [default to undefined]
**chat_type** | **string** | Тип чата: - &#x60;Seller_Support&#x60; — чат с поддержкой. - &#x60;Buyer_Seller&#x60; — чат с покупателем.  | [optional] [default to undefined]
**created_at** | **string** | Дата создания чата. | [optional] [default to undefined]
**first_unread_message_id** | **number** | Идентификатор первого непрочитанного сообщения в чате. | [optional] [default to undefined]
**last_message_id** | **number** | Идентификатор последнего сообщения в чате. | [optional] [default to undefined]
**unread_count** | **number** | Количество непрочитанных сообщений в чате. | [optional] [default to undefined]

## Example

```typescript
import { ChatInfo } from './api';

const instance: ChatInfo = {
    chat_id,
    chat_status,
    chat_type,
    created_at,
    first_unread_message_id,
    last_message_id,
    unread_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
