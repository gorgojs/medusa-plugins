# V3DeliveryMethod

Метод доставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор способа доставки. | [optional] [default to undefined]
**name** | **string** | Название способа доставки. | [optional] [default to undefined]
**tpl_provider** | **string** | Служба доставки. | [optional] [default to undefined]
**tpl_provider_id** | **number** | Идентификатор службы доставки. | [optional] [default to undefined]
**warehouse** | **string** | Название склада. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V3DeliveryMethod } from './api';

const instance: V3DeliveryMethod = {
    id,
    name,
    tpl_provider,
    tpl_provider_id,
    warehouse,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
