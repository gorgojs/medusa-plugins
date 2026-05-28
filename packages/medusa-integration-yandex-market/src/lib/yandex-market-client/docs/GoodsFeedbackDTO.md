# GoodsFeedbackDTO

Отзыв о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackId** | **number** | Идентификатор отзыва.  | [default to undefined]
**createdAt** | **string** | Дата и время создания отзыва. | [default to undefined]
**needReaction** | **boolean** | Прочитан ли отзыв.  Принимает значение &#x60;false&#x60;, если магазин:  * Прочитал отзыв в кабинете продавца на Маркете. * Отметил отзыв прочитанным — метод [POST v2/businesses/{businessId}/goods-feedback/skip-reaction](../../reference/goods-feedback/skipGoodsFeedbacksReaction.md). * Оставил комментарий к отзыву — метод [POST v2/businesses/{businessId}/goods-feedback/comments/update](../../reference/goods-feedback/updateGoodsFeedbackComment.md).  | [default to undefined]
**identifiers** | [**GoodsFeedbackIdentifiersDTO**](GoodsFeedbackIdentifiersDTO.md) |  | [default to undefined]
**author** | **string** | Имя автора отзыва. | [optional] [default to undefined]
**description** | [**GoodsFeedbackDescriptionDTO**](GoodsFeedbackDescriptionDTO.md) |  | [optional] [default to undefined]
**media** | [**GoodsFeedbackMediaDTO**](GoodsFeedbackMediaDTO.md) |  | [optional] [default to undefined]
**statistics** | [**GoodsFeedbackStatisticsDTO**](GoodsFeedbackStatisticsDTO.md) |  | [default to undefined]

## Example

```typescript
import { GoodsFeedbackDTO } from './api';

const instance: GoodsFeedbackDTO = {
    feedbackId,
    createdAt,
    needReaction,
    identifiers,
    author,
    description,
    media,
    statistics,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
