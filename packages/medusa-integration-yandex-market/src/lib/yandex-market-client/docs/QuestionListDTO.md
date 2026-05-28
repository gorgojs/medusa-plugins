# QuestionListDTO

Список вопросов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**questions** | [**Array&lt;QuestionDTO&gt;**](QuestionDTO.md) | Список вопросов. | [default to undefined]
**paging** | [**PackagingForwardScrollingPagerDTO**](PackagingForwardScrollingPagerDTO.md) |  | [optional] [default to undefined]
**totalCount** | **number** | Общее количество вопросов, которые попадают под фильтр.  | [default to undefined]

## Example

```typescript
import { QuestionListDTO } from './api';

const instance: QuestionListDTO = {
    questions,
    paging,
    totalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
