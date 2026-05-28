# CreateOrderDeliveryOptionDTO

Информация о доставке.  Не передавайте одновременно `courierDelivery` и `pickupDelivery`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickupDelivery** | [**OrderPickupDeliveryDTO**](OrderPickupDeliveryDTO.md) |  | [optional] [default to undefined]
**courierDelivery** | [**OrderCourierDeliveryDTO**](OrderCourierDeliveryDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOrderDeliveryOptionDTO } from './api';

const instance: CreateOrderDeliveryOptionDTO = {
    pickupDelivery,
    courierDelivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
