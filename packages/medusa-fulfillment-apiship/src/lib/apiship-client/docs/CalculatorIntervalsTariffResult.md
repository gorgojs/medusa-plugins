# CalculatorIntervalsTariffResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tariffProviderId** | **string** | ID тарифа в службе доставки | [optional] [default to undefined]
**tariffId** | **number** | ID тарифа в ApiShip | [optional] [default to undefined]
**tariffName** | **string** | Название тарифа | [optional] [default to undefined]
**pickupTypes** | **Array&lt;number&gt;** | Типы забора (см. /lists/pickupTypes), если не переданы берутся оба типа | [optional] [default to undefined]
**deliveryTypes** | **Array&lt;number&gt;** | Типы доставки (см. /lists/deliveryTypes), если не переданы берутся оба типа | [optional] [default to undefined]
**toIntervals** | [**Array&lt;DeliveryInterval&gt;**](DeliveryInterval.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CalculatorIntervalsTariffResult } from './api';

const instance: CalculatorIntervalsTariffResult = {
    tariffProviderId,
    tariffId,
    tariffName,
    pickupTypes,
    deliveryTypes,
    toIntervals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
