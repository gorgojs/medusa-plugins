# GetModelsResponse

Ответ на запрос информации о моделях.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**Array&lt;ModelDTO&gt;**](ModelDTO.md) | Список моделей товаров. | [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [optional] [default to undefined]
**regionId** | **number** | Идентификатор региона, для которого выводится информация о предложениях модели (доставляемых в этот регион).  Информацию о регионе по идентификатору можно получить с помощью запроса [GET v2/regions/{regionId}](../../reference/regions/searchRegionsById.md).  | [optional] [default to undefined]

## Example

```typescript
import { GetModelsResponse } from './api';

const instance: GetModelsResponse = {
    models,
    currency,
    regionId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
