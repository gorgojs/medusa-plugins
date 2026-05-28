# CreateReturnDTO

Информация о возврате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalReturnId** | **string** | Внешний идентификатор возврата в системе магазина. | [default to undefined]
**orderId** | **number** | Идентификатор заказа, по которому нужно сделать возврат. | [default to undefined]
**items** | [**Array&lt;CreateReturnItemDTO&gt;**](CreateReturnItemDTO.md) | Список товаров в возврате. | [default to undefined]
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | [default to undefined]
**returnOption** | [**CreateReturnOptionDTO**](CreateReturnOptionDTO.md) |  | [default to undefined]

## Example

```typescript
import { CreateReturnDTO } from './api';

const instance: CreateReturnDTO = {
    externalReturnId,
    orderId,
    items,
    customer,
    returnOption,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
