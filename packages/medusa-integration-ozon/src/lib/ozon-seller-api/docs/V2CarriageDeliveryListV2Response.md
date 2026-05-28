# V2CarriageDeliveryListV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернулись не все методы доставки.  | [optional] [default to undefined]
**methods** | [**Array&lt;CarriageDeliveryListV2ResponseDeliveryMethod&gt;**](CarriageDeliveryListV2ResponseDeliveryMethod.md) | Список методов доставки. | [optional] [default to undefined]

## Example

```typescript
import { V2CarriageDeliveryListV2Response } from './api';

const instance: V2CarriageDeliveryListV2Response = {
    cursor,
    has_next,
    methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
