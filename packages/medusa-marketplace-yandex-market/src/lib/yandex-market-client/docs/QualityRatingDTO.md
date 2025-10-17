# QualityRatingDTO

Информация об индексе качества.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating** | **number** | Значение индекса качества. | [default to undefined]
**calculationDate** | **string** | Дата вычисления.  Формат даты: &#x60;ГГГГ‑ММ‑ДД&#x60;.  | [default to undefined]
**components** | [**Array&lt;QualityRatingComponentDTO&gt;**](QualityRatingComponentDTO.md) | Составляющие индекса качества. | [default to undefined]

## Example

```typescript
import { QualityRatingDTO } from './api';

const instance: QualityRatingDTO = {
    rating,
    calculationDate,
    components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
