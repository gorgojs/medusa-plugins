# V2DeliveryMethodListV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**filter** | [**DeliveryMethodListV2RequestFilter**](DeliveryMethodListV2RequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество значений в ответе. | [default to undefined]
**sort_dir** | [**DeliveryMethodListV2RequestSortDirEnum**](DeliveryMethodListV2RequestSortDirEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V2DeliveryMethodListV2Request } from './api';

const instance: V2DeliveryMethodListV2Request = {
    cursor,
    filter,
    limit,
    sort_dir,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
