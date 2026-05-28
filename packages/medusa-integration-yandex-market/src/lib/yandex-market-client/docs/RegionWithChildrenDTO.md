# RegionWithChildrenDTO

Информация о родительском и дочерних регионах.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор региона. | [default to undefined]
**name** | **string** | Название региона. | [default to undefined]
**type** | [**RegionType**](RegionType.md) |  | [default to undefined]
**parent** | [**RegionDTO**](RegionDTO.md) |  | [optional] [default to undefined]
**children** | [**Array&lt;RegionDTO&gt;**](RegionDTO.md) | Дочерние регионы. | [optional] [default to undefined]

## Example

```typescript
import { RegionWithChildrenDTO } from './api';

const instance: RegionWithChildrenDTO = {
    id,
    name,
    type,
    parent,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
