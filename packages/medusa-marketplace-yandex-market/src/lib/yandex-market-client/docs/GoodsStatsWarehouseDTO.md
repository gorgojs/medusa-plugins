# GoodsStatsWarehouseDTO

Информация о складе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**name** | **string** | Название склада. | [optional] [default to undefined]
**stocks** | [**Array&lt;WarehouseStockDTO&gt;**](WarehouseStockDTO.md) | Информация об остатках товаров на складе. | [default to undefined]

## Example

```typescript
import { GoodsStatsWarehouseDTO } from './api';

const instance: GoodsStatsWarehouseDTO = {
    id,
    name,
    stocks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
