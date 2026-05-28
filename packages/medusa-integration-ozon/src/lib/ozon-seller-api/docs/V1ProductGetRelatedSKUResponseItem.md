# V1ProductGetRelatedSKUResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **string** | Признак доступности товара по SKU: - &#x60;HIDDEN&#x60; — скрыт; - &#x60;AVAILABLE&#x60; — доступен; - &#x60;UNAVAILABLE&#x60; — недоступен, SKU удалён.  | [optional] [default to undefined]
**deleted_at** | **string** | Дата и время удаления. | [optional] [default to undefined]
**delivery_schema** | **string** | Схема доставки: - &#x60;SDS&#x60; - идентификатор единого Ozon SKU; - &#x60;FBO&#x60; - идентификатор товара, который продаётся со склада Ozon; - &#x60;FBS&#x60; - идентификатор товара, который продаётся со склада FBS; - &#x60;Crossborder&#x60; - идентификатор товара, который продаётся из-за границы.  | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V1ProductGetRelatedSKUResponseItem } from './api';

const instance: V1ProductGetRelatedSKUResponseItem = {
    availability,
    deleted_at,
    delivery_schema,
    product_id,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
