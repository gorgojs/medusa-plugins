# ArrivalpassArrivalPassCreateRequestArrivalPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_time** | **string** | Время прибытия в формате UTC.  В это время пропуск начнёт действовать.  | [default to undefined]
**driver_name** | **string** | ФИО водителя. | [default to undefined]
**driver_phone** | **string** | Номер телефона водителя. | [default to undefined]
**dropoff_point_id** | **number** | Идентификатор склада, на который оформляется пропуск. | [default to undefined]
**vehicle_license_plate** | **string** | Номер автомобиля. | [default to undefined]
**vehicle_model** | **string** | Модель автомобиля. | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада продавца. Можно получить с помощью метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [default to undefined]

## Example

```typescript
import { ArrivalpassArrivalPassCreateRequestArrivalPass } from './api';

const instance: ArrivalpassArrivalPassCreateRequestArrivalPass = {
    arrival_time,
    driver_name,
    driver_phone,
    dropoff_point_id,
    vehicle_license_plate,
    vehicle_model,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
