# FinanceCashFlowStatementListResponseService

Детализация.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Название операции:   - &#x60;MarketplaceServiceItemElectronicServiceStencil&#x60; — услуга «Трафареты»;   - &#x60;MarketplaceServiceItemElectronicServicesPromotionInSearch&#x60; — услуга «Продвижение в поиске»;   - &#x60;MarketplaceServiceItemElectronicServicesBrandShelf&#x60; — услуга «Брендовая полка»;   - &#x60;MarketplaceServiceBrandPromotion&#x60; и &#x60;MarketplaceServiceBrandCommission&#x60; — услуга «Продвижение бренда»;   - &#x60;MarketplaceServiceItemMarketingServices&#x60; — маркетинговые услуги;    - &#x60;MarketplaceServiceItemTechnicalServicesAndOtherServices&#x60; — технические и иные услуги;     - &#x60;MarketplaceServiceItemOtherElectronicServices&#x60; — иные электронные услуги;     - &#x60;ItemAgentServiceStarsMembership&#x60; — звёздные товары;   - &#x60;MarketplaceReturnStorageServiceAtThePickupPointFbsItem&#x60; — краткосрочное размещение возврата FBS;   - &#x60;MarketplaceSaleReviewsItem&#x60; — приобретение отзывов на платформе;   - &#x60;MarketplaceServicePremiumCashbackIndividualPoints&#x60; — услуга продвижения «Бонусы продавца»;   - &#x60;OperationMarketplaceServiceStorage&#x60; — услуга размещения товаров;   - &#x60;MarketplaceServiceStockDisposal&#x60; — утилизация со стока;   - &#x60;MarketplaceReturnDisposalServiceFbsItem&#x60; — утилизация FBS;   - &#x60;MarketplaceServiceItemFlexiblePaymentSchedule&#x60; — услуга «Гибкий график выплат»;   - &#x60;MarketplaceServiceProcessingSpoilage&#x60; — обработка брака;   - &#x60;MarketplaceServiceProcessingIdentifiedSurplus&#x60; — обработка опознанных излишков;   - &#x60;MarketplaceServiceProcessingIdentifiedDiscrepancies&#x60; — бронирование места для размещения на складе;   - &#x60;MarketplaceServiceItemInternetSiteAdvertising&#x60; — реклама на сайте Ozon;   - &#x60;MarketplaceServiceItemSubscribtionPremium&#x60; — премиум-подписка;   - &#x60;MarketplaceAgencyFeeAggregator3PLGlobalItem&#x60; — агентское вознаграждение Ozon.  | [optional] [default to undefined]
**price** | **number** | Сумма по операции. | [optional] [default to undefined]

## Example

```typescript
import { FinanceCashFlowStatementListResponseService } from './api';

const instance: FinanceCashFlowStatementListResponseService = {
    name,
    price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
