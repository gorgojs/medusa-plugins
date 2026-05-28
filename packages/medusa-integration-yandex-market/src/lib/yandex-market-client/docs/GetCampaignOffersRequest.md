# GetCampaignOffersRequest

Фильтрации товаров  В запросе можно указать либо фильтр offerIds, либо любые другие фильтры товаров. Совместное использование фильтра `offerIds` с другими фильтрациями приведет к ошибке. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна.  {% note warning \&quot;Такой список возвращается только целиком\&quot; %}  Не используйте это поле одновременно с фильтрами по статусам карточек, категориям, брендам или тегам. Если вы хотите воспользоваться фильтрами, оставьте поле пустым.  Если вы запрашиваете информацию по конкретным SKU, не заполняйте:  * &#x60;page_token&#x60; * &#x60;limit&#x60;  {% endnote %}     | [optional] [default to undefined]
**statuses** | [**Set&lt;OfferCampaignStatusType&gt;**](OfferCampaignStatusType.md) | Фильтр по статусам товаров.  | [optional] [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Фильтр по категориям на Маркете. | [optional] [default to undefined]
**vendorNames** | **Set&lt;string&gt;** | Фильтр по брендам. | [optional] [default to undefined]
**tags** | **Set&lt;string&gt;** | Фильтр по тегам. | [optional] [default to undefined]

## Example

```typescript
import { GetCampaignOffersRequest } from './api';

const instance: GetCampaignOffersRequest = {
    offerIds,
    statuses,
    categoryIds,
    vendorNames,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
