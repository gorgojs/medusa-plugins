# DeletePromoOffersResultDTO

Результат удаления товаров из акции.  Возвращается, только если в запросе был передан параметр `offerIds`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rejectedOffers** | [**Array&lt;RejectedPromoOfferDeleteDTO&gt;**](RejectedPromoOfferDeleteDTO.md) | Товары, при удалении которых появились ошибки.  Возвращается, только если есть такие товары.  | [optional] [default to undefined]

## Example

```typescript
import { DeletePromoOffersResultDTO } from './api';

const instance: DeletePromoOffersResultDTO = {
    rejectedOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
