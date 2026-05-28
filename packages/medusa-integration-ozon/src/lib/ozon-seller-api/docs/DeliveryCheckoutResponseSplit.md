# DeliveryCheckoutResponseSplit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method** | [**DeliveryCheckoutResponseSplitDeliveryMethod**](DeliveryCheckoutResponseSplitDeliveryMethod.md) |  | [optional] [default to undefined]
**delivery_schema** | [**DeliveryCheckoutResponseV2SplitDeliverySchemaEnum**](DeliveryCheckoutResponseV2SplitDeliverySchemaEnum.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;DeliveryCheckoutResponseSplitItem&gt;**](DeliveryCheckoutResponseSplitItem.md) | Информация о товарах. | [optional] [default to undefined]
**unavailable_reason** | [**DeliveryCheckoutResponseUnavailableReasonEnum**](DeliveryCheckoutResponseUnavailableReasonEnum.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { DeliveryCheckoutResponseSplit } from './api';

const instance: DeliveryCheckoutResponseSplit = {
    delivery_method,
    delivery_schema,
    items,
    unavailable_reason,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
