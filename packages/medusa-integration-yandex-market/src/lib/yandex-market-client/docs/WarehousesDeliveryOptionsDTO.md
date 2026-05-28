# WarehousesDeliveryOptionsDTO

Варианты доставки со склада.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouseId** | **number** | Идентификатор фулфилмент-склада Маркета. | [default to undefined]
**deliveryOptions** | [**WarehouseDeliveryOptionsDTO**](WarehouseDeliveryOptionsDTO.md) |  | [default to undefined]
**items** | [**Array&lt;BasicOrderItemDTO&gt;**](BasicOrderItemDTO.md) | Товары в заказе. | [default to undefined]

## Example

```typescript
import { WarehousesDeliveryOptionsDTO } from './api';

const instance: WarehousesDeliveryOptionsDTO = {
    warehouseId,
    deliveryOptions,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
