# V3FinanceCashFlowStatementListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**Financev3Period**](Financev3Period.md) |  | [default to undefined]
**page** | **number** | Номер страницы, возвращаемой в запросе. | [default to undefined]
**with_details** | **boolean** | &#x60;true&#x60;, если нужно добавить дополнительные параметры в ответ. | [optional] [default to undefined]
**page_size** | **number** | Количество элементов на странице. | [default to undefined]

## Example

```typescript
import { V3FinanceCashFlowStatementListRequest } from './api';

const instance: V3FinanceCashFlowStatementListRequest = {
    date,
    page,
    with_details,
    page_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
