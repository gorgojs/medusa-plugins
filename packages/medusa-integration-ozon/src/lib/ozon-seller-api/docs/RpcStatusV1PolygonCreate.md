# RpcStatusV1PolygonCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** | Код ошибки. | [optional] [default to undefined]
**details** | [**Array&lt;ProtobufAny&gt;**](ProtobufAny.md) | Информация об ошибке. | [optional] [default to undefined]
**message** | **string** | Сообщение об ошибке:    - &#x60;coordinates not provided&#x60; — координаты не переданы;   - &#x60;invalid coordinates, must have two points in coordinate&#x60; — в какой-то точке передана только широта или долгота, нужно передать две точки;   - &#x60;the first and last points in loop must be same&#x60; — первая и последняя точка не совпадают (по стандартным правилам geojson точки должны совпадать);   - &#x60;non-full loops must have at least 4 unique vertices for polygons&#x60; — для полигона передано менее четырех точек.  | [optional] [default to undefined]

## Example

```typescript
import { RpcStatusV1PolygonCreate } from './api';

const instance: RpcStatusV1PolygonCreate = {
    code,
    details,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
