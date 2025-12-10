# OrderItemDTO

Список товаров в заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор товара в заказе.  Позволяет идентифицировать товар в рамках данного заказа.  | [default to undefined]
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**offerName** | **string** | Название товара. | [default to undefined]
**price** | **number** | Цена товара в валюте заказа без учета вознаграждения продавцу за скидки по промокодам, купонам и акциям (параметр &#x60;subsidies&#x60;).  Включает НДС.  | [default to undefined]
**buyerPrice** | **number** | Цена товара в валюте покупателя. В цене уже учтены скидки по:  * акциям; * купонам; * промокодам.  | [default to undefined]
**buyerPriceBeforeDiscount** | **number** | Стоимость товара в валюте покупателя до применения скидок по:  * акциям; * купонам; * промокодам.  | [default to undefined]
**priceBeforeDiscount** | **number** | Стоимость товара в валюте магазина до применения скидок. | [optional] [default to undefined]
**count** | **number** | Количество единиц товара. | [default to undefined]
**vat** | [**OrderVatType**](OrderVatType.md) |  | [default to undefined]
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [optional] [default to undefined]
**subsidy** | **number** | {% note warning \&quot;Вместо него используйте &#x60;subsidies&#x60;.\&quot; %}     {% endnote %}  Общее вознаграждение продавцу за DBS-доставку и все скидки на товар:  * по промокодам; * по купонам; * по баллам Плюса; * по акциям.  | [optional] [default to undefined]
**partnerWarehouseId** | **string** | **Только для модели FBY**  Идентификатор склада, на который сформирован заказ.  | [optional] [default to undefined]
**promos** | [**Array&lt;OrderItemPromoDTO&gt;**](OrderItemPromoDTO.md) | Информация о вознаграждениях продавцу за скидки на товар по промокодам, купонам и акциям. | [optional] [default to undefined]
**instances** | [**Array&lt;OrderItemInstanceDTO&gt;**](OrderItemInstanceDTO.md) | Информация о маркировке единиц товара.  Возвращаются данные для маркировки, переданные в запросе [PUT v2/campaigns/{campaignId}/orders/{orderId}/identifiers](../../reference/orders/provideOrderItemIdentifiers.md).  Если магазин еще не передавал коды для этого заказа, &#x60;instances&#x60; отсутствует.  | [optional] [default to undefined]
**details** | [**Array&lt;OrderItemDetailDTO&gt;**](OrderItemDetailDTO.md) | {% note warning \&quot;Для получения информации о невыкупах и возвратах используйте [GET v2/campaigns/{campaignId}/returns](../../reference/orders/getReturns.md).\&quot; %}     {% endnote %}  Информация о невыкупленных или возвращенных товарах в заказе.  | [optional] [default to undefined]
**subsidies** | [**Array&lt;OrderItemSubsidyDTO&gt;**](OrderItemSubsidyDTO.md) | Список субсидий по типам. | [optional] [default to undefined]
**requiredInstanceTypes** | [**Set&lt;OrderItemInstanceType&gt;**](OrderItemInstanceType.md) | Список необходимых маркировок товара. | [optional] [default to undefined]
**tags** | [**Set&lt;OrderItemTagType&gt;**](OrderItemTagType.md) | Признаки товара. | [optional] [default to undefined]

## Example

```typescript
import { OrderItemDTO } from './api';

const instance: OrderItemDTO = {
    id,
    offerId,
    offerName,
    price,
    buyerPrice,
    buyerPriceBeforeDiscount,
    priceBeforeDiscount,
    count,
    vat,
    shopSku,
    subsidy,
    partnerWarehouseId,
    promos,
    instances,
    details,
    subsidies,
    requiredInstanceTypes,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
