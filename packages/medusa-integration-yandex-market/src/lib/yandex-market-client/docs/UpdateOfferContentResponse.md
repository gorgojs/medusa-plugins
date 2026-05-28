# UpdateOfferContentResponse

Описывает проблемы, которые появились при сохранении товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**results** | [**Array&lt;UpdateOfferContentResultDTO&gt;**](UpdateOfferContentResultDTO.md) | Ошибки и предупреждения, которые появились при обработке переданных значений. Каждый элемент списка соответствует одному товару.  Если ошибок и предупреждений нет, поле не передается.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOfferContentResponse } from './api';

const instance: UpdateOfferContentResponse = {
    status,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
