# V1FbpOrderListResponseItem

Детали заказа.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attention_reasons** | [**Array&lt;V1OrderAttentionTypeEnum&gt;**](V1OrderAttentionTypeEnum.md) | Причины предупреждения: - &#x60;ORDER_ATTENTION_TYPE_UNSPECIFIED&#x60; — не определена; - &#x60;OLD&#x60; — устаревшая заявка; - &#x60;TIME_SLOT_EXPIRED&#x60; — таймслот просрочен.  | [optional] [default to undefined]
**bundle_summary** | [**ItemBundleSummary**](ItemBundleSummary.md) |  | [optional] [default to undefined]
**can_be_cancelled** | **boolean** | &#x60;true&#x60;, если заявку можно отменить.  | [optional] [default to undefined]
**cancellation_state** | [**V1CancellationState**](V1CancellationState.md) |  | [optional] [default to undefined]
**created_date** | **string** | Дата создания поставки. | [optional] [default to undefined]
**delivery_details** | [**Fbpv1DeliveryDetails**](Fbpv1DeliveryDetails.md) |  | [optional] [default to undefined]
**has_consignment_note** | **boolean** | &#x60;true&#x60;, если есть подписанные документы.  | [optional] [default to undefined]
**has_label** | **boolean** | &#x60;true&#x60;, если есть этикетки.  | [optional] [default to undefined]
**id** | **number** | Идентификатор заявки на поставку. | [optional] [default to undefined]
**locked** | **boolean** | &#x60;true&#x60;, если нельзя редактировать поставку.  | [optional] [default to undefined]
**order_number** | **string** | Номер поставки. | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**receive_date** | **string** | Дата и время принятия поставки. | [optional] [default to undefined]
**status** | [**V1OrderStatusEnum**](V1OrderStatusEnum.md) |  | [optional] [default to undefined]
**supply_id** | **string** | Идентификатор поставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpOrderListResponseItem } from './api';

const instance: V1FbpOrderListResponseItem = {
    attention_reasons,
    bundle_summary,
    can_be_cancelled,
    cancellation_state,
    created_date,
    delivery_details,
    has_consignment_note,
    has_label,
    id,
    locked,
    order_number,
    package_units_count,
    receive_date,
    status,
    supply_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
