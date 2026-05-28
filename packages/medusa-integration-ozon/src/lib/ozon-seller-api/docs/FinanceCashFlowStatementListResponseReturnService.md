# FinanceCashFlowStatementListResponseReturnService

Детализация.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название операции. Возможные значения:  - &#x60;MarketplaceServiceItemReturnAfterDelivToCustomer&#x60; — обработка возвратов,  - &#x60;MarketplaceServiceItemReturnPartGoodsCustomer&#x60; — обработка частичного невыкупа,  - &#x60;MarketplaceServiceItemReturnNotDelivToCustomer&#x60; — обработка отменённых и невостребованных товаров,  - &#x60;MarketplaceServiceItemReturnFlowLogistic&#x60; — обратная логистика.  | [optional] [default to undefined]
**price** | **number** | Сумма по операции. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseReturnService } from './api';

const instance: FinanceCashFlowStatementListResponseReturnService = {
    name,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
