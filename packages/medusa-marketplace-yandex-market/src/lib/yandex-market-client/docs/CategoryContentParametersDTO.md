# CategoryContentParametersDTO

Информация о параметрах категории.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryId** | **number** | Идентификатор категории на Маркете.  При изменении категории убедитесь, что характеристики товара и их значения в параметре &#x60;parameterValues&#x60; вы передаете для новой категории.  Список категорий Маркета можно получить с помощью запроса  [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md).  | [default to undefined]
**parameters** | [**Array&lt;CategoryParameterDTO&gt;**](CategoryParameterDTO.md) | Список характеристик. | [optional] [default to undefined]

## Example

```typescript
import { CategoryContentParametersDTO } from './api';

const instance: CategoryContentParametersDTO = {
    categoryId,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
