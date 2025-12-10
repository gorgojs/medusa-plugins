# GetPromoOffersResultDTO

Список товаров, которые участвуют или могут участвовать в акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offers** | [**Array&lt;GetPromoOfferDTO&gt;**](GetPromoOfferDTO.md) | Товары, которые участвуют или могут участвовать в акции. | [default to undefined]
**paging** | [**ForwardScrollingPagerDTO**](ForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoOffersResultDTO } from './api';

const instance: GetPromoOffersResultDTO = {
    offers,
    paging,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
