# GetReturnDeliveryOptionsRequest

Запрос для получения вариантов доставки возвратов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;BasicOrderItemDTO&gt;**](BasicOrderItemDTO.md) | Товары в возврате. | [default to undefined]
**pickupDelivery** | [**PickupDeliveryParametersDTO**](PickupDeliveryParametersDTO.md) |  | [default to undefined]

## Example

```typescript
import { GetReturnDeliveryOptionsRequest } from './api';

const instance: GetReturnDeliveryOptionsRequest = {
    items,
    pickupDelivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
