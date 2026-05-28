# V1FbpArchiveListResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**act_file_uuid** | **string** | Идентификатор акта приёмки. | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**bundle_sku_summary** | [**V1ArchiveSkuSummary**](V1ArchiveSkuSummary.md) |  | [optional] [default to undefined]
**created_date** | **string** | Дата создания заявки на поставку. | [optional] [default to undefined]
**decline_reason** | [**V1ArchiveDeclineReason**](V1ArchiveDeclineReason.md) |  | [optional] [default to undefined]
**delivery_details** | [**Fbpv1DeliveryDetails**](Fbpv1DeliveryDetails.md) |  | [optional] [default to undefined]
**external_order_id** | **string** | Идентификатор завершённой поставки у партнёрского склада со своей системой учёта. | [optional] [default to undefined]
**has_act** | **boolean** | &#x60;true&#x60;, если был сформирован акт приёмки.  | [optional] [default to undefined]
**has_label** | **boolean** | &#x60;true&#x60;, если были сформированы этикетки.  | [optional] [default to undefined]
**order_draft_id** | **number** | Идентификатор черновика поставки. | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**receive_date** | **string** | Дата и время принятия поставки. | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]
**status** | [**V1ArchiveStatusEnum**](V1ArchiveStatusEnum.md) |  | [optional] [default to undefined]
**supply_id** | **string** | Идентификатор поставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]
**whc_order_id** | **number** | Идентификатор завершённой поставки у партнёрского склада. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpArchiveListResponseItem } from './api';

const instance: V1FbpArchiveListResponseItem = {
    act_file_uuid,
    bundle_id,
    bundle_sku_summary,
    created_date,
    decline_reason,
    delivery_details,
    external_order_id,
    has_act,
    has_label,
    order_draft_id,
    package_units_count,
    receive_date,
    row_version,
    status,
    supply_id,
    warehouse_id,
    whc_order_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
