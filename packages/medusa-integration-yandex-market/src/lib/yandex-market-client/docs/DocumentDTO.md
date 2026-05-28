# DocumentDTO

Информация о документе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**OrderDocumentStatusType**](OrderDocumentStatusType.md) |  | [optional] [default to undefined]
**number** | **string** | Номер документа. | [optional] [default to undefined]
**date** | **string** | Дата создания документа.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { DocumentDTO } from './api';

const instance: DocumentDTO = {
    status,
    number,
    date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
