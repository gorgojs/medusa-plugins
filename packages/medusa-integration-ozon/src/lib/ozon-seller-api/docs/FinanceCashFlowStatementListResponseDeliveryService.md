# FinanceCashFlowStatementListResponseDeliveryService

Детализация.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название операции. Возможные значения:  - &#x60;MarketplaceServiceItemDirectFlowLogisticSum&#x60; — логистика,  - &#x60;MarketplaceServiceItemDirectFlowLogisticDC&#x60; — логистика РЦ,  - &#x60;MarketplaceServiceItemDropoff&#x60; — обработка отправления Drop-off,  - &#x60;MarketplaceServiceItemDirectFlowTrans&#x60; — магистраль,  - &#x60;MarketplaceServiceDCFlowTrans&#x60; — магистраль РЦ,  - &#x60;MarketplaceServiceItemFulfillment&#x60; — сборка заказа,  - &#x60;MarketplaceServiceItemDelivToCustomer&#x60; — последняя миля.  | [optional] [default to undefined]
**price** | **number** | Сумма по операции. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseDeliveryService } from './api';

const instance: FinanceCashFlowStatementListResponseDeliveryService = {
    name,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
