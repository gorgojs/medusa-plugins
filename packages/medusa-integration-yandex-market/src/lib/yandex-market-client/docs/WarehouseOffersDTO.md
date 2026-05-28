# WarehouseOffersDTO

Информация об остатках товаров на складе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouseId** | **number** | Идентификатор склада.  **Для моделей FBY и LaaS:** возвращается идентификатор склада Маркета.  **Для модели FBS:** может возвращаться идентификатор как партнерского склада, так и склада возвратов Маркета.  | [default to undefined]
**offers** | [**Array&lt;WarehouseOfferDTO&gt;**](WarehouseOfferDTO.md) | Информация об остатках. | [default to undefined]

## Example

```typescript
import { WarehouseOffersDTO } from './api';

const instance: WarehouseOffersDTO = {
    warehouseId,
    offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
