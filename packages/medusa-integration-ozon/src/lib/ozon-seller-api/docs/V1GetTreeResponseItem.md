# V1GetTreeResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_category_id** | **number** | Идентификатор категории. | [optional] [default to undefined]
**category_name** | **string** | Название категории. | [optional] [default to undefined]
**children** | [**Array&lt;V1GetTreeResponseItem&gt;**](V1GetTreeResponseItem.md) | Дерево подкатегорий. | [optional] [default to undefined]
**disabled** | **boolean** | &#x60;true&#x60;, если в категории нельзя создавать товары. &#x60;false&#x60;, если можно.  | [optional] [default to undefined]
**type_id** | **number** | Идентификатор типа товара. | [optional] [default to undefined]
**type_name** | **string** | Название типа товара. | [optional] [default to undefined]

## Example

```typescript
import { V1GetTreeResponseItem } from './api';

const instance: V1GetTreeResponseItem = {
    description_category_id,
    category_name,
    children,
    disabled,
    type_id,
    type_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
