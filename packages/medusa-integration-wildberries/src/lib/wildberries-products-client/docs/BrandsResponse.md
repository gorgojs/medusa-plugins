# BrandsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brands** | [**Array&lt;BrandsResponseBrandsInner&gt;**](BrandsResponseBrandsInner.md) |  | [default to undefined]
**next** | **number** | Pagination parameter. Specify this value in the request to get the next batch. If the field is missing, you received all the data | [optional] [default to undefined]
**total** | **number** | Total number of brands of the subject | [default to undefined]

## Example

```typescript
import { BrandsResponse } from './api';

const instance: BrandsResponse = {
    brands,
    next,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
