# V1WarehouseFBSReturnMileInfoResponseReturnPoint

Информация о пункте возврата.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес пункта возврата. | [optional] [default to undefined]
**coordinates** | [**V1WarehouseFBSReturnMileInfoResponseCoordinates**](V1WarehouseFBSReturnMileInfoResponseCoordinates.md) |  | [optional] [default to undefined]
**id** | **number** | Идентификатор пункта возврата. | [optional] [default to undefined]
**name** | **string** | Название пункта возврата. | [optional] [default to undefined]
**type** | [**V1WarehouseFBSReturnMileInfoResponseReturnPointTypeEnum**](V1WarehouseFBSReturnMileInfoResponseReturnPointTypeEnum.md) |  | [optional] [default to undefined]
**utc_offset** | **number** | Смещение часового пояса от UTC-0 в минутах. | [optional] [default to undefined]
**working_days** | [**Array&lt;V1WarehouseFBSReturnMileInfoResponseWorkingDays&gt;**](V1WarehouseFBSReturnMileInfoResponseWorkingDays.md) | Рабочие дни пункта возврата. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFBSReturnMileInfoResponseReturnPoint } from './api';

const instance: V1WarehouseFBSReturnMileInfoResponseReturnPoint = {
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
