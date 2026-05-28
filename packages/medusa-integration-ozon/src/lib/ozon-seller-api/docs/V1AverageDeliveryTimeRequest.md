# V1AverageDeliveryTimeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_schema** | [**V1AverageDeliveryTimeRequestDeliverySchema**](V1AverageDeliveryTimeRequestDeliverySchema.md) |  | [default to undefined]
**sku** | **Array&lt;string&gt;** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**supply_period** | [**V1AverageDeliveryTimeRequestSupplyPeriod**](V1AverageDeliveryTimeRequestSupplyPeriod.md) |  | [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeRequest } from './api';

const instance: V1AverageDeliveryTimeRequest = {
    delivery_schema,
    sku,
    supply_period,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
