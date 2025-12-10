# ReturnItemDTO

Список товаров в невыкупе или возврате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketSku** | **number** | Идентификатор карточки товара на Маркете. | [optional] [default to undefined]
**shopSku** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**count** | **number** | Количество единиц товара. | [default to undefined]
**decisions** | [**Array&lt;ReturnDecisionDTO&gt;**](ReturnDecisionDTO.md) | Список решений по возврату. | [optional] [default to undefined]
**instances** | [**Array&lt;ReturnInstanceDTO&gt;**](ReturnInstanceDTO.md) | Список логистических позиций возврата. | [optional] [default to undefined]
**tracks** | [**Array&lt;TrackDTO&gt;**](TrackDTO.md) | Список трек-кодов для почтовых отправлений. | [optional] [default to undefined]

## Example

```typescript
import { ReturnItemDTO } from './api';

const instance: ReturnItemDTO = {
    marketSku,
    shopSku,
    count,
    decisions,
    instances,
    tracks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
