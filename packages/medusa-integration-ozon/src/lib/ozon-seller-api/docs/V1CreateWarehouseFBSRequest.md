# V1CreateWarehouseFBSRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_coordinates** | [**CreateWarehouseFBSRequestAddressCoordinates**](CreateWarehouseFBSRequestAddressCoordinates.md) |  | [default to undefined]
**cut_in_time** | **number** | Время на приём заказов в минутах. Например, если вы передадите &#x60;3000&#x60;, приём заказов будет завершён через 50 часов с момента передачи.  | [default to undefined]
**drop_off_point_id** | **number** | Идентификатор drop-off пункта. | [optional] [default to undefined]
**first_mile_type** | [**CreateWarehouseFBSRequestFirstMileTypeEnum**](CreateWarehouseFBSRequestFirstMileTypeEnum.md) |  | [default to undefined]
**is_kgt** | **boolean** | &#x60;true&#x60;, если товар крупногабаритный.  | [default to undefined]
**name** | **string** | Название склада. | [default to undefined]
**_options** | [**CreateWarehouseFBSRequestOptions**](CreateWarehouseFBSRequestOptions.md) |  | [optional] [default to undefined]
**phone** | **string** | Номер телефона склада. Укажите в формате +7(XXX)XXX-XX-XX. | [default to undefined]
**timeslot_id** | **number** | Идентификатор таймслота. | [default to undefined]
**return_point_id** | **number** | Идентификатор пункта возврата. Получите значение параметра методом [/v1/warehouse/fbs/create/return-point/list](#operation/WarehouseFBSCreateReturnPointList). | [optional] [default to undefined]
**working_days** | [**Array&lt;CreateWarehouseFBSRequestWorkingDaysEnum&gt;**](CreateWarehouseFBSRequestWorkingDaysEnum.md) | Рабочие дни склада: - &#x60;MONDAY&#x60; — понедельник, - &#x60;TUESDAY&#x60; — вторник, - &#x60;WEDNESDAY&#x60; — среда, - &#x60;THURSDAY&#x60; — четверг, - &#x60;FRIDAY&#x60; — пятница, - &#x60;SATURDAY&#x60; — суббота, - &#x60;SUNDAY&#x60; — воскресенье.  | [optional] [default to undefined]

## Example

```typescript
import { V1CreateWarehouseFBSRequest } from './api';

const instance: V1CreateWarehouseFBSRequest = {
    address_coordinates,
    cut_in_time,
    drop_off_point_id,
    first_mile_type,
    is_kgt,
    name,
    _options,
    phone,
    timeslot_id,
    return_point_id,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
