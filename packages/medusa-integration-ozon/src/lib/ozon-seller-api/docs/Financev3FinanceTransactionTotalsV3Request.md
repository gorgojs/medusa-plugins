# Financev3FinanceTransactionTotalsV3Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**FinanceTransactionTotalsV3RequestDate**](FinanceTransactionTotalsV3RequestDate.md) |  | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**transaction_type** | **string** | Тип операции:  - &#x60;all&#x60; — все,  - &#x60;orders&#x60; — заказы,  - &#x60;returns&#x60; — возвраты и отмены,  - &#x60;services&#x60; — сервисные сборы,  - &#x60;compensation&#x60; — компенсация,  - &#x60;transferDelivery&#x60; — стоимость доставки,  - &#x60;other&#x60; — прочее.  | [optional] [default to undefined]

## Example

```typescript
import { Financev3FinanceTransactionTotalsV3Request } from './api';

const instance: Financev3FinanceTransactionTotalsV3Request = {
    date,
    posting_number,
    transaction_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
