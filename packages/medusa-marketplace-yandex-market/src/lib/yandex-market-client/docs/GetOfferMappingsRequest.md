# GetOfferMappingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна.  {% note warning \&quot;Такой список возвращается только целиком\&quot; %}  Если вы запрашиваете информацию по конкретным SKU, не заполняйте: * &#x60;page_token&#x60;; * &#x60;limit&#x60;; * &#x60;cardStatuses&#x60;; * &#x60;categoryIds&#x60;; * &#x60;vendorNames&#x60;; * &#x60;tags&#x60;; * &#x60;archived&#x60;.  {% endnote %}     | [optional] [default to undefined]
**cardStatuses** | [**Set&lt;OfferCardStatusType&gt;**](OfferCardStatusType.md) | Фильтр по статусам карточек.  [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете. | [optional] [default to undefined]
**vendorNames** | **Set&lt;string&gt;** | Фильтр по брендам. | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** | Фильтр по тегам. | [optional] [default to undefined]
**archived** | **boolean** | Фильтр по нахождению в архиве.  Передайте &#x60;true&#x60;, чтобы получить товары, находящиеся в архиве. Если фильтр не заполнен или передано &#x60;false&#x60;, в ответе возвращаются товары, не находящиеся в архиве.  | [optional] [default to undefined]

## Example

```typescript
import { GetOfferMappingsRequest } from './api';

const instance: GetOfferMappingsRequest = {
    offerIds,
    cardStatuses,
    categoryIds,
    vendorNames,
    tags,
    archived,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
