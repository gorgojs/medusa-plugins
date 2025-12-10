# WarehousesDTO

Информация о складах и группах складов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouses** | [**Array&lt;WarehouseDTO&gt;**](WarehouseDTO.md) | Список складов, не входящих в группы. | [default to undefined]
**warehouseGroups** | [**Array&lt;WarehouseGroupDTO&gt;**](WarehouseGroupDTO.md) | Список групп складов. | [default to undefined]

## Example

```typescript
import { WarehousesDTO } from './api';

const instance: WarehousesDTO = {
    warehouses,
    warehouseGroups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
