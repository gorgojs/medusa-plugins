# GetRegionByIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**regions** | [**Array&lt;RegionDTO&gt;**](RegionDTO.md) | Регион доставки.  {% note warning %}  В массиве всегда возвращается один регион, используйте поле &#x60;region&#x60; вместо него.  {% endnote %}  | [optional] [default to undefined]
**region** | [**RegionDTO**](RegionDTO.md) |  | [default to undefined]

## Example

```typescript
import { GetRegionByIdResponse } from './api';

const instance: GetRegionByIdResponse = {
    regions,
    region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
