# V1AverageDeliveryTimeDetailsResponseClustersData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**another_delivery_time** | [**Array&lt;V1AverageDeliveryTimeDetailsResponseClustersDataAmnesty&gt;**](V1AverageDeliveryTimeDetailsResponseClustersDataAmnesty.md) | Зачли доставку с другим временем.  | [optional] [default to undefined]
**cluster_id** | **number** | Идентификатор кластера. | [optional] [default to undefined]
**delivery_time_FBO** | **number** | Нормативное время доставки по FBO в часах. | [optional] [default to undefined]
**delivery_time_FBS** | **number** | Нормативное время доставки по FBS в часах. | [optional] [default to undefined]
**delivery_time_status** | [**V1AverageDeliveryTimeDetailsResponseDeliveryTimeStatus**](V1AverageDeliveryTimeDetailsResponseDeliveryTimeStatus.md) |  | [optional] [default to undefined]
**orders_count** | **number** | Количество заказанных товаров из кластера отгрузки. | [optional] [default to undefined]
**orders_percent** | **number** | Процент заказов из указанного кластера от общего количества заказов по всем кластерам отгрузки. | [optional] [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeDetailsResponseClustersData } from './api';

const instance: V1AverageDeliveryTimeDetailsResponseClustersData = {
    another_delivery_time,
    cluster_id,
    delivery_time_FBO,
    delivery_time_FBS,
    delivery_time_status,
    orders_count,
    orders_percent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
