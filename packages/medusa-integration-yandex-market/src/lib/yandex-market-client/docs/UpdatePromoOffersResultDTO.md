# UpdatePromoOffersResultDTO

Ошибки и предупреждения, которые появились при добавлении товаров в акцию.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rejectedOffers** | [**Array&lt;RejectedPromoOfferUpdateDTO&gt;**](RejectedPromoOfferUpdateDTO.md) | Изменения, которые были отклонены.  Возвращается, только если есть отклоненные изменения.  | [optional] [default to undefined]
**warningOffers** | [**Array&lt;WarningPromoOfferUpdateDTO&gt;**](WarningPromoOfferUpdateDTO.md) | Изменения, по которым есть предупреждения. Они информируют о возможных проблемах. Информация о товарах обновится.  Возвращается, только если есть предупреждения.  | [optional] [default to undefined]

## Example

```typescript
import { UpdatePromoOffersResultDTO } from './api';

const instance: UpdatePromoOffersResultDTO = {
    rejectedOffers,
    warningOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
