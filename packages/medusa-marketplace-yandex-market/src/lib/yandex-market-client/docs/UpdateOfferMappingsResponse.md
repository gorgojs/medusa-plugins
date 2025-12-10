# UpdateOfferMappingsResponse

Описывает проблемы, возникшие при сохранении товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**ApiResponseStatusType**](ApiResponseStatusType.md) |  | [default to undefined]
**results** | [**Array&lt;UpdateOfferMappingResultDTO&gt;**](UpdateOfferMappingResultDTO.md) | Ошибки и предупреждения, которые появились при обработке списка характеристик. Каждый элемент списка соответствует одному товару.  Если ошибок и предупреждений нет, поле не передается.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOfferMappingsResponse } from './api';

const instance: UpdateOfferMappingsResponse = {
    status,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
