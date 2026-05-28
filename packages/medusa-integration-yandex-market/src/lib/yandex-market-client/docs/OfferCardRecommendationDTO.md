# OfferCardRecommendationDTO

Рекомендация по заполнению карточки товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**OfferCardRecommendationType**](OfferCardRecommendationType.md) |  | [default to undefined]
**percent** | **number** | Процент выполнения рекомендации.  Указывается для рекомендаций некоторых типов:  * &#x60;PICTURE_COUNT&#x60;. * &#x60;VIDEO_COUNT&#x60;. * &#x60;MAIN&#x60;. * &#x60;ADDITIONAL&#x60;. * &#x60;DISTINCTIVE&#x60;.  | [optional] [default to undefined]
**remainingRatingPoints** | **number** | Максимальное количество баллов рейтинга карточки, которые можно получить за выполнение рекомендаций.  | [optional] [default to undefined]

## Example

```typescript
import { OfferCardRecommendationDTO } from './api';

const instance: OfferCardRecommendationDTO = {
    type,
    percent,
    remainingRatingPoints,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
