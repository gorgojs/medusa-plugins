# ListPostingCodesResponsePosting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_data** | [**Array&lt;PostingAdditionalDataItem&gt;**](PostingAdditionalDataItem.md) | Дополнительные параметры. | [optional] [default to undefined]
**analytics_data** | [**PostingPostingAnalyticsData**](PostingPostingAnalyticsData.md) |  | [optional] [default to undefined]
**cancel_reason_id** | **number** | Идентификатор причины отмены отправления. | [optional] [default to undefined]
**created_at** | **string** | Дата и время создания отправления. | [optional] [default to undefined]
**financial_data** | [**PostingPostingFinancialData**](PostingPostingFinancialData.md) |  | [optional] [default to undefined]
**in_process_at** | **string** | Дата и время начала обработки отправления. | [optional] [default to undefined]
**legal_info** | [**PostingLegalInfo**](PostingLegalInfo.md) |  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа, к которому относится отправление. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа, к которому относится отправление. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;PostingPostingProduct&gt;**](PostingPostingProduct.md) | Список товаров в отправлении. | [optional] [default to undefined]
**status** | **string** | Статус отправления: &#x60;awaiting_packaging&#x60; — ожидает упаковки.  | [optional] [default to undefined]
**waiting_deadline_for_digital_code** | **string** | Время, до которого нужно передать коды цифровых товаров. Передайте коды цифровых товаров с помощью метода [/v1/posting/digital/codes/upload](#operation/UploadPostingCodes). | [optional] [default to undefined]

## Example

```typescript
import { ListPostingCodesResponsePosting } from './api';

const instance: ListPostingCodesResponsePosting = {
    additional_data,
    analytics_data,
    cancel_reason_id,
    created_at,
    financial_data,
    in_process_at,
    legal_info,
    order_id,
    order_number,
    posting_number,
    products,
    status,
    waiting_deadline_for_digital_code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
