# UpdateOrderDTO

Информация, которую нужно изменить.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заказа, в котором нужны изменения. | [default to undefined]
**deliveryInterval** | [**DeliveryIntervalsUpdateOptionDTO**](DeliveryIntervalsUpdateOptionDTO.md) |  | [optional] [default to undefined]
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderDTO } from './api';

const instance: UpdateOrderDTO = {
    id,
    deliveryInterval,
    customer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
