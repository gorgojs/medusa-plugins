# OrderAddress

Exact buyer\'s address for delivery, if applicable. Some of the fields may be empty due to the specifics of the address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fullAddress** | **string** | Delivery address | [optional] [default to undefined]
**longitude** | **number** | Longitude | [optional] [default to undefined]
**latitude** | **number** | Latitude | [optional] [default to undefined]

## Example

```typescript
import { OrderAddress } from './api';

const instance: OrderAddress = {
    fullAddress,
    longitude,
    latitude,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
