# V1Rating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**danger_threshold** | **number** | Пороговое значение рейтинга, после которого продажи будут заблокированы. | [optional] [default to undefined]
**premium_threshold** | **number** | Пороговое значение рейтинга для участия в Premium-программе. | [optional] [default to undefined]
**rating** | **string** | Системное название рейтинга. | [optional] [default to undefined]
**values** | [**Array&lt;RatingValue&gt;**](RatingValue.md) | Список значений рейтинга. | [optional] [default to undefined]
**warning_threshold** | **number** | Пороговое значение рейтинга, после которого появится предупреждение о возможной блокировке. | [optional] [default to undefined]

## Example

```typescript
import { V1Rating } from './api';

const instance: V1Rating = {
    danger_threshold,
    premium_threshold,
    rating,
    values,
    warning_threshold,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
