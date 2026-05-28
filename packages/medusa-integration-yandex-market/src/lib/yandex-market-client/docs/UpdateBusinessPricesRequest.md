# UpdateBusinessPricesRequest

Запрос на установку цен, которые действуют во всех магазинах.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offers** | [**Array&lt;UpdateBusinessOfferPriceDTO&gt;**](UpdateBusinessOfferPriceDTO.md) | Список товаров с ценами.  В рамках одного запроса все значения &#x60;offerId&#x60; должны быть уникальными. Не допускается передача двух объектов с одинаковым &#x60;offerId&#x60;.  | [default to undefined]

## Example

```typescript
import { UpdateBusinessPricesRequest } from './api';

const instance: UpdateBusinessPricesRequest = {
    offers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
