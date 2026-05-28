# V1OrderCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer** | [**OrderCreateRequestBuyer**](OrderCreateRequestBuyer.md) |  | [default to undefined]
**delivery** | [**OrderCreateRequestDelivery**](OrderCreateRequestDelivery.md) |  | [default to undefined]
**delivery_schema** | [**OrderCreateRequestV2DeliverySchemaEnum**](OrderCreateRequestV2DeliverySchemaEnum.md) |  | [optional] [default to undefined]
**recipient** | [**OrderCreateRequestRecipient**](OrderCreateRequestRecipient.md) |  | [default to undefined]
**splits** | [**Array&lt;OrderCreateRequestSplit&gt;**](OrderCreateRequestSplit.md) | Информация об отправлениях в заказе. | [default to undefined]

## Example

```typescript
import { V1OrderCreateRequest } from './api';

const instance: V1OrderCreateRequest = {
    buyer,
    delivery,
    delivery_schema,
    recipient,
    splits,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
