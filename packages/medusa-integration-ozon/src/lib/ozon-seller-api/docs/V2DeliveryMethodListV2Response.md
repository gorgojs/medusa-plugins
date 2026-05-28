# V2DeliveryMethodListV2Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **string** | Указатель для выборки следующих данных. | [optional] [default to undefined]
**has_next** | **boolean** | &#x60;true&#x60;, если в ответе вернули не все методы доставки.  | [optional] [default to undefined]
**delivery_methods** | [**Array&lt;DeliveryMethodListV2ResponseDeliveryMethod&gt;**](DeliveryMethodListV2ResponseDeliveryMethod.md) | Методы доставки. | [optional] [default to undefined]

## Example

```typescript
import { V2DeliveryMethodListV2Response } from './api';

const instance: V2DeliveryMethodListV2Response = {
    cursor,
    has_next,
    delivery_methods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
