# FinanceCashFlowStatementListResponseDetailsOthers

Детализация.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название операции. Возможные значения:  - &#x60;MarketplaceRedistributionOfAcquiringOperation&#x60; — оплата эквайринга,  - &#x60;MarketplaceSellerCompensationLossOfGoodsOperation&#x60; — компенсация за уничтоженный товар,  - &#x60;MarketplaceSellerCorrectionOperation&#x60; — корректировка стоимости услуг,  - &#x60;OperationCorrectionSeller&#x60; — инвентаризация взаиморасчётов,  - &#x60;OperationMarketplaceWithHoldingForUndeliverableGoods&#x60; — компенсация за недовложение товаров,  - &#x60;OperationClaim&#x60; — начисления по претензиям.  | [optional] [default to undefined]
**price** | **number** | Сумма по операции. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseDetailsOthers } from './api';

const instance: FinanceCashFlowStatementListResponseDetailsOthers = {
    name,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
