# DeliveryMapResponseCluster


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinate** | [**DeliveryMapResponseClusterCoordinates**](DeliveryMapResponseClusterCoordinates.md) |  | [optional] [default to undefined]
**is_same_building** | **boolean** | &#x60;true&#x60;, если все точки находятся в одном здании.  | [optional] [default to undefined]
**map_point_ids** | **Array&lt;string&gt;** | Идентификаторы точек на карте. | [optional] [default to undefined]
**points_count** | **number** | Количество точек в кластере. | [optional] [default to undefined]
**viewport** | [**DeliveryMapResponseClusterViewport**](DeliveryMapResponseClusterViewport.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeliveryMapResponseCluster } from './api';

const instance: DeliveryMapResponseCluster = {
    coordinate,
    is_same_building,
    map_point_ids,
    points_count,
    viewport,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
