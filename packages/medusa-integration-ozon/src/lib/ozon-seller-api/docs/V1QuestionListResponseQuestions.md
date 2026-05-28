# V1QuestionListResponseQuestions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answers_count** | **number** | Количество ответов на вопрос. | [optional] [default to undefined]
**author_name** | **string** | Имя автора вопроса. | [optional] [default to undefined]
**id** | **string** | Идентификатор вопроса. | [optional] [default to undefined]
**product_url** | **string** | Ссылка на товар. | [optional] [default to undefined]
**published_at** | **string** | Дата публикации вопроса. | [optional] [default to undefined]
**question_link** | **string** | Ссылка на вопрос. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**status** | **string** | Статусы вопроса:   - &#x60;NEW&#x60; — новый,   - &#x60;ALL&#x60; — все вопросы,   - &#x60;VIEWED&#x60; — просмотренный,   - &#x60;PROCESSED&#x60; — обработанный,   - &#x60;UNPROCESSED&#x60; — необработанный.  | [optional] [default to undefined]
**text** | **string** | Текст вопроса. | [optional] [default to undefined]

## Example

```typescript
import { V1QuestionListResponseQuestions } from './api';

const instance: V1QuestionListResponseQuestions = {
    answers_count,
    author_name,
    id,
    product_url,
    published_at,
    question_link,
    sku,
    status,
    text,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
