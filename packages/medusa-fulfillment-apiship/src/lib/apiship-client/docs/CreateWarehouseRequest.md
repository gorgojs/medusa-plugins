# CreateWarehouseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerConnectId** | **string** | ID подключения к 5Пост (если не указано, создается по самому первому созданному подключению) | [optional] [default to undefined]
**regionCode** | **string** | Код региона, в котором находится склад | [default to undefined]
**federalDistrict** | **string** | Наименование федерального округа | [default to undefined]
**warehouse** | [**X5Warehouse**](X5Warehouse.md) |  | [default to undefined]
**workingTime** | [**Array&lt;WorkingTime&gt;**](WorkingTime.md) |  | [default to undefined]
**timezone** | **string** | Часовой пояс склада | [default to undefined]

## Example

```typescript
import { CreateWarehouseRequest } from './api';

const instance: CreateWarehouseRequest = {
    providerConnectId,
    regionCode,
    federalDistrict,
    warehouse,
    workingTime,
    timezone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
