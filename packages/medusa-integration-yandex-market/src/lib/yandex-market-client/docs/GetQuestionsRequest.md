# GetQuestionsRequest

Запрос на получение вопросов о товарах продавца.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryIds** | **Set&lt;number&gt;** | Идентификаторы категорий товаров. | [optional] [default to undefined]
**dateFrom** | **string** | Дата начала периода создания вопроса.  Если параметр не указан, возвращается информация за 1 месяц до указанной в &#x60;dateTo&#x60; даты.  Максимальный интервал 1 месяц.  | [optional] [default to undefined]
**dateTo** | **string** | Дата окончания периода создания вопроса.  Если параметр не указан, используется текущая дата.  Максимальный интервал 1 месяц.  | [optional] [default to undefined]
**needAnswer** | **boolean** | Нужен ли ответ на вопрос.  * &#x60;true&#x60; — только вопросы, которые ждут ответа. * &#x60;false&#x60; — все вопросы.  | [optional] [default to false]
**sort** | [**QuestionSortOrderType**](QuestionSortOrderType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetQuestionsRequest } from './api';

const instance: GetQuestionsRequest = {
    categoryIds,
    dateFrom,
    dateTo,
    needAnswer,
    sort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
