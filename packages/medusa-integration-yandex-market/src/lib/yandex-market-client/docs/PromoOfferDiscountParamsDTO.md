# PromoOfferDiscountParamsDTO

Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **number** | Зачеркнутая цена — та, по которой товар продавался до акции.  Указывается в рублях.  Возвращается, только если товар участвует в акции.  | [optional] [default to undefined]
**promoPrice** | **number** | Цена по акции — та, по которой вы хотите продавать товар.  Указывается в рублях.  Возвращается, только если товар участвует в акции.  | [optional] [default to undefined]
**maxPromoPrice** | **number** | Максимально возможная цена для участия в акции.  Указывается в рублях.  Возвращается для всех товаров.  | [default to undefined]

## Example

```typescript
import { PromoOfferDiscountParamsDTO } from './api';

const instance: PromoOfferDiscountParamsDTO = {
    price,
    promoPrice,
    maxPromoPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
