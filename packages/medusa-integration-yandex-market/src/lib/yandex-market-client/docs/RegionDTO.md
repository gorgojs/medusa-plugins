# RegionDTO

Регион доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор региона. | [default to undefined]
**name** | **string** | Название региона. | [default to undefined]
**type** | [**RegionType**](RegionType.md) |  | [default to undefined]
**parent** | [**RegionDTO**](RegionDTO.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RegionDTO } from './api';

const instance: RegionDTO = {
    id,
    name,
    type,
    parent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
