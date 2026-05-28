# GetProductInfoListResponseAvailability


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability** | **string** | Доступность товара. | [optional] [default to undefined]
**reasons** | [**Array&lt;AvailabilityReason&gt;**](AvailabilityReason.md) | Причина, почему товар скрыт. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара. | [optional] [default to undefined]
**source** | **string** | Ссылка на источник. | [optional] [default to undefined]

## Example

```typescript
import { GetProductInfoListResponseAvailability } from './api';

const instance: GetProductInfoListResponseAvailability = {
    availability,
    reasons,
    sku,
    source,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
