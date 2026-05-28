# FinanceCashFlowStatementListResponseDetails

Детализированная информация.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**begin_balance_amount** | **number** | Баланс на начало периода. | [optional] [default to undefined]
**delivery** | [**DetailsDeliveryDetails**](DetailsDeliveryDetails.md) |  | [optional] [default to undefined]
**invoice_transfer** | **number** | Сумма к выплате за период. | [optional] [default to undefined]
**loan** | **number** | Перевод по договорам займа. | [optional] [default to undefined]
**payments** | [**DetailsPayment**](DetailsPayment.md) |  | [optional] [default to undefined]
**period** | [**V3FinanceCashFlowStatementListResponsePeriod**](V3FinanceCashFlowStatementListResponsePeriod.md) |  | [optional] [default to undefined]
**_return** | [**DetailsReturnDetails**](DetailsReturnDetails.md) |  | [optional] [default to undefined]
**rfbs** | [**DetailsRfbsDetails**](DetailsRfbsDetails.md) |  | [optional] [default to undefined]
**services** | [**DetailsService**](DetailsService.md) |  | [optional] [default to undefined]
**others** | [**DetailsOthers**](DetailsOthers.md) |  | [optional] [default to undefined]
**end_balance_amount** | **number** | Баланс на конец периода. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseDetails } from './api';

const instance: FinanceCashFlowStatementListResponseDetails = {
    begin_balance_amount,
    delivery,
    invoice_transfer,
    loan,
    payments,
    period,
    _return,
    rfbs,
    services,
    others,
    end_balance_amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
