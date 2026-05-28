# DeliveryPriceDTO

Информация о стоимости доставки, включая подъем на этаж.  {% note info \"Как рассчитывается стоимость доставки\" %}  * Стоимость доставки складывается из параметров `payment` и `subsidy`. * Все суммы указаны в валюте магазина.  {% endnote %} 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**subsidy** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**vat** | [**OrderVatType**](OrderVatType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { DeliveryPriceDTO } from './api';

const instance: DeliveryPriceDTO = {
    payment,
    subsidy,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
