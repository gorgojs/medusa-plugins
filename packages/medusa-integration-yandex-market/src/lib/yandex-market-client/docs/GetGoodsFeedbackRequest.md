# GetGoodsFeedbackRequest

Фильтр запроса отзывов в кабинете. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedbackIds** | **Set&lt;number&gt;** | Идентификаторы отзывов.  ⚠️ Не используйте это поле одновременно с другими фильтрами. Если вы хотите воспользоваться ими, оставьте поле пустым.  | [optional] [default to undefined]
**dateTimeFrom** | **string** | Начало периода. Не включительно.  Если параметр не указан, возвращается информация за 6 месяцев до указанной в &#x60;dateTimeTo&#x60; даты.  Максимальный интервал 6 месяцев.  | [optional] [default to undefined]
**dateTimeTo** | **string** | Конец периода. Не включительно.  Если параметр не указан, используется текущая дата.  Максимальный интервал 6 месяцев.  | [optional] [default to undefined]
**reactionStatus** | [**FeedbackReactionStatusType**](FeedbackReactionStatusType.md) |  | [optional] [default to undefined]
**ratingValues** | **Set&lt;number&gt;** | Оценка товара. | [optional] [default to undefined]
**offerIds** | **Set&lt;string&gt;** | Фильтр по идентификатору товара.  | [optional] [default to undefined]
**paid** | **boolean** | Фильтр отзывов за баллы Плюса. | [optional] [default to undefined]

## Example

```typescript
import { GetGoodsFeedbackRequest } from './api';

const instance: GetGoodsFeedbackRequest = {
    feedbackIds,
    dateTimeFrom,
    dateTimeTo,
    reactionStatus,
    ratingValues,
    offerIds,
    paid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
