# GetPromoOffersRequest

Получение списка товаров, которые участвуют или могут участвовать в акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**promoId** | **string** | Идентификатор акции. | [default to undefined]
**statusType** | [**PromoOfferParticipationStatusFilterType**](PromoOfferParticipationStatusFilterType.md) |  | [optional] [default to undefined]
**statuses** | [**Set&lt;PromoOfferParticipationStatusMultiFilterType&gt;**](PromoOfferParticipationStatusMultiFilterType.md) | Фильтр для товаров, которые могут участвовать в акции. Можно задать несколько значений. | [optional] [default to undefined]

## Example

```typescript
import { GetPromoOffersRequest } from './api';

const instance: GetPromoOffersRequest = {
    promoId,
    statusType,
    statuses,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
