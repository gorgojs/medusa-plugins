# CreateOrderDTO

Информация о заказе.  Передайте выбранный вариант доставки из ответа метода [POST v1/campaigns/{campaignId}/delivery-options](../../reference/delivery-options/getDeliveryOptions.md). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**externalOrderId** | **string** | Внешний идентификатор заказа в системе магазина. | [default to undefined]
**itemsDelivery** | [**Array&lt;CreateOrderWarehouseItemsDTO&gt;**](CreateOrderWarehouseItemsDTO.md) | Список товаров в заказе. | [default to undefined]
**destination** | [**CreateOrderDeliveryOptionDTO**](CreateOrderDeliveryOptionDTO.md) |  | [default to undefined]
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | [default to undefined]
**packaging** | [**CreateOrderPackagingDTO**](CreateOrderPackagingDTO.md) |  | [default to undefined]
**paymentType** | [**DeliveryPaymentType**](DeliveryPaymentType.md) |  | [default to undefined]
**draft** | **boolean** | Признак создания черновика заказа.  * &#x60;true&#x60; — Маркет создаст заказ в статусе &#x60;RESERVED&#x60; и будет ждать подтверждения от магазина. * &#x60;false&#x60; — Маркет создаст заказ в статусе &#x60;PROCESSING&#x60; с подстатусом &#x60;STARTED&#x60; и начнёт его обработку, дополнительных подтверждений не требуется.  | [optional] [default to false]

## Example

```typescript
import { CreateOrderDTO } from './api';

const instance: CreateOrderDTO = {
    externalOrderId,
    itemsDelivery,
    destination,
    customer,
    packaging,
    paymentType,
    draft,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
