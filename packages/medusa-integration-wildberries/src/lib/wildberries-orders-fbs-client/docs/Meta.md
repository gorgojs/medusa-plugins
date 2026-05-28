# Meta

Assembly order metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imei** | [**MetaImei**](MetaImei.md) |  | [optional] [default to undefined]
**uin** | [**MetaUin**](MetaUin.md) |  | [optional] [default to undefined]
**gtin** | [**MetaGtin**](MetaGtin.md) |  | [optional] [default to undefined]
**sgtin** | [**MetaSgtin**](MetaSgtin.md) |  | [optional] [default to undefined]
**expiration** | [**MetaExpiration**](MetaExpiration.md) |  | [optional] [default to undefined]
**customsDeclaration** | [**MetaCustomsDeclaration**](MetaCustomsDeclaration.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Meta } from './api';

const instance: Meta = {
    imei,
    uin,
    gtin,
    sgtin,
    expiration,
    customsDeclaration,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
