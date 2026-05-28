# ArrivalpassArrivalPassUpdateRequestArrivalPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_pass_id** | **number** | Идентификатор пропуска. | [default to undefined]
**arrival_time** | **string** | Время прибытия в формате UTC. В это время начнёт действовать пропуск.  Чтобы изменить время прибытия, используйте метод [/v1/carriage/pass/update](#operation/carriagePassUpdate).  | [default to undefined]
**driver_name** | **string** | ФИО водителя. | [default to undefined]
**driver_phone** | **string** | Номер телефона водителя. | [default to undefined]
**vehicle_license_plate** | **string** | Номер автомобиля. | [default to undefined]
**vehicle_model** | **string** | Модель автомобиля. | [default to undefined]

## Example

```typescript
import { ArrivalpassArrivalPassUpdateRequestArrivalPass } from './api';

const instance: ArrivalpassArrivalPassUpdateRequestArrivalPass = {
    arrival_pass_id,
    arrival_time,
    driver_name,
    driver_phone,
    vehicle_license_plate,
    vehicle_model,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
