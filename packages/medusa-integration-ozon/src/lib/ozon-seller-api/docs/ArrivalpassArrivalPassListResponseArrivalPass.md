# ArrivalpassArrivalPassListResponseArrivalPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_pass_id** | **number** | Идентификатор пропуска. | [optional] [default to undefined]
**arrival_reasons** | **Array&lt;string&gt;** | Цель приезда. | [optional] [default to undefined]
**arrival_time** | **string** | Дата и время въезда в формате UTC. | [optional] [default to undefined]
**driver_name** | **string** | ФИО водителя. | [optional] [default to undefined]
**driver_phone** | **string** | Номер телефона водителя. | [optional] [default to undefined]
**dropoff_point_id** | **number** | Идентификатор точки отгрузки. | [optional] [default to undefined]
**is_active** | **boolean** | &#x60;true&#x60;, если заявка активна.  | [optional] [default to undefined]
**vehicle_license_plate** | **string** | Номер автомобиля. | [optional] [default to undefined]
**vehicle_model** | **string** | Модель автомобиля. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада продавца. | [optional] [default to undefined]

## Example

```typescript
import { ArrivalpassArrivalPassListResponseArrivalPass } from './api';

const instance: ArrivalpassArrivalPassListResponseArrivalPass = {
    arrival_pass_id,
    arrival_reasons,
    arrival_time,
    driver_name,
    driver_phone,
    dropoff_point_id,
    is_active,
    vehicle_license_plate,
    vehicle_model,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
