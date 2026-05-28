# AverageDeliveryTimeDetailsResponseItemData

Данные о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_schema** | [**AverageDeliveryTimeDetailsResponseItemDataDeliverySchema**](AverageDeliveryTimeDetailsResponseItemDataDeliverySchema.md) |  | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { AverageDeliveryTimeDetailsResponseItemData } from './api';

const instance: AverageDeliveryTimeDetailsResponseItemData = {
    delivery_schema,
    name,
    offer_id,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
