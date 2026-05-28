# GetOfferCardsContentStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна. &lt;br&gt;&lt;br&gt; ⚠️ Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.  | [optional] [default to undefined]
**cardStatuses** | [**Set&lt;OfferCardStatusType&gt;**](OfferCardStatusType.md) | Фильтр по статусам карточек.  [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете. | [optional] [default to undefined]
**withRecommendations** | **boolean** | Возвращать ли список рекомендаций к заполнению карточки и средний рейтинг карточки у товаров той категории, которая указана в &#x60;marketCategoryId&#x60;.  Значение по умолчанию: &#x60;false&#x60;. Если информация нужна, передайте значение &#x60;true&#x60;.  | [optional] [default to false]

## Example

```typescript
import { GetOfferCardsContentStatusRequest } from './api';

const instance: GetOfferCardsContentStatusRequest = {
    offerIds,
    cardStatuses,
    categoryIds,
    withRecommendations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
