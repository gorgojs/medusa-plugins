# FinanceCashFlowStatementListResponseCashFlow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | [**V3FinanceCashFlowStatementListResponsePeriod**](V3FinanceCashFlowStatementListResponsePeriod.md) |  | [optional] [default to undefined]
**orders_amount** | **number** | Сумма цен реализованных товаров. | [optional] [default to undefined]
**returns_amount** | **number** | Сумма цен возвращённых товаров. | [optional] [default to undefined]
**commission_amount** | **number** | Комиссия Ozon за реализацию товаров. | [optional] [default to undefined]
**services_amount** | **number** | Сумма дополнительных услуг. | [optional] [default to undefined]
**item_delivery_and_return_amount** | **number** | Сумма услуг логистики. | [optional] [default to undefined]
**currency_code** | **string** | Код валюты, в которой рассчитываются комиссии. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseCashFlow } from './api';

const instance: FinanceCashFlowStatementListResponseCashFlow = {
    period,
    orders_amount,
    returns_amount,
    commission_amount,
    services_amount,
    item_delivery_and_return_amount,
    currency_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
