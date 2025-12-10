# OfferCardDTO

Информация о состоянии карточки товара.  Если поле `mapping` отсутствует в ответе, Маркет еще не успел обработать информацию о товаре. Чтобы определить категорию такого товара, повторите запрос через несколько минут. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**mapping** | [**GetMappingDTO**](GetMappingDTO.md) |  | [optional] [default to undefined]
**parameterValues** | [**Array&lt;ParameterValueDTO&gt;**](ParameterValueDTO.md) | Список характеристик с их значениями.  | [optional] [default to undefined]
**cardStatus** | [**OfferCardStatusType**](OfferCardStatusType.md) |  | [optional] [default to undefined]
**contentRating** | **number** | Рейтинг карточки. | [optional] [default to undefined]
**averageContentRating** | **number** | Средний рейтинг карточки у товаров той категории, которая указана в &#x60;marketCategoryId&#x60;. | [optional] [default to undefined]
**contentRatingStatus** | [**OfferCardContentStatusType**](OfferCardContentStatusType.md) |  | [optional] [default to undefined]
**recommendations** | [**Array&lt;OfferCardRecommendationDTO&gt;**](OfferCardRecommendationDTO.md) | Список рекомендаций к заполнению карточки.  Рекомендации Маркета помогают заполнять карточку так, чтобы покупателям было проще найти ваш товар и решиться на покупку.  | [optional] [default to undefined]
**groupId** | **string** | Идентификатор группы товаров.  У товаров, которые объединены в одну группу, будет одинаковый идентификатор.  [Как объединить товары на карточке](../../step-by-step/assortment-add-goods.md#combine-variants)  | [optional] [default to undefined]
**errors** | [**Array&lt;OfferErrorDTO&gt;**](OfferErrorDTO.md) | Ошибки в контенте, препятствующие размещению товара на витрине. | [optional] [default to undefined]
**warnings** | [**Array&lt;OfferErrorDTO&gt;**](OfferErrorDTO.md) | Связанные с контентом предупреждения, не препятствующие размещению товара на витрине. | [optional] [default to undefined]

## Example

```typescript
import { OfferCardDTO } from './api';

const instance: OfferCardDTO = {
    offerId,
    mapping,
    parameterValues,
    cardStatus,
    contentRating,
    averageContentRating,
    contentRatingStatus,
    recommendations,
    groupId,
    errors,
    warnings,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
