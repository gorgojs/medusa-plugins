# GenerateSalesGeographyRequest

Данные, необходимые для генерации отчета. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessId** | **number** | Идентификатор кабинета. | [default to undefined]
**dateFrom** | **string** | Начало периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**dateTo** | **string** | Конец периода, включительно.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]
**categoryIds** | **Set&lt;number&gt;** | Идентификаторы категорий. | [optional] [default to undefined]
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров. | [optional] [default to undefined]

## Example

```typescript
import { GenerateSalesGeographyRequest } from './api';

const instance: GenerateSalesGeographyRequest = {
    businessId,
    dateFrom,
    dateTo,
    categoryIds,
    offerIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
