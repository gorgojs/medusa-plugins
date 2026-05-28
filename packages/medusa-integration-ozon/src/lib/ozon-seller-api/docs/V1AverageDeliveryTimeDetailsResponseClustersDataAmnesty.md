# V1AverageDeliveryTimeDetailsResponseClustersDataAmnesty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_time** | **number** | Нормативное время доставки в часах. | [optional] [default to undefined]
**delivery_time_status** | [**V1AverageDeliveryTimeDetailsResponseDeliveryTimeStatus**](V1AverageDeliveryTimeDetailsResponseDeliveryTimeStatus.md) |  | [optional] [default to undefined]
**orders_count** | **number** | Количество заказанных товаров из кластера. | [optional] [default to undefined]
**orders_percent** | **number** | Процент заказов из указанного кластера от общего количества заказов по всем кластерам отгрузки. | [optional] [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeDetailsResponseClustersDataAmnesty } from './api';

const instance: V1AverageDeliveryTimeDetailsResponseClustersDataAmnesty = {
    delivery_time,
    delivery_time_status,
    orders_count,
    orders_percent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
