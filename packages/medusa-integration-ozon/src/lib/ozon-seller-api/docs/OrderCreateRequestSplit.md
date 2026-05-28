# OrderCreateRequestSplit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method** | [**SplitDeliveryMethod**](SplitDeliveryMethod.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;SplitItem&gt;**](SplitItem.md) | Товары в отправлении. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { OrderCreateRequestSplit } from './api';

const instance: OrderCreateRequestSplit = {
    delivery_method,
    items,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
