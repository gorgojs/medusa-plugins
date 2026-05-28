# GetQuarantineOffersRequest

Фильтрации товаров  В запросе можно указать либо фильтр `offerIds, либо любые другие фильтры товаров. Совместное использование фильтра offerIds с другими фильтрациями приведет к ошибке. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна. &lt;br&gt;&lt;br&gt; ⚠️ Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.  | [optional] [default to undefined]
**cardStatuses** | [**Set&lt;OfferCardStatusType&gt;**](OfferCardStatusType.md) | Фильтр по статусам карточек.  [Что такое карточка товара](https://yandex.ru/support/marketplace/assortment/content/index.html)  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете. | [optional] [default to undefined]
**vendorNames** | **Set&lt;string&gt;** | Фильтр по брендам. | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** | Фильтр по тегам. | [optional] [default to undefined]

## Example

```typescript
import { GetQuarantineOffersRequest } from './api';

const instance: GetQuarantineOffersRequest = {
    offerIds,
    cardStatuses,
    categoryIds,
    vendorNames,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
