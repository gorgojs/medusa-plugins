# ModelsErrorTableListPublicRespV2Item


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batchUUID** | **string** | Batch ID | [default to undefined]
**subjects** | [**{ [key: string]: ModelsErrorSubject; }**](ModelsErrorSubject.md) | Subjects. Layout by &#x60;vendorCodes&#x60; | [default to undefined]
**brands** | [**{ [key: string]: ModelsErrorBrand; }**](ModelsErrorBrand.md) | Brands. Layout by &#x60;vendorCodes&#x60; | [default to undefined]
**vendorCodes** | **Array&lt;string&gt;** | Seller\&#39;s articles | [default to undefined]
**errors** | **{ [key: string]: Array&lt;string&gt;; }** | Errors. Layout by &#x60;vendorCodes&#x60; | [default to undefined]

## Example

```typescript
import { ModelsErrorTableListPublicRespV2Item } from './api';

const instance: ModelsErrorTableListPublicRespV2Item = {
    batchUUID,
    subjects,
    brands,
    vendorCodes,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
