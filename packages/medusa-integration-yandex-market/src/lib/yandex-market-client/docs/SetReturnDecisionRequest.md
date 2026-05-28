# SetReturnDecisionRequest

Решения по товару в возврате.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**returnItemId** | **number** | Идентификатор товара в возврате. | [default to undefined]
**decisionType** | [**ReturnRequestDecisionType**](ReturnRequestDecisionType.md) |  | [default to undefined]
**comment** | **string** | Комментарий к решению. Укажите:  * для &#x60;REFUND_MONEY_INCLUDING_SHIPMENT&#x60;— стоимость обратной пересылки.  * для &#x60;REPAIR&#x60; — когда вы устраните недостатки товара.  * для &#x60;DECLINE_REFUND&#x60; — причину отказа.  * для &#x60;OTHER_DECISION&#x60; — какое решение вы предлагаете.  | [optional] [default to undefined]

## Example

```typescript
import { SetReturnDecisionRequest } from './api';

const instance: SetReturnDecisionRequest = {
    returnItemId,
    decisionType,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
