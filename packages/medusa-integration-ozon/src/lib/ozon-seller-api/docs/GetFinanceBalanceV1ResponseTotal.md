# GetFinanceBalanceV1ResponseTotal

Общие данные по балансу за период.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accrued** | [**V1GetFinanceBalanceV1ResponseAccruedMoney**](V1GetFinanceBalanceV1ResponseAccruedMoney.md) |  | [optional] [default to undefined]
**closing_balance** | [**V1GetFinanceBalanceV1ResponseClosingBalanceMoney**](V1GetFinanceBalanceV1ResponseClosingBalanceMoney.md) |  | [optional] [default to undefined]
**opening_balance** | [**V1GetFinanceBalanceV1ResponseOpeningBalanceMoney**](V1GetFinanceBalanceV1ResponseOpeningBalanceMoney.md) |  | [optional] [default to undefined]
**payments** | [**Array&lt;V1GetFinanceBalanceV1ResponsePaymentsMoney&gt;**](V1GetFinanceBalanceV1ResponsePaymentsMoney.md) | Выплаты за период. | [optional] [default to undefined]

## Example

```typescript
import { GetFinanceBalanceV1ResponseTotal } from './api';

const instance: GetFinanceBalanceV1ResponseTotal = {
    accrued,
    closing_balance,
    opening_balance,
    payments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
