# V1WarehouseFBSCreateReturnPointListResponseReturnPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес пункта возврата. | [optional] [default to undefined]
**coordinates** | [**V1WarehouseFBSCreateReturnPointListResponseCoordinates**](V1WarehouseFBSCreateReturnPointListResponseCoordinates.md) |  | [optional] [default to undefined]
**id** | **number** | Идентификатор пункта возврата. | [optional] [default to undefined]
**name** | **string** | Название пункта возврата. | [optional] [default to undefined]
**type** | [**V1WarehouseFBSCreateReturnPointListResponseReturnPointTypeEnum**](V1WarehouseFBSCreateReturnPointListResponseReturnPointTypeEnum.md) |  | [optional] [default to undefined]
**utc_offset** | **number** | Смещение часового пояса от UTC-0 в минутах. | [optional] [default to undefined]
**working_days** | [**Array&lt;V1WarehouseFBSCreateReturnPointListResponseWorkingDays&gt;**](V1WarehouseFBSCreateReturnPointListResponseWorkingDays.md) | Рабочие дни пункта возврата. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSCreateReturnPointListResponseReturnPoint } from './api';

const instance: V1WarehouseFBSCreateReturnPointListResponseReturnPoint = {
    address,
    coordinates,
    id,
    name,
    type,
    utc_offset,
    working_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
