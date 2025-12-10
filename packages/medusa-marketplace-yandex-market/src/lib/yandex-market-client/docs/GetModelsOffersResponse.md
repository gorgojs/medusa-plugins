# GetModelsOffersResponse

Ответ на запрос списка предложений для моделей.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**Array&lt;EnrichedModelDTO&gt;**](EnrichedModelDTO.md) | Список моделей товаров. | [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]
**regionId** | **number** | Идентификатор региона, для которого выводится информация о предложениях модели (доставляемых в этот регион).  Информацию о регионе по идентификатору можно получить с помощью запроса [GET v2/regions/{regionId}](../../reference/regions/searchRegionsById.md).  | [optional] [default to undefined]

## Example

```typescript
import { GetModelsOffersResponse } from './api';

const instance: GetModelsOffersResponse = {
    models,
    currency,
    regionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
