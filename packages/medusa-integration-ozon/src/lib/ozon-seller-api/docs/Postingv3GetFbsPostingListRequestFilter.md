# Postingv3GetFbsPostingListRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_method_id** | **Array&lt;number&gt;** | Идентификатор способа доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]
**is_blr_traceable** | **boolean** | &#x60;true&#x60;, если товар прослеживаемый.  | [optional] [default to undefined]
**is_quantum** | **boolean** | Укажите &#x60;true&#x60;, чтобы получить только отправления квантов.  По умолчанию — &#x60;false&#x60;, в ответе придут все отправления.  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**provider_id** | **Array&lt;number&gt;** | Идентификатор службы доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]
**since** | **string** | Дата начала периода, за который нужно получить список отправлений.  Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.  Пример: 2019-08-24T14:15:22Z.  | [default to undefined]
**to** | **string** | Дата конца периода, за который нужно получить список отправлений.  Формат UTC: ГГГГ-ММ-ДДTЧЧ:ММ:ССZ.  Пример: 2019-08-24T14:15:22Z.  | [default to undefined]
**status** | **string** | Статус отправления: - &#x60;awaiting_registration&#x60; — ожидает регистрации, - &#x60;acceptance_in_progress&#x60; — идёт приёмка, - &#x60;awaiting_approve&#x60; — ожидает подтверждения, - &#x60;awaiting_packaging&#x60; — ожидает упаковки, - &#x60;awaiting_deliver&#x60; — ожидает отгрузки, - &#x60;arbitration&#x60; — арбитраж, - &#x60;client_arbitration&#x60; — клиентский арбитраж доставки, - &#x60;delivering&#x60; — доставляется, - &#x60;driver_pickup&#x60; — у водителя, - &#x60;delivered&#x60; — доставлено, - &#x60;cancelled&#x60; — отменено, - &#x60;not_accepted&#x60; — не принят на сортировочном центре, - &#x60;sent_by_seller&#x60; – отправлено продавцом.  | [optional] [default to undefined]
**warehouse_id** | **Array&lt;string&gt;** | Идентификатор склада. Можно получить с помощью метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]
**last_changed_status_date** | [**PostinglistV3status**](PostinglistV3status.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Postingv3GetFbsPostingListRequestFilter } from './api';

const instance: Postingv3GetFbsPostingListRequestFilter = {
    delivery_method_id,
    is_blr_traceable,
    is_quantum,
    order_id,
    provider_id,
    since,
    to,
    status,
    warehouse_id,
    last_changed_status_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
