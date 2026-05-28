# V2User

Информация об участнике чата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор участника чата. | [optional] [default to undefined]
**type** | **string** | Тип участника чата: - &#x60;customer&#x60; — покупатель, - &#x60;seller&#x60; — продавец, - &#x60;crm&#x60; — системные сообщения, - &#x60;courier&#x60; — курьер, - &#x60;support&#x60; — поддержка.  | [optional] [default to undefined]

## Example

```typescript
import { V2User } from './api';

const instance: V2User = {
    id,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
