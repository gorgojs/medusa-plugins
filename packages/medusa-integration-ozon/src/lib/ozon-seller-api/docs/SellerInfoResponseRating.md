# SellerInfoResponseRating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | [**RatingValueCurrent**](RatingValueCurrent.md) |  | [optional] [default to undefined]
**name** | **string** | Название рейтинга. | [optional] [default to undefined]
**past_value** | [**RatingValuePast**](RatingValuePast.md) |  | [optional] [default to undefined]
**rating** | **string** | Название рейтинга в системе. | [optional] [default to undefined]
**status** | [**RatingStatusEnum**](RatingStatusEnum.md) |  | [optional] [default to undefined]
**value_type** | [**SellerInfoResponseRatingTypeEnum**](SellerInfoResponseRatingTypeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SellerInfoResponseRating } from './api';

const instance: SellerInfoResponseRating = {
    current_value,
    name,
    past_value,
    rating,
    status,
    value_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
