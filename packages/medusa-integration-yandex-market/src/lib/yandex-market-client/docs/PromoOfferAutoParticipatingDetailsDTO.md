# PromoOfferAutoParticipatingDetailsDTO

Информация об автоматическом добавлении товара в акцию.  Причины, по которым товар не был добавлен автоматически в других магазинах, можно узнать в кабинете продавца на Маркете на странице акции.  Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignIds** | **Set&lt;number&gt;** | Идентификаторы кампаний тех магазинов, в которых товар добавлен в акцию автоматически.  Возвращается, если статус товара в акции — &#x60;PARTIALLY_AUTO&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { PromoOfferAutoParticipatingDetailsDTO } from './api';

const instance: PromoOfferAutoParticipatingDetailsDTO = {
    campaignIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
