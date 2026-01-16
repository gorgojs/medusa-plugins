# ModelFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64** | **string** | Файл, закодированный в base64 строку. Обязательно, если не заполнено поле url | [optional] [default to undefined]
**url** | **string** | Ссылка на файл. Обязательно, если не заполнено поле base64 | [optional] [default to undefined]
**type** | **string** | Тип файла | [optional] [default to undefined]

## Example

```typescript
import { ModelFile } from './api';

const instance: ModelFile = {
    base64,
    url,
    type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
