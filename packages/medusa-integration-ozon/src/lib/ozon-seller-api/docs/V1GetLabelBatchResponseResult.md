# V1GetLabelBatchResponseResult

Результат работы метода.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Код ошибки. | [optional] [default to undefined]
**file_url** | **string** | Ссылка на файл с этикетками. | [optional] [default to undefined]
**printed_postings_count** | **number** | Количество напечатанных этикеток. | [optional] [default to undefined]
**status** | **string** | Статус формирования этикеток: - &#x60;pending&#x60; — задание в очереди. - &#x60;in_progress&#x60; — формируются. - &#x60;completed&#x60; — файл с этикетками готов. - &#x60;error&#x60; — ошибка при создании файла.  | [optional] [default to undefined]
**unprinted_postings** | [**Array&lt;ResultUnprintedPosting&gt;**](ResultUnprintedPosting.md) | Информация об ошибках, из-за которых не получилось напечатать этикетки. | [optional] [default to undefined]
**unprinted_postings_count** | **number** | Количество этикеток, которые не получилось напечатать. | [optional] [default to undefined]

## Example

```typescript
import { V1GetLabelBatchResponseResult } from './api';

const instance: V1GetLabelBatchResponseResult = {
    error,
    file_url,
    printed_postings_count,
    status,
    unprinted_postings,
    unprinted_postings_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
