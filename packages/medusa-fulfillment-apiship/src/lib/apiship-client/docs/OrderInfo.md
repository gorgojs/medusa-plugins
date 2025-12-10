# OrderInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | [**OrderInfoOrderId**](OrderInfoOrderId.md) |  | [optional] [default to undefined]
**providerKey** | **string** | Код службы доставки | [optional] [default to undefined]
**providerNumber** | **string** | Номер заказа в системе службы доставки | [optional] [default to undefined]
**returnProviderNumber** | **string** | Номер возврата заказа в системе службы доставки | [optional] [default to undefined]
**additionalProviderNumber** | **string** | Дополнительный номер заказа в системе службы доставки | [optional] [default to undefined]
**barcode** | **string** | Номер заказа для печати штрих-кода | [optional] [default to undefined]
**clientNumber** | **string** | Номер заказа в системе клиента | [optional] [default to undefined]
**trackingUrl** | **string** | Ссылка на отслеживание в системе СД | [optional] [default to undefined]

## Example

```typescript
import { OrderInfo } from './api';

const instance: OrderInfo = {
    orderId,
    providerKey,
    providerNumber,
    returnProviderNumber,
    additionalProviderNumber,
    barcode,
    clientNumber,
    trackingUrl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
