# V1AnalyticsManageStocksResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defect_stock_count** | **number** | Остаток дефектного товара, шт. | [optional] [default to undefined]
**expiring_stock_count** | **number** | Остаток товара с истекающим сроком годности, шт. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**valid_stock_count** | **number** | Остаток товара, доступного для продажи. | [optional] [default to undefined]
**waitingdocs_stock_count** | **number** | Остаток товара, ожидающего документы. | [optional] [default to undefined]
**warehouse_name** | **string** | Название склада. | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsManageStocksResponseItem } from './api';

const instance: V1AnalyticsManageStocksResponseItem = {
    defect_stock_count,
    expiring_stock_count,
    name,
    offer_id,
    sku,
    valid_stock_count,
    waitingdocs_stock_count,
    warehouse_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
