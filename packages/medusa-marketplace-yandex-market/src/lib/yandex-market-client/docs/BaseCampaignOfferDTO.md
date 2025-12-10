# BaseCampaignOfferDTO

Информация о новой цене на товар.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**quantum** | [**QuantumDTO**](QuantumDTO.md) |  | [optional] [default to undefined]
**available** | **boolean** | {% note warning \&quot;Вместо него используйте методы скрытия товаров с витрины\&quot; %}  * [GET v2/campaigns/{campaignId}/hidden-offers](../../reference/assortment/getHiddenOffers.md) — просмотр скрытых товаров; * [POST v2/campaigns/{campaignId}/hidden-offers](../../reference/assortment/addHiddenOffers.md) — скрытие товаров; * [POST v2/campaigns/{campaignId}/hidden-offers/delete](../../reference/assortment/deleteHiddenOffers.md) — возобновление показа.  {% endnote %}  Есть ли товар в продаже.  | [optional] [default to undefined]

## Example

```typescript
import { BaseCampaignOfferDTO } from './api';

const instance: BaseCampaignOfferDTO = {
    offerId,
    quantum,
    available,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
