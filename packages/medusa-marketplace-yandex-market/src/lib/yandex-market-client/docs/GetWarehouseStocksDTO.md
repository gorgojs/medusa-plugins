# GetWarehouseStocksDTO

Список складов с информацией об остатках на каждом из них.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**warehouses** | [**Array&lt;WarehouseOffersDTO&gt;**](WarehouseOffersDTO.md) | Страница списка складов. | [default to undefined]

## Example

```typescript
import { GetWarehouseStocksDTO } from './api';

const instance: GetWarehouseStocksDTO = {
    paging,
    warehouses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
