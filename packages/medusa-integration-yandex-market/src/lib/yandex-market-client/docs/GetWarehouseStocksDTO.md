# GetWarehouseStocksDTO

Список складов с информацией об остатках на каждом из них.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**PackagingForwardScrollingPagerDTO**](PackagingForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]
**warehouses** | [**Array&lt;WarehouseOffersDTO&gt;**](WarehouseOffersDTO.md) | Страница списка складов.  **Для моделей FBY и LaaS:** может содержать несколько складов Маркета.  **Для модели FBS:** может содержать как партнерский склад, так и склад возвратов Маркета.  | [default to undefined]

## Example

```typescript
import { GetWarehouseStocksDTO } from './api';

const instance: GetWarehouseStocksDTO = {
    paging,
    warehouses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
