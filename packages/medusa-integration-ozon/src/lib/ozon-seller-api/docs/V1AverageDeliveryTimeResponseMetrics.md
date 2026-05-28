# V1AverageDeliveryTimeResponseMetrics

Метрики доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attention_level** | [**AttentionLevelEnum**](AttentionLevelEnum.md) |  | [optional] [default to undefined]
**average_delivery_time** | **number** | Среднее время доставки до покупателя. | [optional] [default to undefined]
**average_delivery_time_status** | [**V1AverageDeliveryTimeResponseDeliveryTimeStatus**](V1AverageDeliveryTimeResponseDeliveryTimeStatus.md) |  | [optional] [default to undefined]
**impact_share** | **number** | Доля влияния кластера на общий показатель в процентах. | [optional] [default to undefined]
**exact_impact_share** | **string** | Доля влияния кластера на общий показатель c точностью до 4 знаков после запятой. | [optional] [default to undefined]
**lost_profit** | **number** | Переплата за логистику. | [optional] [default to undefined]
**orders_count** | [**V1AverageDeliveryTimeResponseMetricsOrdersCount**](V1AverageDeliveryTimeResponseMetricsOrdersCount.md) |  | [optional] [default to undefined]
**recommended_supply** | **number** | Рекомендуемая поставка в штуках. | [optional] [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeResponseMetrics } from './api';

const instance: V1AverageDeliveryTimeResponseMetrics = {
    attention_level,
    average_delivery_time,
    average_delivery_time_status,
    impact_share,
    exact_impact_share,
    lost_profit,
    orders_count,
    recommended_supply,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
