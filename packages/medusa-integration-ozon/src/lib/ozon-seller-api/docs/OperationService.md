# OperationService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название услуги:   - &#x60;MarketplaceNotDeliveredCostItem&#x60; — возврат невостребованного товара от покупателя на склад.   - &#x60;MarketplaceReturnAfterDeliveryCostItem&#x60; — возврат от покупателя на склад после доставки.   - &#x60;MarketplaceDeliveryCostItem&#x60; — доставка товара до покупателя.   - &#x60;MarketplaceSaleReviewsItem&#x60; — приобретение отзывов на платформе.   - &#x60;ItemAdvertisementForSupplierLogistic&#x60; — доставка товаров на склад Ozon — кросс-докинг.   - &#x60;OperationMarketplaceServiceStorage&#x60; — размещения товаров.   - &#x60;MarketplaceMarketingActionCostItem&#x60; — продвижение товаров.   - &#x60;MarketplaceServiceItemInstallment&#x60; — продвижениe и продажа в рассрочку.   - &#x60;MarketplaceServiceItemMarkingItems&#x60; — обязательная маркировка товаров.   - &#x60;MarketplaceServiceItemFlexiblePaymentSchedule&#x60; — гибкий график выплат.   - &#x60;MarketplaceServiceItemReturnFromStock&#x60; — комплектация товаров для вывоза продавцом.   - &#x60;ItemAdvertisementForSupplierLogisticSeller&#x60; — транспортно-экспедиционные услуги.   - &#x60;ItemAgentServiceStarsMembership&#x60; — вознаграждение за услугу [«Звёздные товары»](https://s.ozon.ru/e7NlR6b).   - &#x60;MarketplaceServiceItemDelivToCustomer&#x60; — последняя миля.   - &#x60;MarketplaceServiceItemDirectFlowTrans&#x60; — магистраль.   - &#x60;MarketplaceServiceItemDropoffFF&#x60; — обработка отправления.   - &#x60;MarketplaceServiceItemDropoffPVZ&#x60; — обработка отправления.   - &#x60;MarketplaceServiceItemDropoffSC&#x60; — обработка отправления.   - &#x60;MarketplaceServiceItemFulfillment&#x60; — сборка заказа.   - &#x60;MarketplaceServiceItemPickup&#x60; — выезд транспортного средства по адресу продавца для забора отправлений — Pick-up.   - &#x60;MarketplaceServiceItemReturnAfterDelivToCustomer&#x60; — обработка возврата.   - &#x60;MarketplaceServiceItemReturnFlowTrans&#x60; — обратная магистраль.   - &#x60;MarketplaceServiceItemReturnNotDelivToCustomer&#x60; — обработка отмен.   - &#x60;MarketplaceServiceItemReturnPartGoodsCustomer&#x60; — обработка невыкупа.   - &#x60;MarketplaceRedistributionOfAcquiringOperation&#x60; — оплата эквайринга.   - &#x60;MarketplaceReturnStorageServiceAtThePickupPointFbsItem&#x60; — краткосрочное размещение возврата FBS.   - &#x60;MarketplaceReturnStorageServiceInTheWarehouseFbsItem&#x60; — долгосрочное размещение возврата FBS.   - &#x60;MarketplaceServiceItemDeliveryKGT&#x60; — доставка крупногабаритного товара (КГТ).   - &#x60;MarketplaceServiceItemDirectFlowLogistic&#x60; — логистика.   - &#x60;MarketplaceServiceItemReturnFlowLogistic&#x60; — обратная логистика.   - &#x60;MarketplaceServicePremiumCashbackIndividualPoints&#x60; — услуга продвижения «Бонусы продавца».   - &#x60;MarketplaceServicePremiumPromotion&#x60; — услуга продвижение Premium, фиксированная комиссия.   - &#x60;OperationMarketplaceWithHoldingForUndeliverableGoods&#x60; — удержание за недовложение товара.   - &#x60;MarketplaceServiceItemDropoffPPZ&#x60; — услуга drop-off в пункте приёма заказов.   - &#x60;MarketplaceServiceItemRedistributionReturnsPVZ&#x60; — перевыставление возвратов на ПВЗ.   - &#x60;OperationMarketplaceAgencyFeeAggregator3PLGlobal&#x60; — тарификация агентской услуги Agregator 3PL Global.   - &#x60;MarketplaceServiceItemDirectFlowLogisticVDC&#x60; — логистика вРЦ.  | [optional] [default to undefined]
**price** | **number** | Цена. | [optional] [default to undefined]

## Example

```typescript
import { OperationService } from './api';

const instance: OperationService = {
    name,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
