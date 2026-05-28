# V1PolygonTimeSetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_time** | **number** | Текущее время доставки в минутах. | [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. | [default to undefined]
**new_time** | **number** | Новое время доставки в минутах. | [default to undefined]
**polygon_id** | **number** | Идентификатор полигона. | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1PolygonTimeSetRequest } from './api';

const instance: V1PolygonTimeSetRequest = {
    current_time,
    delivery_method_id,
    new_time,
    polygon_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
