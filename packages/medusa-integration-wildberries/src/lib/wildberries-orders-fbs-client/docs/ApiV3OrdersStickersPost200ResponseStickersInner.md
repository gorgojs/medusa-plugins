# ApiV3OrdersStickersPost200ResponseStickersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Assembly order ID | [optional] [default to undefined]
**partA** | **number** | The first part of the sticker identifier (for printing the signature) | [optional] [default to undefined]
**partB** | **number** | The second part of the sticker identifier (for printing the signature) | [optional] [default to undefined]
**barcode** | **string** | The encoded value of the sticker | [optional] [default to undefined]
**file** | **string** | Base64 encoded representation of the sticker in a requested format | [optional] [default to undefined]

## Example

```typescript
import { ApiV3OrdersStickersPost200ResponseStickersInner } from './api';

const instance: ApiV3OrdersStickersPost200ResponseStickersInner = {
    orderId,
    partA,
    partB,
    barcode,
    file,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
