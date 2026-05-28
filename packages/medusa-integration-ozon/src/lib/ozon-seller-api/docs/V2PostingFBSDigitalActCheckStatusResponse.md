# V2PostingFBSDigitalActCheckStatusResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Номер задания на формирование документов. | [optional] [default to undefined]
**status** | **string** | Cтатус формирования документов: - &#x60;FORMING&#x60; — ещё не готовы, - &#x60;FORMED&#x60; — сформированы успешно, - &#x60;CONFIRMED&#x60; — подписаны Ozon, - &#x60;CONFIRMED_WITH_MISMATCH&#x60; — подписаны Ozon с расхождениями, - &#x60;NOT_FOUND&#x60; — документы не найдены, - &#x60;UNKNOWN_ERROR&#x60; — произошла ошибка.  | [optional] [default to undefined]

## Example

```typescript
import { V2PostingFBSDigitalActCheckStatusResponse } from './api';

const instance: V2PostingFBSDigitalActCheckStatusResponse = {
    id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
