# PriceDTO

Цена с указанием скидки, валюты и времени последнего обновления.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | Цена товара. | [optional] [default to undefined]
**discountBase** | **number** | Зачеркнутая цена.  Число должно быть целым. Вы можете указать цену со скидкой от 5 до 99%.  Передавайте этот параметр при каждом обновлении цены, если предоставляете скидку на товар.  | [optional] [default to undefined]
**currencyId** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]
**vat** | **number** | Идентификатор НДС, применяемый для товара:  * &#x60;2&#x60; — НДС 10%. Например, используется при реализации отдельных продовольственных и медицинских товаров. * &#x60;5&#x60; — НДС 0%. Например, используется при продаже товаров, вывезенных в таможенной процедуре экспорта, или при оказании услуг по международной перевозке товаров. * &#x60;6&#x60; — НДС не облагается, используется только для отдельных видов услуг. * &#x60;7&#x60; — НДС 20%. Основной НДС с 2019 года. * &#x60;10&#x60; — НДС 5%. НДС для упрощенной системы налогообложения (УСН). * &#x60;11&#x60; — НДС 7%. НДС для упрощенной системы налогообложения (УСН).  Если параметр не указан, используется НДС, установленный в кабинете.  **Для продавцов :no-translate[Market Yandex Go]** недоступна передача и получение НДС.  | [optional] [default to undefined]

## Example

```typescript
import { PriceDTO } from './api';

const instance: PriceDTO = {
    value,
    discountBase,
    currencyId,
    vat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
