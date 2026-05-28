# ReturnsRfbsGetResponseReturns

Данные о заявке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_actions** | [**Array&lt;ReturnsRfbsGetV2ResponseAvailableAction&gt;**](ReturnsRfbsGetV2ResponseAvailableAction.md) | Данные о доступных действиях с заявкой. | [optional] [default to undefined]
**client_name** | **string** | Имя покупателя. | [optional] [default to undefined]
**client_photo** | **Array&lt;string&gt;** | Ссылки на фотографии товара. | [optional] [default to undefined]
**client_return_method_type** | [**ReturnsRfbsGetV2ResponseClientReturnMethodType**](ReturnsRfbsGetV2ResponseClientReturnMethodType.md) |  | [optional] [default to undefined]
**comment** | **string** | Комментарий покупателя. | [optional] [default to undefined]
**created_at** | **string** | Дата создания заявки. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**product** | [**V2Product**](V2Product.md) |  | [optional] [default to undefined]
**rejection_comment** | **string** | Комментарий об отклонении заявки. | [optional] [default to undefined]
**rejection_reason** | [**Array&lt;ReturnsRfbsGetV2ResponseRejectionReason&gt;**](ReturnsRfbsGetV2ResponseRejectionReason.md) | Данные о причине отклонения заявки. | [optional] [default to undefined]
**return_method_description** | **string** | Способ возврата товара. | [optional] [default to undefined]
**return_number** | **string** | Номер заявки на возврат. | [optional] [default to undefined]
**return_reason** | [**ReturnsRfbsGetV2ResponseReturnReason**](ReturnsRfbsGetV2ResponseReturnReason.md) |  | [optional] [default to undefined]
**ru_post_tracking_number** | **string** | Трек-номер почтового отправления. | [optional] [default to undefined]
**state** | [**V2ReturnsRfbsGetV2ResponseState**](V2ReturnsRfbsGetV2ResponseState.md) |  | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { ReturnsRfbsGetResponseReturns } from './api';

const instance: ReturnsRfbsGetResponseReturns = {
    available_actions,
    client_name,
    client_photo,
    client_return_method_type,
    comment,
    created_at,
    order_number,
    posting_number,
    product,
    rejection_comment,
    rejection_reason,
    return_method_description,
    return_number,
    return_reason,
    ru_post_tracking_number,
    state,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
