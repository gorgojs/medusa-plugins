# RpcStatusV1PolygonBind


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **number** |  | [optional] [default to undefined]
**details** | [**Array&lt;ProtobufAny&gt;**](ProtobufAny.md) |  | [optional] [default to undefined]
**message** | **string** | Сообщение об ошибке:    - **delivery target polygons not provided** — полигоны не переданы;   - **no delivery method id provided** — delivery_method_id не передан;   - **no warehouse points provided** — не передана координата склада;   - **polygon id .... not found** — переданы ID полигонов, которые не найдены в базе данных;   - **not found polygon for warehouse point** — точка склада не принадлежит ни одному переданному полигону.  | [optional] [default to undefined]

## Example

```typescript
import { RpcStatusV1PolygonBind } from './api';

const instance: RpcStatusV1PolygonBind = {
    code,
    details,
    message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
