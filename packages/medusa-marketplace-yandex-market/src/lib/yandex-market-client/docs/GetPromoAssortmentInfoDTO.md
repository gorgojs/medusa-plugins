# GetPromoAssortmentInfoDTO

Информация о товарах в акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeOffers** | **number** | Количество товаров, которые участвуют или участвовали в акции.  Не учитываются товары, которые были добавлены автоматически.  Об автоматическом и ручном добавлении товаров в акцию читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/promos/market/index).  | [default to undefined]
**potentialOffers** | **number** | Количество доступных товаров в акции.  Параметр возвращается только для текущих и будущих акций.  | [optional] [default to undefined]
**processing** | **boolean** | Есть ли изменения в ассортименте, которые еще не применились. Сохранение изменений занимает некоторое время.  Параметр возвращается только для текущих и будущих акций.  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoAssortmentInfoDTO } from './api';

const instance: GetPromoAssortmentInfoDTO = {
    activeOffers,
    potentialOffers,
    processing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
