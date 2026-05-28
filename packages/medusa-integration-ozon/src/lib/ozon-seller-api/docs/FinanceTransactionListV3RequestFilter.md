# FinanceTransactionListV3RequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date** | [**FilterPeriod**](FilterPeriod.md) |  | [optional] [default to undefined]
**operation_type** | **Array&lt;string&gt;** | Тип операции:   - &#x60;ClientReturnAgentOperation&#x60; — получение возврата, отмены, невыкупа от покупателя;   - &#x60;MarketplaceMarketingActionCostOperation&#x60; — услуги продвижения товаров;   - &#x60;MarketplaceSaleReviewsOperation&#x60; — приобретение отзывов на платформе;   - &#x60;MarketplaceSellerCompensationOperation&#x60; — прочие компенсации;   - &#x60;OperationAgentDeliveredToCustomer&#x60; — доставка покупателю;   - &#x60;OperationAgentDeliveredToCustomerCanceled&#x60; — доставка покупателю — исправленное начисление;   - &#x60;OperationAgentStornoDeliveredToCustomer&#x60; — доставка покупателю — отмена начисления;   - &#x60;OperationClaim&#x60; — начисление по претензии;   - &#x60;OperationCorrectionSeller&#x60; — инвентаризация взаиморасчетов;   - &#x60;OperationDefectiveWriteOff&#x60; — компенсация за повреждённый на складе товар;   - &#x60;OperationItemReturn&#x60; — доставка и обработка возврата, отмены, невыкупа;   - &#x60;OperationLackWriteOff&#x60; — компенсация за утерянный на складе товар;   - &#x60;OperationMarketplaceCrossDockServiceWriteOff&#x60; — доставка товаров на склад Ozon (кросс-докинг);   - &#x60;OperationMarketplaceServiceStorage&#x60; — услуга размещения товаров на складе;   - &#x60;OperationSetOff&#x60; — взаимозачёт с другими договорами контрагента;   - &#x60;MarketplaceSellerReexposureDeliveryReturnOperation&#x60; — перечисление за доставку от покупателя;   - &#x60;OperationReturnGoodsFBSofRMS&#x60; — доставка и обработка возврата, отмены, невыкупа;   - &#x60;ReturnAgentOperationRFBS&#x60; — возврат перечисления за доставку покупателю;   - &#x60;ItemAgentServiceStarsMembership&#x60; — вознаграждение за услугу [«Звёздные товары»](https://s.ozon.ru/e7NlR6b);   - &#x60;MarketplaceSellerShippingCompensationReturnOperation&#x60; — компенсация перечисления за доставку;   - &#x60;OperationMarketplaceServicePremiumCashback&#x60; — услуга продвижения Premium;   - &#x60;MarketplaceServicePremiumPromotion&#x60; — услуга продвижения Premium, фиксированная комиссия;   - &#x60;MarketplaceRedistributionOfAcquiringOperation&#x60; — оплата эквайринга;   - &#x60;MarketplaceReturnStorageServiceAtThePickupPointFbsItem&#x60; — краткосрочное размещение возврата FBS;   - &#x60;MarketplaceReturnStorageServiceInTheWarehouseFbsItem&#x60; — долгосрочное размещение возврата FBS;   - &#x60;MarketplaceServiceItemDeliveryKGT&#x60; — доставка КГТ;   - &#x60;MarketplaceServiceItemDirectFlowLogistic&#x60; — логистика;   - &#x60;MarketplaceServiceItemReturnFlowLogistic&#x60; — обратная логистика;   - &#x60;MarketplaceServicePremiumCashbackIndividualPoints&#x60; — услуга продвижения «Бонусы продавца»;   - &#x60;OperationMarketplaceWithHoldingForUndeliverableGoods&#x60; — удержание за недовложение товара;   - &#x60;MarketplaceServiceItemDirectFlowLogisticVDC&#x60; — логистика вРЦ;   - &#x60;MarketplaceServiceItemDropoffPPZ&#x60; — услуга drop-off в пункте приёма заказов;   - &#x60;MarketplaceServicePremiumCashback&#x60; — услуга продвижения Premium;   - &#x60;MarketplaceServiceItemRedistributionReturnsPVZ&#x60; — перевыставление возвратов на пункте выдачи;   - &#x60;OperationElectronicServiceStencil&#x60; — услуга «Трафареты»;   - &#x60;OperationElectronicServicesPromotionInSearch&#x60; — услуга «Продвижение в поиске»;   - &#x60;OperationMarketplaceServiceItemElectronicServicesBrandShelf&#x60; — услуга «Брендовая полка»;   - &#x60;OperationSubscriptionPremium&#x60; — подписка Premium.  | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**transaction_type** | **string** | Тип начисления:   - &#x60;all&#x60; — все,   - &#x60;orders&#x60; — заказы,   - &#x60;returns&#x60; — возвраты и отмены,   - &#x60;services&#x60; — сервисные сборы,   - &#x60;compensation&#x60; — компенсация,   - &#x60;transferDelivery&#x60; — стоимость доставки,   - &#x60;other&#x60; — прочее.  Некоторые операции могут быть разделены во времени. Например, при приёме возврата от покупателя списывается стоимость товара и возвращается комиссия, а когда товар возвращается на склад, взимается стоимость услуга по обработке возврата.  | [optional] [default to undefined]

## Example

```typescript
import { FinanceTransactionListV3RequestFilter } from './api';

const instance: FinanceTransactionListV3RequestFilter = {
    date,
    operation_type,
    posting_number,
    transaction_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
