# UpdateCampaignOfferDTO

Параметры размещения товара в магазине.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**quantum** | [**QuantumDTO**](QuantumDTO.md) |  | [optional] [default to undefined]
**available** | **boolean** | {% note warning \&quot;Вместо него используйте методы скрытия товаров с витрины\&quot; %}  * [GET v2/campaigns/{campaignId}/hidden-offers](../../reference/assortment/getHiddenOffers.md) — просмотр скрытых товаров; * [POST v2/campaigns/{campaignId}/hidden-offers](../../reference/assortment/addHiddenOffers.md) — скрытие товаров; * [POST v2/campaigns/{campaignId}/hidden-offers/delete](../../reference/assortment/deleteHiddenOffers.md) — возобновление показа.  {% endnote %}  Есть ли товар в продаже.  | [optional] [default to undefined]
**vat** | **number** | Идентификатор НДС, применяемый для товара:  * &#x60;2&#x60; — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров. * &#x60;5&#x60; — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров. * &#x60;6&#x60; — НДС не облагается, используется только для отдельных видов услуг. * &#x60;7&#x60; — НДС 20%. Основной НДС с 2019 года. * &#x60;10&#x60; — НДС 5%. НДС для упрощенной системы налогообложения (УСН). * &#x60;11&#x60; — НДС 7%. НДС для упрощенной системы налогообложения (УСН).  Если параметр не указан, используется НДС, установленный в кабинете.  **Для продавцов :no-translate[Market Yandex Go]** недоступна передача и получение НДС.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateCampaignOfferDTO } from './api';

const instance: UpdateCampaignOfferDTO = {
    offerId,
    quantum,
    available,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
