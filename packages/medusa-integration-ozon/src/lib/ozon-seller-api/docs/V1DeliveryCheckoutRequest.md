# V1DeliveryCheckoutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer_phone** | **string** | Номер телефона покупателя. | [optional] [default to undefined]
**delivery_schema** | [**V2DeliveryCheckoutRequestV2DeliverySchemaEnum**](V2DeliveryCheckoutRequestV2DeliverySchemaEnum.md) |  | [optional] [default to undefined]
**delivery_type** | [**V1DeliveryCheckoutRequestDeliveryType**](V1DeliveryCheckoutRequestDeliveryType.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;V1DeliveryCheckoutRequestItem&gt;**](V1DeliveryCheckoutRequestItem.md) | Информация о товарах. | [optional] [default to undefined]

## Example

```typescript
import { V1DeliveryCheckoutRequest } from './api';

const instance: V1DeliveryCheckoutRequest = {
    buyer_phone,
    delivery_schema,
    delivery_type,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
