# OrderDTO

Заказ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заказа. | [default to undefined]
**externalOrderId** | **string** | Внешний идентификатор заказа, который вы передали в [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md). | [optional] [default to undefined]
**status** | [**OrderStatusType**](OrderStatusType.md) |  | [default to undefined]
**substatus** | [**OrderSubstatusType**](OrderSubstatusType.md) |  | [default to undefined]
**creationDate** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**currency** | [**CurrencyType**](CurrencyType.md) |  | [default to undefined]
**itemsTotal** | **number** | Платеж покупателя.  | [default to undefined]
**deliveryTotal** | **number** | Стоимость доставки.  | [default to undefined]
**buyerItemsTotal** | **number** | Стоимость всех товаров в заказе в валюте покупателя после применения скидок и без учета стоимости доставки. | [optional] [default to undefined]
**buyerTotal** | **number** | Стоимость всех товаров в заказе в валюте покупателя после применения скидок и с учетом стоимости доставки. | [optional] [default to undefined]
**buyerItemsTotalBeforeDiscount** | **number** | Стоимость всех товаров в заказе в валюте покупателя без учета стоимости доставки и до применения скидок по:  * акциям; * купонам; * промокодам.  | [default to undefined]
**buyerTotalBeforeDiscount** | **number** | Стоимость всех товаров в заказе в валюте покупателя до применения скидок и с учетом стоимости доставки (&#x60;buyerItemsTotalBeforeDiscount&#x60; + стоимость доставки). | [optional] [default to undefined]
**paymentType** | [**OrderPaymentType**](OrderPaymentType.md) |  | [default to undefined]
**paymentMethod** | [**OrderPaymentMethodType**](OrderPaymentMethodType.md) |  | [default to undefined]
**fake** | **boolean** | Тип заказа:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый](../../concepts/sandbox.md) заказ Маркета.  | [default to undefined]
**items** | [**Array&lt;OrderItemDTO&gt;**](OrderItemDTO.md) | Список товаров в заказе. | [default to undefined]
**subsidies** | [**Array&lt;OrderSubsidyDTO&gt;**](OrderSubsidyDTO.md) | Список субсидий по типам. | [optional] [default to undefined]
**delivery** | [**OrderDeliveryDTO**](OrderDeliveryDTO.md) |  | [default to undefined]
**buyer** | [**OrderBuyerDTO**](OrderBuyerDTO.md) |  | [default to undefined]
**notes** | **string** | Комментарий к заказу. | [optional] [default to undefined]
**taxSystem** | [**OrderTaxSystemType**](OrderTaxSystemType.md) |  | [default to undefined]
**cancelRequested** | **boolean** | **Только для модели DBS**  Запрошена ли отмена.  | [optional] [default to undefined]
**expiryDate** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { OrderDTO } from './api';

const instance: OrderDTO = {
    id,
    externalOrderId,
    status,
    substatus,
    creationDate,
    updatedAt,
    currency,
    itemsTotal,
    deliveryTotal,
    buyerItemsTotal,
    buyerTotal,
    buyerItemsTotalBeforeDiscount,
    buyerTotalBeforeDiscount,
    paymentType,
    paymentMethod,
    fake,
    items,
    subsidies,
    delivery,
    buyer,
    notes,
    taxSystem,
    cancelRequested,
    expiryDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
