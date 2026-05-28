# ItemPriceDTO

Информация о выплатах и вознаграждениях.  {% note info \"Как рассчитывается стоимость всех единиц товара и вознаграждение продавцу\" %}  * Стоимость всех единиц товара складывается из параметров `payment` и `cashback`. * Общая сумма вознаграждений продавцу возвращается в параметре `subsidy`. * Значение `payment`, `cashback` и `subsidy` может отличаться от стоимости в каталоге, потому что информация об акциях магазина не возвращается. * Если в заказе несколько единиц товаров, в параметрах возвращается суммарное значение. * Все суммы указаны в валюте магазина.  {% endnote %} 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**subsidy** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**cashback** | [**CurrencyValueDTO**](CurrencyValueDTO.md) |  | [optional] [default to undefined]
**vat** | [**OrderVatType**](OrderVatType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ItemPriceDTO } from './api';

const instance: ItemPriceDTO = {
    payment,
    subsidy,
    cashback,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
