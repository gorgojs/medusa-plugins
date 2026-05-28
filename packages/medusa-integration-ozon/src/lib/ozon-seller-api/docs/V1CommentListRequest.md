# V1CommentListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Ограничение значений в ответе. Минимум — 20. Максимум — 100.  | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено с начала списка в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. | [optional] [default to undefined]
**review_id** | **string** | Идентификатор отзыва. | [default to undefined]
**sort_dir** | [**V1CommentSort**](V1CommentSort.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V1CommentListRequest } from './api';

const instance: V1CommentListRequest = {
    limit,
    offset,
    review_id,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
