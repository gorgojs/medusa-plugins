# SwaggerPublicErrorsCursorInput

Paginator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Number of batches in the response | [optional] [default to 100]
**updatedAt** | **string** | Date and time of generation of the last batch in the response to the previous request | [optional] [default to undefined]
**batchUUID** | **string** | The ID of the last batch in the response to the previous request | [optional] [default to undefined]

## Example

```typescript
import { SwaggerPublicErrorsCursorInput } from './api';

const instance: SwaggerPublicErrorsCursorInput = {
    limit,
    updatedAt,
    batchUUID,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
