# V1AverageDeliveryTimeResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clusters_data** | [**Array&lt;V1AverageDeliveryTimeResponseClustersData&gt;**](V1AverageDeliveryTimeResponseClustersData.md) | Данные по кластерам отгрузки. | [optional] [default to undefined]
**delivery_cluster_id** | **number** | Идентификатор кластера доставки. | [optional] [default to undefined]
**metrics** | [**V1AverageDeliveryTimeResponseMetrics**](V1AverageDeliveryTimeResponseMetrics.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1AverageDeliveryTimeResponseData } from './api';

const instance: V1AverageDeliveryTimeResponseData = {
    clusters_data,
    delivery_cluster_id,
    metrics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
