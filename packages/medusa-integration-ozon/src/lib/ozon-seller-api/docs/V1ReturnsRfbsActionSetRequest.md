# V1ReturnsRfbsActionSetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **string** | Комментарий продавца.  Обязателен для &#x60;id: -1&#x60; и &#x60;id: -10&#x60;.  | [optional] [default to undefined]
**compensation_amount** | **number** | Сумма компенсации.  Обязательна для &#x60;id: 1020&#x60;.  | [optional] [default to undefined]
**id** | **number** | Идентификатор действия.   Получите доступные действия &#x60;returns.available_actions&#x60; методом [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2).  | [optional] [default to undefined]
**rejection_reason_id** | **number** | Идентификатор причины отмены.  Обязателен для &#x60;id: -1&#x60; и &#x60;id: -10&#x60;.  Получите возможные причины отмены &#x60;returns.rejection_reason&#x60; методом [/v2/returns/rfbs/get](#operation/RFBSReturnsAPI_ReturnsRfbsGetV2).  | [optional] [default to undefined]
**return_for_back_way** | **number** | Сумма, возмещаемая покупателю за пересылку товара.  Отрицательные значения приравниваются к &#x60;0&#x60;.  | [optional] [default to undefined]
**return_id** | **number** | Идентификатор заявки на возврат. | [optional] [default to undefined]

## Example

```typescript
import { V1ReturnsRfbsActionSetRequest } from './api';

const instance: V1ReturnsRfbsActionSetRequest = {
    comment,
    compensation_amount,
    id,
    rejection_reason_id,
    return_for_back_way,
    return_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
