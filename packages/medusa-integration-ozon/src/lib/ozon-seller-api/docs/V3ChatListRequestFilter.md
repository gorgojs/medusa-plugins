# V3ChatListRequestFilter

Фильтр по чатам.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_status** | **string** | Фильтр по статусу чата: - &#x60;All&#x60; — все чаты. - &#x60;Opened&#x60; — открытые чаты. - &#x60;Closed&#x60; — закрытые чаты.  Значение по умолчанию: &#x60;All&#x60;.  | [optional] [default to undefined]
**unread_only** | **boolean** | Фильтр по чатам с непрочитанными сообщениями. | [optional] [default to undefined]

## Example

```typescript
import { V3ChatListRequestFilter } from './api';

const instance: V3ChatListRequestFilter = {
    chat_status,
    unread_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
