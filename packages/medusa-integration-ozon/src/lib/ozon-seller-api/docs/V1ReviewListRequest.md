# V1ReviewListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_id** | **string** | Идентификатор последнего отзыва на странице. | [optional] [default to undefined]
**limit** | **number** | Количество отзывов в ответе. Минимум — 20, максимум — 100. | [default to undefined]
**sort_dir** | **string** | Направление сортировки: - &#x60;ASC&#x60; — по возрастанию, - &#x60;DESC&#x60; — по убыванию.  | [optional] [default to undefined]
**status** | **string** | Статусы отзывов: - &#x60;ALL&#x60; — все, - &#x60;UNPROCESSED&#x60; — необработанные, - &#x60;PROCESSED&#x60; — обработанные.  | [optional] [default to undefined]

## Example

```typescript
import { V1ReviewListRequest } from './api';

const instance: V1ReviewListRequest = {
    last_id,
    limit,
    sort_dir,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
