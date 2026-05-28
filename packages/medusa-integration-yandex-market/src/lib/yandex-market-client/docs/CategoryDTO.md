# CategoryDTO

Информация о категории.  Категория считается листовой, если у нее нет дочерних категорий. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор категории. | [default to undefined]
**name** | **string** | Название категории. | [default to undefined]
**children** | [**Array&lt;CategoryDTO&gt;**](CategoryDTO.md) | Дочерние категории. | [optional] [default to undefined]

## Example

```typescript
import { CategoryDTO } from './api';

const instance: CategoryDTO = {
    id,
    name,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
