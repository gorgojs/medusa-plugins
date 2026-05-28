# QuestionDTO

Вопрос.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**questionIdentifiers** | [**QuestionIdentifiersDTO**](QuestionIdentifiersDTO.md) |  | [default to undefined]
**businessId** | **number** | Идентификатор кабинета. Чтобы его узнать, воспользуйтесь запросом [GET v2/campaigns](../../reference/campaigns/getCampaigns.md).  ℹ️ [Что такое кабинет и магазин на Маркете](https://yandex.ru/support/marketplace/account/introduction.html)  | [default to undefined]
**text** | **string** | Текстовое содержимое.  | [default to undefined]
**createdAt** | **string** | Дата и время создания вопроса. | [default to undefined]
**votes** | [**VotesDTO**](VotesDTO.md) |  | [default to undefined]
**author** | [**QuestionsTextContentAuthorDTO**](QuestionsTextContentAuthorDTO.md) |  | [default to undefined]

## Example

```typescript
import { QuestionDTO } from './api';

const instance: QuestionDTO = {
    questionIdentifiers,
    businessId,
    text,
    createdAt,
    votes,
    author,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
