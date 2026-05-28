# V3ChatDetailsInfo

Информация о чате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Дата создания чата. | [optional] [default to undefined]
**chat_id** | **string** | Идентификатор чата. | [optional] [default to undefined]
**chat_status** | **string** | Статус чата: - &#x60;All&#x60; — все чаты. - &#x60;Opened&#x60; — открытые чаты. - &#x60;Closed&#x60; — закрытые чаты. - &#x60;UNSPECIFIED&#x60; — не определено.  | [optional] [default to undefined]
**chat_type** | **string** | Тип чата: - &#x60;Seller_Support&#x60; — чат с поддержкой. - &#x60;Buyer_Seller&#x60; — чат с покупателем. - &#x60;UNSPECIFIED&#x60; — не определено.  | [optional] [default to undefined]

## Example

```typescript
import { V3ChatDetailsInfo } from './api';

const instance: V3ChatDetailsInfo = {
    created_at,
    chat_id,
    chat_status,
    chat_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
