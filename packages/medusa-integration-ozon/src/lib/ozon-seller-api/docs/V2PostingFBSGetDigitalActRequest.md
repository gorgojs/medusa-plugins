# V2PostingFBSGetDigitalActRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Номер задания на формирование документов (также идентификатор перевозки) из метода [POST /v2/posting/fbs/act/create](#operation/PostingAPI_PostingFBSActCreate). | [default to undefined]
**doc_type** | **any** | Тип электронного документа: - &#x60;act_of_acceptance&#x60; — лист отгрузки, - &#x60;act_of_mismatch&#x60; — акт о расхождениях, - &#x60;act_of_excess&#x60; — акт об излишках, - &#x60;waybill&#x60; — транспортная накладная.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSGetDigitalActRequest } from './api';

const instance: V2PostingFBSGetDigitalActRequest = {
    id,
    doc_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
