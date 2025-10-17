# SupplierTaskMetadataBuffer

Response data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uploadID** | **number** | Upload ID | [optional] [default to undefined]
**status** | **number** | Upload status: &#x60;1&#x60; — processing  | [optional] [default to undefined]
**uploadDate** | **string** | Date and time of the upload creation | [optional] [default to undefined]
**activationDate** | **string** | Date and time when the upload processing was started | [optional] [default to undefined]
**overAllGoodsNumber** | **number** | Total number of products | [optional] [default to undefined]
**successGoodsNumber** | **number** | Number products without errors (&#x60;0&#x60; because the upload is processing) | [optional] [default to undefined]

## Example

```typescript
import { SupplierTaskMetadataBuffer } from './api';

const instance: SupplierTaskMetadataBuffer = {
    uploadID,
    status,
    uploadDate,
    activationDate,
    overAllGoodsNumber,
    successGoodsNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
