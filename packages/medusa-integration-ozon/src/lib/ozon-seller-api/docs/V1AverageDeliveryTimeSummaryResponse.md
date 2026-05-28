# V1AverageDeliveryTimeSummaryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_delivery_time** | **number** | Среднее время доставки до покупателя. | [optional] [default to undefined]
**current_tariff** | [**AverageDeliveryTimeSummaryResponseTariff**](AverageDeliveryTimeSummaryResponseTariff.md) |  | [optional] [default to undefined]
**lost_profit** | **number** | Переплата за логистику FBO. | [optional] [default to undefined]
**perfect_delivery_time** | **number** | Рекомендуемое среднее время доставки до покупателя. | [optional] [default to undefined]
**updated_at** | **string** | Дата и время последнего обновления данных. | [optional] [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeSummaryResponse } from './api';

const instance: V1AverageDeliveryTimeSummaryResponse = {
    average_delivery_time,
    current_tariff,
    lost_profit,
    perfect_delivery_time,
    updated_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
