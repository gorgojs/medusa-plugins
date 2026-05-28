# AnalyticsStockOnWarehouseResultRows


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**item_code** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**item_name** | **string** | Название товара в системе Ozon. | [optional] [default to undefined]
**free_to_sell_amount** | **number** | Количество товара, доступное к продаже на Ozon. | [optional] [default to undefined]
**promised_amount** | **number** | Количество товара, указанное в подтверждённых будущих поставках. | [optional] [default to undefined]
**reserved_amount** | **number** | Количество товара, зарезервированное для покупки, возврата и перевозки между складами. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада, где находится товар. | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsStockOnWarehouseResultRows } from './api';

const instance: AnalyticsStockOnWarehouseResultRows = {
    sku,
    item_code,
    item_name,
    free_to_sell_amount,
    promised_amount,
    reserved_amount,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
