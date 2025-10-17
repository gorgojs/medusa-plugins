# ChatFullContextDTO

Информация о заказе или возврате, по которому начат чат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ChatContextType**](ChatContextType.md) |  | [default to undefined]
**customer** | [**ChatCustomerDTO**](ChatCustomerDTO.md) |  | [optional] [default to undefined]
**campaignId** | **number** | Идентификатор кампании.  Возвращается для заказов и возвратов.  | [optional] [default to undefined]
**orderId** | **number** | Идентификатор заказа.  Возвращается для заказов и возвратов.  | [optional] [default to undefined]
**returnId** | **number** | Идентификатор возврата.  Возвращается только для возвратов.  | [optional] [default to undefined]

## Example

```typescript
import { ChatFullContextDTO } from './api';

const instance: ChatFullContextDTO = {
    type,
    customer,
    campaignId,
    orderId,
    returnId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
