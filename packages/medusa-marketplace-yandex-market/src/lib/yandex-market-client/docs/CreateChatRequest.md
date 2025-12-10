# CreateChatRequest

Заказ, для которого нужно создать чат. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа на Маркете. | [optional] [default to undefined]
**context** | [**ChatContextDTO**](ChatContextDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateChatRequest } from './api';

const instance: CreateChatRequest = {
    orderId,
    context,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
