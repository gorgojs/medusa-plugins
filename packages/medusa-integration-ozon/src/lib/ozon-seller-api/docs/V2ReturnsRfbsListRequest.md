# V2ReturnsRfbsListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**V2ReturnsRfbsFilter**](V2ReturnsRfbsFilter.md) |  | [optional] [default to undefined]
**last_id** | **number** | Идентификатор последнего значения на странице — &#x60;return_id&#x60;. Оставьте это поле пустым при выполнении первого запроса. | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. | [default to undefined]

## Example

```typescript
import { V2ReturnsRfbsListRequest } from './api';

const instance: V2ReturnsRfbsListRequest = {
    filter,
    last_id,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
