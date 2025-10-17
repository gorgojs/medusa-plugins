# ModelOfferDTO

Информация о предложении.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount** | **number** | Скидка на предложение в процентах. | [optional] [default to undefined]
**name** | **string** | Наименование предложения. | [optional] [default to undefined]
**pos** | **number** | Позиция предложения в выдаче Маркета на карточке модели. | [optional] [default to undefined]
**preDiscountPrice** | **number** | Цена предложения без скидки магазина. | [optional] [default to undefined]
**price** | **number** | Цена предложения без скидки, которую получает покупатель при оплате через :no-translate[Yandex Pay]. | [optional] [default to undefined]
**regionId** | **number** | Идентификатор региона предложения (регион, откуда доставляется товар).  Сначала показываются предложения, доставляемые из региона, указанного в запросе в параметре &#x60;regionId&#x60;. Предложения, доставляемые из других регионов, показываются после них.  | [optional] [default to undefined]
**shippingCost** | **number** | Стоимость доставки товара в регион:  * &#x60;0&#x60; — платить за доставку не нужно. * &#x60;-1&#x60; — магазин не осуществляет доставку этого товара (самовывоз).  Если стоимость доставки неизвестна, параметр не выводится.  | [optional] [default to undefined]
**shopName** | **string** | Название магазина (в том виде, в котором отображается на Маркете). | [optional] [default to undefined]
**shopRating** | **number** | Рейтинг магазина.  Возможные значения: * &#x60;-1&#x60; — у магазинов, недавно появившихся на Маркете, рейтинг появляется не сразу. До момента появления рейтинга для таких магазинов возвращается значение &#x60;-1&#x60;. * &#x60;1&#x60;. * &#x60;2&#x60;. * &#x60;3&#x60;. * &#x60;4&#x60;. * &#x60;5&#x60;.  | [optional] [default to undefined]
**inStock** | **number** | {% note warning \&quot;Не используйте этот параметр.\&quot; %}     {% endnote %}  | [optional] [default to undefined]

## Example

```typescript
import { ModelOfferDTO } from './api';

const instance: ModelOfferDTO = {
    discount,
    name,
    pos,
    preDiscountPrice,
    price,
    regionId,
    shippingCost,
    shopName,
    shopRating,
    inStock,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
