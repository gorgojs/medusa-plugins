# GetOfferRecommendationsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offerIds** | **Set&lt;string&gt;** | Идентификаторы товаров, информация о которых нужна. ⚠️ Не используйте это поле одновременно с остальными фильтрами. Если вы хотите воспользоваться фильтрами, оставьте поле пустым. | [optional] [default to undefined]
**competitivenessFilter** | [**PriceCompetitivenessType**](PriceCompetitivenessType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetOfferRecommendationsRequest } from './api';

const instance: GetOfferRecommendationsRequest = {
    offerIds,
    competitivenessFilter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
