# V1ListDropOffPointsForCreateFBSWarehouseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | [**V1ListDropOffPointsForCreateFBSWarehouseRequestCoordinates**](V1ListDropOffPointsForCreateFBSWarehouseRequestCoordinates.md) |  | [optional] [default to undefined]
**country_code** | **string** | Код страны в формате ISO 2.  | [default to undefined]
**is_kgt** | **boolean** | &#x60;true&#x60;, если товар крупногабаритный.  | [default to undefined]
**search** | [**ListDropOffPointsForCreateFBSWarehouseRequestSearch**](ListDropOffPointsForCreateFBSWarehouseRequestSearch.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1ListDropOffPointsForCreateFBSWarehouseRequest } from './api';

const instance: V1ListDropOffPointsForCreateFBSWarehouseRequest = {
    coordinates,
    country_code,
    is_kgt,
    search,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
