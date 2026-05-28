# ReturnsCompanyFbsInfoResponseDropOffPoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **string** | Адрес drop-off пункта. | [optional] [default to undefined]
**box_count** | **number** | Количество коробок в drop-off пункте. | [optional] [default to undefined]
**id** | **number** | Идентификатор drop-off пункта. | [optional] [default to undefined]
**name** | **string** | Название drop-off пункта. | [optional] [default to undefined]
**pass_info** | [**ReturnsCompanyFbsInfoResponsePassInfo**](ReturnsCompanyFbsInfoResponsePassInfo.md) |  | [optional] [default to undefined]
**place_id** | **number** | Идентификатор склада, на который приедет отгрузка. | [optional] [default to undefined]
**returns_count** | **number** | Количество возвратов в drop-off пункте. | [optional] [default to undefined]
**utc_offset** | **string** | Смещение часового пояса времени отгрузки от UTC-0. | [optional] [default to undefined]
**warehouses_ids** | **Array&lt;string&gt;** | Идентификатор складов продавца. | [optional] [default to undefined]

## Example

```typescript
import { ReturnsCompanyFbsInfoResponseDropOffPoints } from './api';

const instance: ReturnsCompanyFbsInfoResponseDropOffPoints = {
    address,
    box_count,
    id,
    name,
    pass_info,
    place_id,
    returns_count,
    utc_offset,
    warehouses_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
