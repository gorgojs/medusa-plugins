# CourierDeliveryOptionDTO

Временные интервалы и способ оплаты.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deliveryDateInterval** | [**DeliveryDateIntervalDTO**](DeliveryDateIntervalDTO.md) |  | [default to undefined]
**deliveryTimeInterval** | [**TimeIntervalDTO**](TimeIntervalDTO.md) |  | [default to undefined]
**price** | [**DeliveryOptionPriceDTO**](DeliveryOptionPriceDTO.md) |  | [default to undefined]

## Example

```typescript
import { CourierDeliveryOptionDTO } from './api';

const instance: CourierDeliveryOptionDTO = {
    deliveryDateInterval,
    deliveryTimeInterval,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
