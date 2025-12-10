# OfferRecommendationsResultDTO

Список товаров с рекомендациями.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paging** | [**ScrollingPagerDTO**](ScrollingPagerDTO.md) |  | [optional] [default to undefined]
**offerRecommendations** | [**Array&lt;OfferRecommendationDTO&gt;**](OfferRecommendationDTO.md) | Страница списка товаров. | [default to undefined]

## Example

```typescript
import { OfferRecommendationsResultDTO } from './api';

const instance: OfferRecommendationsResultDTO = {
    paging,
    offerRecommendations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
