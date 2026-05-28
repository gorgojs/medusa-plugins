# V4GetProductInfoStocksRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**filter** | [**V4GetProductInfoStocksRequestFilter**](V4GetProductInfoStocksRequestFilter.md) |  | [default to undefined]
**limit** | **number** | Количество значений на странице. Минимум — 1, максимум — 1000. | [default to undefined]

## Example

```typescript
import { V4GetProductInfoStocksRequest } from './api';

const instance: V4GetProductInfoStocksRequest = {
    cursor,
    filter,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
