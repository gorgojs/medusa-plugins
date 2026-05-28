# GetReturnsListResponseReturnsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplars** | [**Array&lt;GetReturnsListResponseExemplar&gt;**](GetReturnsListResponseExemplar.md) | Информация об экземплярах. | [optional] [default to undefined]
**id** | **number** | Идентификатор возврата. | [optional] [default to undefined]
**company_id** | **number** | Идентификатор продавца. | [optional] [default to undefined]
**return_reason_name** | **string** | Причина возврата или отмены. | [optional] [default to undefined]
**type** | **string** | Тип возврата:  &#x60;Cancellation&#x60; - отмена (до вручения); &#x60;FullReturn&#x60; - полный отказ при вручении; &#x60;PartialReturn&#x60; - частичный отказ при вручении; &#x60;ClientReturn&#x60; - клиентский возврат (после вручения); &#x60;Unknown&#x60; - технический возврат.  | [optional] [default to undefined]
**schema** | **string** | Схема возврата: &#x60;FBS&#x60;; &#x60;FBO&#x60;.  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа. | [optional] [default to undefined]
**place** | [**GetReturnsListResponsePlaceNow**](GetReturnsListResponsePlaceNow.md) |  | [optional] [default to undefined]
**target_place** | [**GetReturnsListResponsePlaceTarget**](GetReturnsListResponsePlaceTarget.md) |  | [optional] [default to undefined]
**storage** | [**GetReturnsListResponseStorage**](GetReturnsListResponseStorage.md) |  | [optional] [default to undefined]
**product** | [**GetReturnsListResponseProduct**](GetReturnsListResponseProduct.md) |  | [optional] [default to undefined]
**logistic** | [**GetReturnsListResponseLogistic**](GetReturnsListResponseLogistic.md) |  | [optional] [default to undefined]
**visual** | [**GetReturnsListResponseVisual**](GetReturnsListResponseVisual.md) |  | [optional] [default to undefined]
**additional_info** | [**GetReturnsListResponseAdditionalInfo**](GetReturnsListResponseAdditionalInfo.md) |  | [optional] [default to undefined]
**source_id** | **number** | Предыдущий идентификатор возврата. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**clearing_id** | **number** | Штрихкод изначального отправления. | [optional] [default to undefined]
**return_clearing_id** | **number** | Возвратный штрихкод изначального отправления. | [optional] [default to undefined]
**compensation_status** | [**GetReturnsListResponseCompensation**](GetReturnsListResponseCompensation.md) |  | [optional] [default to undefined]

## Example

```typescript
import { GetReturnsListResponseReturnsItem } from './api';

const instance: GetReturnsListResponseReturnsItem = {
    exemplars,
    id,
    company_id,
    return_reason_name,
    type,
    schema,
    order_id,
    order_number,
    place,
    target_place,
    storage,
    product,
    logistic,
    visual,
    additional_info,
    source_id,
    posting_number,
    clearing_id,
    return_clearing_id,
    compensation_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
