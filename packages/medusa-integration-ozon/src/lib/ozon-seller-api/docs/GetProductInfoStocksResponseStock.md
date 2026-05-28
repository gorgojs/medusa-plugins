# GetProductInfoStocksResponseStock


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**present** | **number** | Сейчас на складе. | [optional] [default to undefined]
**reserved** | **number** | Зарезервировано. | [optional] [default to undefined]
**shipment_type** | [**StockShipmentType**](StockShipmentType.md) |  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**type** | **string** | Тип склада: - &#x60;fbs&#x60; — склад продавца, доставка силами Ozon; - &#x60;rfbs&#x60; — склад продавца, доставка силами продавца; - &#x60;fbo&#x60; — склад Ozon; - &#x60;fbp&#x60; — склад партнёра.  | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;number&gt;** | Идентификаторы складов, на которых хранился или хранится товар. | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoStocksResponseStock } from './api';

const instance: GetProductInfoStocksResponseStock = {
    present,
    reserved,
    shipment_type,
    sku,
    type,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
