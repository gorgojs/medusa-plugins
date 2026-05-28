# SellerSellerAPIArrivalPassUpdateRequestArrivalPass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver_name** | **string** | ФИО водителя. | [default to undefined]
**driver_phone** | **string** | Номер телефона водителя. | [default to undefined]
**id** | **number** | Идентификатор пропуска. | [default to undefined]
**vehicle_license_plate** | **string** | Номер автомобиля. | [default to undefined]
**vehicle_model** | **string** | Модель автомобиля. | [default to undefined]
**with_returns** | **boolean** | &#x60;true&#x60;, если будете вывозить возвраты. По умолчанию — &#x60;false&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { SellerSellerAPIArrivalPassUpdateRequestArrivalPass } from './api';

const instance: SellerSellerAPIArrivalPassUpdateRequestArrivalPass = {
    driver_name,
    driver_phone,
    id,
    vehicle_license_plate,
    vehicle_model,
    with_returns,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
