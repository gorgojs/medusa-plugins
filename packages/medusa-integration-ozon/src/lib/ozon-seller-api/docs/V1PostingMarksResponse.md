# V1PostingMarksResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invalid_postings** | **Array&lt;string&gt;** | Список неверных идентификаторов отправлений. | [optional] [default to undefined]
**issued_exemplars** | [**Array&lt;PostingMarksResponseIssuedExemplar&gt;**](PostingMarksResponseIssuedExemplar.md) | Список выданных покупателям экземпляров товаров. | [optional] [default to undefined]
**non_issued_exemplars** | [**Array&lt;PostingMarksResponseNonIssuedExemplar&gt;**](PostingMarksResponseNonIssuedExemplar.md) | Список не выданных покупателям экземпляров товаров. | [optional] [default to undefined]

## Example

```typescript
import { V1PostingMarksResponse } from './api';

const instance: V1PostingMarksResponse = {
    invalid_postings,
    issued_exemplars,
    non_issued_exemplars,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
