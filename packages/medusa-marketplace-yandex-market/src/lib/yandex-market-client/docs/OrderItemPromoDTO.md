# OrderItemPromoDTO

Информация о вознаграждениях продавцу за скидки на товар по промокодам, купонам и акциям.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OrderPromoType**](OrderPromoType.md) |  | [default to undefined]
**discount** | **number** | Размер пользовательской скидки в валюте покупателя.  | [optional] [default to undefined]
**subsidy** | **number** | Вознаграждение продавцу от Маркета за товар, проданный в рамках акции.  | [default to undefined]
**shopPromoId** | **string** | Идентификатор акции поставщика.  | [optional] [default to undefined]
**marketPromoId** | **string** | Идентификатор акции в рамках соглашения на оказание услуг по продвижению сервиса между Маркетом и продавцом.  | [optional] [default to undefined]

## Example

```typescript
import { OrderItemPromoDTO } from './api';

const instance: OrderItemPromoDTO = {
    type,
    discount,
    subsidy,
    shopPromoId,
    marketPromoId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
