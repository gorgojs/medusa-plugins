# OrderPriceDTO

Информация о стоимости заказа.  {% note info \"Как рассчитывается стоимость заказа, доставки и вознаграждение продавцу\" %}  * Стоимость товаров в заказе складывается из параметров `payment` и `cashback`. * Общая сумма вознаграждений продавцу возвращается в параметре `subsidy`. * Значение `payment`, `cashback` и `subsidy` может отличаться от стоимости в каталоге, потому что информация об акциях магазина не возвращается. * Стоимость доставки складывается из параметров `payment` и `subsidy` в `delivery`. * Все суммы указаны в валюте магазина.  {% endnote %} 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**subsidy** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**cashback** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**delivery** | [**DeliveryPriceDTO**](DeliveryPriceDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { OrderPriceDTO } from './api';

const instance: OrderPriceDTO = {
    payment,
    subsidy,
    cashback,
    delivery,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
