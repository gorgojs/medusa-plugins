# GetPromoDTO

Информация об акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Идентификатор акции. | [default to undefined]
**name** | **string** | Название акции. | [default to undefined]
**period** | [**PromoPeriodDTO**](PromoPeriodDTO.md) |  | [default to undefined]
**participating** | **boolean** | Участвует или участвовал ли продавец в этой акции.  Для текущих и будущих акций возвращается со значением &#x60;true&#x60;, если в акции есть товары, которые были добавлены вручную. Если товары не участвуют в акции или добавлены в нее автоматически, параметр возвращается со значением &#x60;false&#x60;.  Для прошедших акций всегда возвращается со значением &#x60;true&#x60;.  Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).  | [default to undefined]
**assortmentInfo** | [**GetPromoAssortmentInfoDTO**](GetPromoAssortmentInfoDTO.md) |  | [default to undefined]
**mechanicsInfo** | [**GetPromoMechanicsInfoDTO**](GetPromoMechanicsInfoDTO.md) |  | [default to undefined]
**bestsellerInfo** | [**GetPromoBestsellerInfoDTO**](GetPromoBestsellerInfoDTO.md) |  | [default to undefined]
**channels** | [**Set&lt;ChannelType&gt;**](ChannelType.md) | Список каналов продвижения товаров. | [optional] [default to undefined]
**constraints** | [**GetPromoConstraintsDTO**](GetPromoConstraintsDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoDTO } from './api';

const instance: GetPromoDTO = {
    id,
    name,
    period,
    participating,
    assortmentInfo,
    mechanicsInfo,
    bestsellerInfo,
    channels,
    constraints,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
