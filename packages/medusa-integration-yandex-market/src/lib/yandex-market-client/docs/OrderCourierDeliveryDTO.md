# OrderCourierDeliveryDTO

Информация о курьерской доставке.  Не передавайте вместе с `pickupDelivery`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**CourierDeliveryAddressDTO**](CourierDeliveryAddressDTO.md) |  | [default to undefined]
**notes** | **string** | Комментарий к заказу. | [optional] [default to undefined]

## Example

```typescript
import { OrderCourierDeliveryDTO } from './api';

const instance: OrderCourierDeliveryDTO = {
    address,
    notes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
