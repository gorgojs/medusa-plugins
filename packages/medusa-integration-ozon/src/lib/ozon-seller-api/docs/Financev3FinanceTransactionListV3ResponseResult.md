# Financev3FinanceTransactionListV3ResponseResult

Результаты запроса.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operations** | [**Array&lt;FinanceTransactionListV3ResponseOperation&gt;**](FinanceTransactionListV3ResponseOperation.md) | Информация об операциях. | [optional] [default to undefined]
**page_count** | **number** | Количество страниц. Если 0, страниц больше нет. | [optional] [default to undefined]
**row_count** | **number** | Количество транзакций на всех страницах. Если 0, транзакций больше нет. | [optional] [default to undefined]

## Example

```typescript
import { Financev3FinanceTransactionListV3ResponseResult } from './api';

const instance: Financev3FinanceTransactionListV3ResponseResult = {
    operations,
    page_count,
    row_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
