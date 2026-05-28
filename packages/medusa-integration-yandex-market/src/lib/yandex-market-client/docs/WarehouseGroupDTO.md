# WarehouseGroupDTO

Информация о группе складов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название группы складов. | [default to undefined]
**mainWarehouse** | [**WarehouseDTO**](WarehouseDTO.md) |  | [default to undefined]
**warehouses** | [**Array&lt;WarehouseDTO&gt;**](WarehouseDTO.md) | Список складов, входящих в группу. | [default to undefined]

## Example

```typescript
import { WarehouseGroupDTO } from './api';

const instance: WarehouseGroupDTO = {
    name,
    mainWarehouse,
    warehouses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
