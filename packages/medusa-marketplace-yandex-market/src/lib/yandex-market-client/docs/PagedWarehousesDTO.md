# PagedWarehousesDTO

Информация о складах в кабинете.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouses** | [**Array&lt;WarehouseDetailsDTO&gt;**](WarehouseDetailsDTO.md) | Список складов. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PagedWarehousesDTO } from './api';

const instance: PagedWarehousesDTO = {
    warehouses,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
