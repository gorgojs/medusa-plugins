# SupplyOrderDetailsResponseVehicle

Информация о водителе и машине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_not_set_reasons** | [**Array&lt;VehicleCanNotSetVehicleReasonEnum&gt;**](VehicleCanNotSetVehicleReasonEnum.md) | Причина, почему нельзя указать или изменить информацию о водителе или машине: - &#x60;UNSPECIFIED&#x60; — не определена; - &#x60;INVALID_ORDER_STATE&#x60; — нельзя установить информацию о машине в текущем статусе заявки; - &#x60;VEHICLE_NOT_REQUIRED&#x60; — не обязательно указывать машину; - &#x60;ORDER_DOES_NOT_BELONG_TO_COMPANY&#x60; — заявка на поставку не принадлежит продавцу; - &#x60;UNDEFINED&#x60; — неизвестная.  | [optional] [default to undefined]
**can_set** | **boolean** | &#x60;true&#x60;, если можно изменить информацию о водителе или машине.  | [optional] [default to undefined]
**value** | [**SupplyOrderDetailsResponseVehicleValue**](SupplyOrderDetailsResponseVehicleValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderDetailsResponseVehicle } from './api';

const instance: SupplyOrderDetailsResponseVehicle = {
    can_not_set_reasons,
    can_set,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
