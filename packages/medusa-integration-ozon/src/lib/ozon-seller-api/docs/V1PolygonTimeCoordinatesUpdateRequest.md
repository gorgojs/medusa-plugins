# V1PolygonTimeCoordinatesUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | **string** | Новые координаты полигона доставки в формате &#x60;[[[lat,long],[lat,long]]]&#x60;. | [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [default to undefined]
**polygon_id** | **number** | Идентификатор полигона. | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1PolygonTimeCoordinatesUpdateRequest } from './api';

const instance: V1PolygonTimeCoordinatesUpdateRequest = {
    coordinates,
    delivery_method_id,
    polygon_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
