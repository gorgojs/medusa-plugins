# PostingGetFboPostingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [default to undefined]
**translit** | **boolean** | Если включена транслитерация адреса из кириллицы в латиницу — &#x60;true&#x60;. | [optional] [default to undefined]
**_with** | [**PostingFboPostingWithParams**](PostingFboPostingWithParams.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostingGetFboPostingRequest } from './api';

const instance: PostingGetFboPostingRequest = {
    posting_number,
    translit,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
