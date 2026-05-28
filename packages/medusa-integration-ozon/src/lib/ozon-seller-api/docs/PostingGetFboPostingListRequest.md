# PostingGetFboPostingListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dir** | **string** | Направление сортировки:   - &#x60;ASC&#x60; — по возрастанию,   - &#x60;DESC&#x60; — по убыванию.  | [optional] [default to undefined]
**filter** | [**PostingGetFboPostingListRequestFilter**](PostingGetFboPostingListRequestFilter.md) |  | [default to undefined]
**limit** | **number** | Количество значений в ответе:   - максимум — 1000,   - минимум — 1.  | [default to undefined]
**offset** | **number** | Количество элементов, которое будет пропущено в ответе. Например, если &#x60;offset &#x3D; 10&#x60;, то ответ начнётся с 11-го найденного элемента. Максимальное значение — 20000. | [optional] [default to undefined]
**translit** | **boolean** | Если включена транслитерация адреса из кириллицы в латиницу — &#x60;true&#x60;. | [optional] [default to undefined]
**_with** | [**PostingFboPostingWithParams**](PostingFboPostingWithParams.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PostingGetFboPostingListRequest } from './api';

const instance: PostingGetFboPostingListRequest = {
    dir,
    filter,
    limit,
    offset,
    translit,
    _with,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
