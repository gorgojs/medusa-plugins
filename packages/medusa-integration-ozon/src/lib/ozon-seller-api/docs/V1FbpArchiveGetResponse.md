# V1FbpArchiveGetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**act_file_uuid** | **string** | Идентификатор акта приёмки. | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор провалидированного списка товаров. | [optional] [default to undefined]
**bundle_sku_summary** | [**V1ArchiveSkuSummary**](V1ArchiveSkuSummary.md) |  | [optional] [default to undefined]
**business_flow_type_id** | **number** | Идентификатор типа поставки. | [optional] [default to undefined]
**created_date** | **string** | Дата и время создания заявки на поставку. | [optional] [default to undefined]
**decline_reason** | [**V1ArchiveDeclineReason**](V1ArchiveDeclineReason.md) |  | [optional] [default to undefined]
**delivery_details** | [**Fbpv1DeliveryDetails**](Fbpv1DeliveryDetails.md) |  | [optional] [default to undefined]
**has_act** | **boolean** | &#x60;true&#x60;, если был сформирован акт приёмки.  | [optional] [default to undefined]
**has_label** | **boolean** | &#x60;true&#x60;, если были сформированы этикетки.  | [optional] [default to undefined]
**id** | **number** | Номер записи в архиве. | [optional] [default to undefined]
**order_draft_id** | **number** | Идентификатор черновика поставки. | [optional] [default to undefined]
**order_number** | **string** | Идентификатор завершённой поставки. | [optional] [default to undefined]
**package_units_count** | **number** | Количество грузомест. | [optional] [default to undefined]
**receive_date** | **string** | Дата и время принятия поставки. | [optional] [default to undefined]
**row_version** | **number** | Идентификатор актуальной версии черновика. | [optional] [default to undefined]
**status** | [**V1ArchiveStatusEnum**](V1ArchiveStatusEnum.md) |  | [optional] [default to undefined]
**supply_id** | **string** | Идентификатор поставки. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpArchiveGetResponse } from './api';

const instance: V1FbpArchiveGetResponse = {
    act_file_uuid,
    bundle_id,
    bundle_sku_summary,
    business_flow_type_id,
    created_date,
    decline_reason,
    delivery_details,
    has_act,
    has_label,
    id,
    order_draft_id,
    order_number,
    package_units_count,
    receive_date,
    row_version,
    status,
    supply_id,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
