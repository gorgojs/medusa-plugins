# V1AnalyticsManageStocksRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**skus** | **Array&lt;string&gt;** | Идентификаторы товаров в системе Ozon — SKU. | [optional] [default to undefined]
**stock_types** | **Array&lt;string&gt;** | Тип оставшегося на складе товара: - &#x60;STOCK_TYPE_VALID&#x60; — валидный сток. Остаток товара, доступного для продажи.  - &#x60;STOCK_TYPE_WAITING_DOCS&#x60; — превалидный сток. Остаток товара, который Ozon не может продавать, пока продавец не прислал в Ozon документы по обязательной маркировке. Товар перейдёт в валидный сток, когда документы будут подписаны. - &#x60;STOCK_TYPE_EXPIRING&#x60; — предпросрок. Остаток товара, который снят с полки, но срок годности формально не истёк.  - &#x60;STOCK_TYPE_DEFECT&#x60; — брак. Остаток товара, который находится на складах Ozon, но повреждён.  | [optional] [default to undefined]
**warehouse_ids** | **Array&lt;string&gt;** | Идентификаторы складов. | [optional] [default to undefined]

## Example

```typescript
import { V1AnalyticsManageStocksRequestFilter } from './api';

const instance: V1AnalyticsManageStocksRequestFilter = {
    skus,
    stock_types,
    warehouse_ids,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
