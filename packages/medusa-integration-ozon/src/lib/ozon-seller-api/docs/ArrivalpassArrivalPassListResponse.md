# ArrivalpassArrivalPassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arrival_passes** | [**Array&lt;ArrivalpassArrivalPassListResponseArrivalPass&gt;**](ArrivalpassArrivalPassListResponseArrivalPass.md) | Список пропусков для перевозки. | [optional] [default to undefined]
**cursor** | **string** | Указатель для выборки следующих данных. Если параметр пустой, данных больше нет.  | [optional] [default to undefined]

## Example

```typescript
import { ArrivalpassArrivalPassListResponse } from './api';

const instance: ArrivalpassArrivalPassListResponse = {
    arrival_passes,
    cursor,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
