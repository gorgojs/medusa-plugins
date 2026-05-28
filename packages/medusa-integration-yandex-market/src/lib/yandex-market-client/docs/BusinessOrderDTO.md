# BusinessOrderDTO

Информация о заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа. | [default to undefined]
**campaignId** | **number** | Идентификатор кампании (магазина) — технический идентификатор, который представляет ваш магазин в системе Яндекс Маркета при работе через API. Он однозначно связывается с вашим магазином, но предназначен только для автоматизированного взаимодействия.  Его можно узнать с помощью запроса [GET v2/campaigns](../../reference/campaigns/getCampaigns.md) или найти в кабинете продавца на Маркете. Нажмите на иконку вашего аккаунта → **Настройки** и в меню слева выберите **API и модули**:  * блок **Идентификатор кампании**; * вкладка **Лог запросов** → выпадающий список в блоке **Показывать логи**.  ⚠️ Не путайте его с: - идентификатором магазина, который отображается в личном кабинете продавца; - рекламными кампаниями.  | [default to undefined]
**programType** | [**SellingProgramType**](SellingProgramType.md) |  | [optional] [default to undefined]
**externalOrderId** | **string** | Внешний идентификатор заказа, который вы передали в [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md). | [optional] [default to undefined]
**status** | [**OrderStatusType**](OrderStatusType.md) |  | [default to undefined]
**substatus** | [**OrderSubstatusType**](OrderSubstatusType.md) |  | [default to undefined]
**creationDate** | **string** | Дата и время оформления заказа.  Формат даты: ISO 8601 со смещением относительно UTC.  | [default to undefined]
**updateDate** | **string** | Дата и время последнего обновления заказа.  Формат даты: ISO 8601 со смещением относительно UTC.  | [optional] [default to undefined]
**paymentType** | [**OrderPaymentType**](OrderPaymentType.md) |  | [default to undefined]
**paymentMethod** | [**OrderPaymentMethodType**](OrderPaymentMethodType.md) |  | [default to undefined]
**fake** | **boolean** | Тип заказа:  * &#x60;false&#x60; — настоящий заказ покупателя.  * &#x60;true&#x60; — [тестовый заказ](../../concepts/sandbox.md) Маркета.  | [default to undefined]
**items** | [**Array&lt;BusinessOrderItemDTO&gt;**](BusinessOrderItemDTO.md) | Список товаров в заказе. | [default to undefined]
**prices** | [**OrderPriceDTO**](OrderPriceDTO.md) |  | [optional] [default to undefined]
**delivery** | [**BusinessOrderDeliveryDTO**](BusinessOrderDeliveryDTO.md) |  | [default to undefined]
**services** | [**BusinessOrderServicesDTO**](BusinessOrderServicesDTO.md) |  | [optional] [default to undefined]
**buyerType** | [**OrderBuyerType**](OrderBuyerType.md) |  | [optional] [default to undefined]
**notes** | **string** | Комментарий к заказу. | [optional] [default to undefined]
**cancelRequested** | **boolean** | **Только для модели DBS**  Запрошена ли отмена.  | [optional] [default to undefined]
**sourcePlatform** | [**OrderSourcePlatformType**](OrderSourcePlatformType.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessOrderDTO } from './api';

const instance: BusinessOrderDTO = {
    orderId,
    campaignId,
    programType,
    externalOrderId,
    status,
    substatus,
    creationDate,
    updateDate,
    paymentType,
    paymentMethod,
    fake,
    items,
    prices,
    delivery,
    services,
    buyerType,
    notes,
    cancelRequested,
    sourcePlatform,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
