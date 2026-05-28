# Productv3GetProductListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Productv3GetProductListRequestFilter**](Productv3GetProductListRequestFilter.md) |  | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице. При первом запросе оставьте это поле пустым.  Чтобы получить следующие значения, укажите &#x60;last_id&#x60; из ответа предыдущего запроса.  | [optional] [default to undefined]
**limit** | **number** | Количество значений на странице. Минимум — 1, максимум — 1000. | [optional] [default to undefined]

## Example

```typescript
import { Productv3GetProductListRequest } from './api';

const instance: Productv3GetProductListRequest = {
    filter,
    last_id,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
