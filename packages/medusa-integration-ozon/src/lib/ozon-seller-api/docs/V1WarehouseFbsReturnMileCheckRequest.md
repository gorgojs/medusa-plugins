# V1WarehouseFbsReturnMileCheckRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **string** | Код страны в формате ISO 2. | [default to undefined]
**first_mile_type** | [**V1WarehouseFbsReturnMileCheckRequestFirstMileTypeEnum**](V1WarehouseFbsReturnMileCheckRequestFirstMileTypeEnum.md) |  | [default to undefined]
**is_kgt** | **boolean** | Признак крупногабаритного товара. | [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1WarehouseFbsReturnMileCheckRequest } from './api';

const instance: V1WarehouseFbsReturnMileCheckRequest = {
    country_code,
    first_mile_type,
    is_kgt,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
