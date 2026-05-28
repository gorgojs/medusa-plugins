# V1FbpDraftListResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **string** | Идентификатор списка провалидированных товаров. | [optional] [default to undefined]
**cancellation_state** | [**V1CancellationState**](V1CancellationState.md) |  | [optional] [default to undefined]
**created_at** | **string** | Дата создания черновика. | [optional] [default to undefined]
**deleted_at** | **string** | Дата удаления черновика. | [optional] [default to undefined]
**delivery_details** | [**V1fbpDeliveryDetails**](V1fbpDeliveryDetails.md) |  | [optional] [default to undefined]
**editable** | **boolean** | &#x60;true&#x60;, если черновик можно изменить.  | [optional] [default to undefined]
**id** | **number** | Идентификатор черновика. | [optional] [default to undefined]
**is_cancelable** | **boolean** | &#x60;true&#x60;, если черновик можно отменить.  | [optional] [default to undefined]
**is_deletable** | **boolean** | &#x60;true&#x60;, если черновик можно удалить.  | [optional] [default to undefined]
**locked** | **boolean** | &#x60;true&#x60;, если черновик заблокирован.  | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**status** | [**V1DraftStatusEnum**](V1DraftStatusEnum.md) |  | [optional] [default to undefined]
**supply_id** | **string** | Идентификатор поставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftListResponseItem } from './api';

const instance: V1FbpDraftListResponseItem = {
    bundle_id,
    cancellation_state,
    created_at,
    deleted_at,
    delivery_details,
    editable,
    id,
    is_cancelable,
    is_deletable,
    locked,
    package_units_count,
    status,
    supply_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
