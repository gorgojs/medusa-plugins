# GetProductRatingBySkuResponseProductRating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **number** | Идентификатор товара на Ozon. | [optional] [default to undefined]
**rating** | **number** | Контент-рейтинг товара: от 0 до 100.  | [optional] [default to undefined]
**groups** | [**Array&lt;GetProductRatingBySkuResponseRatingGroup&gt;**](GetProductRatingBySkuResponseRatingGroup.md) | Группы характеристик, из которых складывается контент-рейтинг. | [optional] [default to undefined]

## Example

```typescript
import { GetProductRatingBySkuResponseProductRating } from './api';

const instance: GetProductRatingBySkuResponseProductRating = {
    sku,
    rating,
    groups,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
