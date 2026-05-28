# AddHiddenOffersRequest

Запрос на скрытие оферов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hiddenOffers** | [**Array&lt;HiddenOfferDTO&gt;**](HiddenOfferDTO.md) | Список скрытых товаров.  В рамках одного запроса все значения &#x60;offerId&#x60; должны быть уникальными. Не допускается передача двух объектов с одинаковым &#x60;offerId&#x60;.  | [default to undefined]

## Example

```typescript
import { AddHiddenOffersRequest } from './api';

const instance: AddHiddenOffersRequest = {
    hiddenOffers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
