# EnrichedModelDTO

Модель товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор модели товара. | [optional] [default to undefined]
**name** | **string** | Название модели товара. | [optional] [default to undefined]
**prices** | [**ModelPriceDTO**](ModelPriceDTO.md) |  | [optional] [default to undefined]
**offers** | [**Array&lt;ModelOfferDTO&gt;**](ModelOfferDTO.md) | Список первых десяти предложений, расположенных на карточке модели.  В ответе на запрос возвращаются предложения различных магазинов. Если есть несколько предложений от одного магазина, в ответе отображается только одно, наиболее релевантное из них.  | [optional] [default to undefined]
**offlineOffers** | **number** | Суммарное количество предложений в розничных магазинах в регионе. Учитываются все предложения от каждого магазина. | [optional] [default to undefined]
**onlineOffers** | **number** | Суммарное количество предложений в интернет-магазинах в регионе. Учитываются все предложения от каждого магазина. | [optional] [default to undefined]

## Example

```typescript
import { EnrichedModelDTO } from './api';

const instance: EnrichedModelDTO = {
    id,
    name,
    prices,
    offers,
    offlineOffers,
    onlineOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
