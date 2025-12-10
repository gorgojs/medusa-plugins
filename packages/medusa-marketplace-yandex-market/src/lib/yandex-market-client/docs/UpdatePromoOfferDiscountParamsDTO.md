# UpdatePromoOfferDiscountParamsDTO

Параметры товара в акции с типом `DIRECT_DISCOUNT` или `BLUE_FLASH`.  Обязательный параметр для акций с этими типами. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | **number** | Зачеркнутая цена — та, по которой товар продавался до акции.  Указывается в рублях.  Число должно быть целым.  | [optional] [default to undefined]
**promoPrice** | **number** | Цена по акции — та, по которой вы хотите продавать товар.  Указывается в рублях.  Число должно быть целым.  | [optional] [default to undefined]

## Example

```typescript
import { UpdatePromoOfferDiscountParamsDTO } from './api';

const instance: UpdatePromoOfferDiscountParamsDTO = {
    price,
    promoPrice,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
