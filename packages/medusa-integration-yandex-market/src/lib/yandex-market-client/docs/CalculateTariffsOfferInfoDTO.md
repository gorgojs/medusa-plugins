# CalculateTariffsOfferInfoDTO

Стоимость услуг.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | [**CalculateTariffsOfferDTO**](CalculateTariffsOfferDTO.md) |  | [default to undefined]
**tariffs** | [**Array&lt;CalculatedTariffDTO&gt;**](CalculatedTariffDTO.md) | Список услуг и их стоимость.  По некоторым услугам могут возвращаться несколько разных стоимостей. Например, в модели FBS стоимость услуги &#x60;SORTING&#x60; (обработка заказа) зависит от способа отгрузки и количества заказов в отгрузке. Подробнее о тарифах на услуги читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/introduction/rates/models/).  | [default to undefined]

## Example

```typescript
import { CalculateTariffsOfferInfoDTO } from './api';

const instance: CalculateTariffsOfferInfoDTO = {
    offer,
    tariffs,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
