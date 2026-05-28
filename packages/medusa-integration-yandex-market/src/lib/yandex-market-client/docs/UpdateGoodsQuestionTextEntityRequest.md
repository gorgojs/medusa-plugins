# UpdateGoodsQuestionTextEntityRequest

Запрос на создание, обновление или удаление вопроса, ответа или комментария.  **Параметры для разных операций:**  * `CREATE` — создание ответа или комментария:   * Обязательно: `operationType`, `parentEntityId`, `text`.   * `parentEntityId` — идентификатор родителя (для ответа — вопроса, для комментария — ответа).  * `UPDATE` — обновление ответа или комментария:   * Обязательно: `operationType`, `entityId`, `text`.   * `entityId` — идентификатор ответа или комментария.  * `DELETE` — удаление ответа или комментария:   * Обязательно: `operationType`, `entityId`.   * `text` не требуется. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | [**TypedQuestionsTextEntityIdDTO**](TypedQuestionsTextEntityIdDTO.md) |  | [optional] [default to undefined]
**parentEntityId** | [**TypedQuestionsTextEntityIdDTO**](TypedQuestionsTextEntityIdDTO.md) |  | [optional] [default to undefined]
**text** | **string** | Текстовое содержимое.  | [optional] [default to undefined]
**operationType** | [**QuestionsTextEntityOperationType**](QuestionsTextEntityOperationType.md) |  | [default to undefined]

## Example

```typescript
import { UpdateGoodsQuestionTextEntityRequest } from './api';

const instance: UpdateGoodsQuestionTextEntityRequest = {
    entityId,
    parentEntityId,
    text,
    operationType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
