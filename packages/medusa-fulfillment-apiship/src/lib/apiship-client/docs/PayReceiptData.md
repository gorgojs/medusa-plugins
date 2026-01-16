# PayReceiptData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientNumber** | **string** | Номер заказа в системе заказчика | [optional] [default to undefined]
**printNumber** | **string** | Номер заказа для печати на бумажном чеке | [optional] [default to undefined]
**type** | **string** | Тип чека sale - приход или return - возврат | [default to undefined]
**payType** | **string** | Тип оплаты чека cash - наличные или card - банковская карта | [default to undefined]
**totalPrice** | **number** | Итоговая цена в чеке | [default to undefined]
**email** | **string** | E-mail покупателя | [optional] [default to undefined]
**phone** | **string** | Телефон покупателя | [optional] [default to undefined]

## Example

```typescript
import { PayReceiptData } from './api';

const instance: PayReceiptData = {
    clientNumber,
    printNumber,
    type,
    payType,
    totalPrice,
    email,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
