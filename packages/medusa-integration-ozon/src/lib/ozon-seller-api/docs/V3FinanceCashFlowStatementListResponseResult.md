# V3FinanceCashFlowStatementListResponseResult

Результат работы метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cash_flows** | [**Array&lt;FinanceCashFlowStatementListResponseCashFlow&gt;**](FinanceCashFlowStatementListResponseCashFlow.md) | Список отчётов. | [optional] [default to undefined]
**details** | [**FinanceCashFlowStatementListResponseDetails**](FinanceCashFlowStatementListResponseDetails.md) |  | [optional] [default to undefined]
**page_count** | **number** | Количество страниц с отчётами. | [optional] [default to undefined]

## Example

```typescript
import { V3FinanceCashFlowStatementListResponseResult } from './api';

const instance: V3FinanceCashFlowStatementListResponseResult = {
    cash_flows,
    details,
    page_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
