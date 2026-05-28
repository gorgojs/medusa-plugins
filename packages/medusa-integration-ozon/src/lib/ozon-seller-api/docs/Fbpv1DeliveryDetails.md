# Fbpv1DeliveryDetails

Детали доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direct_details** | [**V1DeliveryDetailsDirectDetails**](V1DeliveryDetailsDirectDetails.md) |  | [optional] [default to undefined]
**drop_off_point** | [**DeliveryDetailsDropOffPointDetails**](DeliveryDetailsDropOffPointDetails.md) |  | [optional] [default to undefined]
**pickup_details** | [**V1DeliveryDetailsPickUpDetails**](V1DeliveryDetailsPickUpDetails.md) |  | [optional] [default to undefined]
**supply_type** | [**DeliveryDetailsSupplyType**](DeliveryDetailsSupplyType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Fbpv1DeliveryDetails } from './api';

const instance: Fbpv1DeliveryDetails = {
    direct_details,
    drop_off_point,
    pickup_details,
    supply_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
