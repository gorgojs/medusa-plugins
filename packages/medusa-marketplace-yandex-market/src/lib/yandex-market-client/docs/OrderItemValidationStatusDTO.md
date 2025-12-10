# OrderItemValidationStatusDTO

Идентификаторы товаров и информация по проверке их кодов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе. | [default to undefined]
**uin** | [**Array&lt;UinDTO&gt;**](UinDTO.md) | Информация по проверке :no-translate[УИНов]. | [optional] [default to undefined]
**cis** | [**Array&lt;CisDTO&gt;**](CisDTO.md) | Информация по проверке кодов маркировки в системе :no-translate[«Честный ЗНАК»]. | [optional] [default to undefined]

## Example

```typescript
import { OrderItemValidationStatusDTO } from './api';

const instance: OrderItemValidationStatusDTO = {
    id,
    uin,
    cis,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
