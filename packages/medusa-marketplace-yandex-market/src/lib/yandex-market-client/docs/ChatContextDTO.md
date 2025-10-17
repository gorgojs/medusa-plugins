# ChatContextDTO

Информация о заказе или возврате, по которому начат чат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ChatContextIdentifiableType**](ChatContextIdentifiableType.md) |  | [default to undefined]
**id** | **number** | Идентификатор заказа или возврата. | [default to undefined]

## Example

```typescript
import { ChatContextDTO } from './api';

const instance: ChatContextDTO = {
    type,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
