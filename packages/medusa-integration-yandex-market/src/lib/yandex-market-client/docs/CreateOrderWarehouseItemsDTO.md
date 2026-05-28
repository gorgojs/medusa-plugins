# CreateOrderWarehouseItemsDTO

Список товаров в заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouseId** | **number** | Идентификатор фулфилмент-склада Маркета.  Получите его с помощью метода [POST v2/campaigns/{campaignId}/delivery-options](../../reference/delivery-options/getDeliveryOptions.md).  | [default to undefined]
**items** | [**Array&lt;CreateOrderItemDTO&gt;**](CreateOrderItemDTO.md) | Список товаров в заказе.  В рамках одного запроса все значения &#x60;offerId&#x60; должны быть уникальными. Не допускается передача двух объектов с одинаковым &#x60;offerId&#x60;.  | [default to undefined]
**deliveryDateInterval** | [**DeliveryDateIntervalDTO**](DeliveryDateIntervalDTO.md) |  | [default to undefined]
**deliveryTimeInterval** | [**TimeIntervalDTO**](TimeIntervalDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreateOrderWarehouseItemsDTO } from './api';

const instance: CreateOrderWarehouseItemsDTO = {
    warehouseId,
    items,
    deliveryDateInterval,
    deliveryTimeInterval,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
