# V2CreateLabelBatchResponseResultTasks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **number** | Идентификатор задания на формирование этикеток. В зависимости от типа этикетки передайте значение в метод [/v1/posting/fbs/package-label/get](#operation/PostingAPI_GetLabelBatch). | [optional] [default to undefined]
**task_type** | **string** | Тип задания на формирование этикеток: - &#x60;big_label&#x60; — для обычной этикетки, - &#x60;small_label&#x60; — для маленькой этикетки.  | [optional] [default to undefined]

## Example

```typescript
import { V2CreateLabelBatchResponseResultTasks } from './api';

const instance: V2CreateLabelBatchResponseResultTasks = {
    task_id,
    task_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
