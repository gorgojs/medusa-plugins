# V1UpdateWarehouseFBSRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_coordinates** | [**V1UpdateWarehouseFBSRequestAddressCoordinates**](V1UpdateWarehouseFBSRequestAddressCoordinates.md) |  | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**_options** | [**V1UpdateWarehouseFBSRequestOptions**](V1UpdateWarehouseFBSRequestOptions.md) |  | [optional] [default to undefined]
**phone** | **string** | Номер телефона склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [default to undefined]
**working_days** | [**Array&lt;V1UpdateWarehouseFBSRequestWorkingDaysEnum&gt;**](V1UpdateWarehouseFBSRequestWorkingDaysEnum.md) | Рабочие дни склада: - &#x60;MONDAY&#x60; — понедельник; - &#x60;TUESDAY&#x60; — вторник; - &#x60;WEDNESDAY&#x60; — среда; - &#x60;THURSDAY&#x60; — четверг; - &#x60;FRIDAY&#x60; — пятница; - &#x60;SATURDAY&#x60; — суббота; - &#x60;SUNDAY&#x60; — воскресенье.  | [optional] [default to undefined]

## Example

```typescript
import { V1UpdateWarehouseFBSRequest } from './api';

const instance: V1UpdateWarehouseFBSRequest = {
    address_coordinates,
    name,
    _options,
    phone,
    warehouse_id,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
