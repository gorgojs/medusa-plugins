# SupplyOrderDetailsResponseVehicleValue

Информация о водителе и машине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver_is_deleted** | **boolean** | &#x60;true&#x60;, если информация о водителе удалена.  | [optional] [default to undefined]
**driver_name** | **string** | Имя водителя. | [optional] [default to undefined]
**driver_phone** | **string** | Телефон водителя. | [optional] [default to undefined]
**vehicle_is_deleted** | **boolean** | &#x60;true&#x60;, если информация о машине удалена.  | [optional] [default to undefined]
**vehicle_model** | **string** | Модель машины. | [optional] [default to undefined]
**vehicle_number** | **string** | Номер машины. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderDetailsResponseVehicleValue } from './api';

const instance: SupplyOrderDetailsResponseVehicleValue = {
    driver_is_deleted,
    driver_name,
    driver_phone,
    vehicle_is_deleted,
    vehicle_model,
    vehicle_number,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
