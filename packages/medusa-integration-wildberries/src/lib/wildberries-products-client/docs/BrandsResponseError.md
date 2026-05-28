# BrandsResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | Error title | [default to undefined]
**detail** | **string** | Error details | [default to undefined]
**origin** | **string** | WB internal service ID | [default to undefined]
**requestId** | **string** | Unique request ID | [default to undefined]
**errors** | [**Array&lt;BrandsResponseErrorErrorsInner&gt;**](BrandsResponseErrorErrorsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BrandsResponseError } from './api';

const instance: BrandsResponseError = {
    title,
    detail,
    origin,
    requestId,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
