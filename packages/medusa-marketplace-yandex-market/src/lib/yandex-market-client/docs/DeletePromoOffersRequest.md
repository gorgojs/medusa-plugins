# DeletePromoOffersRequest

Удаление товаров из акции.  Чтобы убрать:  * все товары из акции и больше не участвовать в ней, передайте значение `true` в параметре `deleteAllOffers`;  * часть товаров, передайте их идентификаторы в параметре `offersIds`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promoId** | **string** | Идентификатор акции. | [default to undefined]
**deleteAllOffers** | **boolean** | Чтобы убрать все товары из акции и больше не участвовать в ней, передайте значение &#x60;true&#x60; и не передавайте параметр &#x60;offerIds&#x60;. | [optional] [default to undefined]
**offerIds** | **Set&lt;string&gt;** | Товары, которые нужно убрать из акции. | [optional] [default to undefined]

## Example

```typescript
import { DeletePromoOffersRequest } from './api';

const instance: DeletePromoOffersRequest = {
    promoId,
    deleteAllOffers,
    offerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
