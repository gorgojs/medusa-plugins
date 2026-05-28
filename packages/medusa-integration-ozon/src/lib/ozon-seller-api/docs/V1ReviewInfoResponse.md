# V1ReviewInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments_amount** | **number** | Количество комментариев к отзыву. | [optional] [default to undefined]
**dislikes_amount** | **number** | Количество дизлайков на отзыве. | [optional] [default to undefined]
**id** | **string** | Идентификатор отзыва. | [optional] [default to undefined]
**is_rating_participant** | **boolean** | &#x60;true&#x60;, если отзыв участвует в подсчёте рейтинга.  | [optional] [default to undefined]
**likes_amount** | **number** | Количество лайков на отзыве. | [optional] [default to undefined]
**order_status** | **string** | Статус заказа, на который покупатель оставил отзыв: - &#x60;DELIVERED&#x60; — доставлен, - &#x60;CANCELLED&#x60; — отменён.  | [optional] [default to undefined]
**photos** | [**Array&lt;ReviewInfoResponsePhoto&gt;**](ReviewInfoResponsePhoto.md) | Информация об изображении. | [optional] [default to undefined]
**photos_amount** | **number** | Количество изображений у отзыва. | [optional] [default to undefined]
**published_at** | **string** | Дата публикации отзыва. | [optional] [default to undefined]
**rating** | **number** | Оценка отзыва. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**status** | **string** | Статус отзыва: - &#x60;UNPROCESSED&#x60; — не обработан, - &#x60;PROCESSED&#x60; — обработан.  | [optional] [default to undefined]
**text** | **string** | Текст отзыва. | [optional] [default to undefined]
**videos** | [**Array&lt;ReviewInfoResponseVideo&gt;**](ReviewInfoResponseVideo.md) | Информация о видео. | [optional] [default to undefined]
**videos_amount** | **number** | Количество видео у отзыва. | [optional] [default to undefined]

## Example

```typescript
import { V1ReviewInfoResponse } from './api';

const instance: V1ReviewInfoResponse = {
    comments_amount,
    dislikes_amount,
    id,
    is_rating_participant,
    likes_amount,
    order_status,
    photos,
    photos_amount,
    published_at,
    rating,
    sku,
    status,
    text,
    videos,
    videos_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
