# V1FbpOrderDirectSellerDlvEditRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver_name** | **string** | ФИО водителя. | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]
**supply_id** | **string** | Идентификатор заявки на поставку. | [optional] [default to undefined]
**vehicle_number** | **string** | Номер автомобиля. | [optional] [default to undefined]
**vehicle_type** | **string** | Тип автомобиля. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderDirectSellerDlvEditRequest } from './api';

const instance: V1FbpOrderDirectSellerDlvEditRequest = {
    driver_name,
    row_version,
    supply_id,
    vehicle_number,
    vehicle_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
