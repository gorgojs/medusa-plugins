# ArrivalpassArrivalPassListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**filter** | [**ArrivalPassListRequestFilter**](ArrivalPassListRequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Ограничение по количеству записей в ответе. По умолчанию — 1000. Максимум — 1000.  | [default to undefined]

## Example

```typescript
import { ArrivalpassArrivalPassListRequest } from './api';

const instance: ArrivalpassArrivalPassListRequest = {
    cursor,
    filter,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
