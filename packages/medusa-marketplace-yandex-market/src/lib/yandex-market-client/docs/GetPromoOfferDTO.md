# GetPromoOfferDTO

Товар, который участвует или может участвовать в акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerId** | **string** | Ваш SKU — идентификатор товара в вашей системе.  Правила использования SKU:  * У каждого товара SKU должен быть свой.  * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.  SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).  [Что такое SKU и как его назначать](https://yandex.ru/support/marketplace/assortment/add/index.html#fields)  | [default to undefined]
**status** | [**PromoOfferParticipationStatusType**](PromoOfferParticipationStatusType.md) |  | [default to undefined]
**params** | [**PromoOfferParamsDTO**](PromoOfferParamsDTO.md) |  | [default to undefined]
**autoParticipatingDetails** | [**PromoOfferAutoParticipatingDetailsDTO**](PromoOfferAutoParticipatingDetailsDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoOfferDTO } from './api';

const instance: GetPromoOfferDTO = {
    offerId,
    status,
    params,
    autoParticipatingDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
