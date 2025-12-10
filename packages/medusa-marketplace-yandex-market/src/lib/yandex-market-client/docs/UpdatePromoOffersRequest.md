# UpdatePromoOffersRequest

Добавление товаров в акцию или обновление их параметров.  Чтобы добавить товары в акцию или обновить параметры каких-то товаров, передайте их в параметре `offers`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promoId** | **string** | Идентификатор акции. | [default to undefined]
**offers** | [**Array&lt;UpdatePromoOfferDTO&gt;**](UpdatePromoOfferDTO.md) | Товары, которые необходимо добавить в акцию или цены которых нужно изменить. | [default to undefined]

## Example

```typescript
import { UpdatePromoOffersRequest } from './api';

const instance: UpdatePromoOffersRequest = {
    promoId,
    offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
