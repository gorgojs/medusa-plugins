# GoodsFeedbackStatisticsDTO

Статистическая информация по отзыву.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **number** | Оценка товара. | [default to undefined]
**commentsCount** | **number** | Количество комментариев к отзыву.  Учитываются только ответы на отзывы, а не дочерние комментарии.  | [default to undefined]
**recommended** | **boolean** | Рекомендуют ли этот товар. | [optional] [default to undefined]
**paidAmount** | **number** | Количество баллов Плюса, которое автор получил за отзыв. | [optional] [default to undefined]

## Example

```typescript
import { GoodsFeedbackStatisticsDTO } from './api';

const instance: GoodsFeedbackStatisticsDTO = {
    rating,
    commentsCount,
    recommended,
    paidAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
