# V1UpdateWarehouseFBSFirstMileRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cut_in_time** | **number** | Время на приём заказов в минутах. Например, если вы передадите &#x60;3000&#x60;, приём заказов будет завершён через 50 часов с момента передачи.  | [default to undefined]
**drop_off_point_id** | **number** | Идентификатор drop-off пункта. Если &#x60;first_mile_type &#x3D; DROP_OFF&#x60;, параметр обязательный. | [optional] [default to undefined]
**first_mile_type** | [**V1UpdateWarehouseFBSFirstMileRequestFirstMileTypeEnum**](V1UpdateWarehouseFBSFirstMileRequestFirstMileTypeEnum.md) |  | [default to undefined]
**timeslot_id** | **number** | Идентификатор таймслота. | [default to undefined]
**return_point_id** | **number** | Идентификатор пункта возврата. Получите значение параметра методом [/v1/warehouse/fbs/update/return-point/list](#operation/WarehouseFBSUpdateReturnPointList). | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]

## Example

```typescript
import { V1UpdateWarehouseFBSFirstMileRequest } from './api';

const instance: V1UpdateWarehouseFBSFirstMileRequest = {
    cut_in_time,
    drop_off_point_id,
    first_mile_type,
    timeslot_id,
    return_point_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
