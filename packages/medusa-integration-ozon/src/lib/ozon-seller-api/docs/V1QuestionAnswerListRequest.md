# V1QuestionAnswerListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_id** | **string** | Идентификатор последнего значения на странице.   Если запрос первый, оставьте поле пустым. Для следующих значений указывайте &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**question_id** | **string** | Идентификатор вопроса. | [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [default to undefined]

## Example

```typescript
import { V1QuestionAnswerListRequest } from './api';

const instance: V1QuestionAnswerListRequest = {
    last_id,
    question_id,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
