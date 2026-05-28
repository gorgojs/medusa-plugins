# V2CarriageDeliveryListV2Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**filter** | [**CarriageDeliveryListV2RequestFilter**](CarriageDeliveryListV2RequestFilter.md) |  | [optional] [default to undefined]
**limit** | **number** | Количество значений на странице. | [default to undefined]

## Example

```typescript
import { V2CarriageDeliveryListV2Request } from './api';

const instance: V2CarriageDeliveryListV2Request = {
    cursor,
    filter,
    limit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
