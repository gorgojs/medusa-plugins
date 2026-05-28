# Postingv3GetFbsPostingUnfulfilledListRequestFilter

Фильтр запроса.  Используйте фильтр либо по времени сборки — `cutoff`, либо по дате передачи отправления в доставку — `delivering_date`. Если использовать их вместе, в ответе вернётся ошибка.  Чтобы использовать фильтр по времени сборки, заполните поля `cutoff_from` и `cutoff_to`.  Чтобы использовать фильтр по дате передачи отправления в доставку, заполните поля `delivering_date_from` и `delivering_date_to`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cutoff_from** | **string** | Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода.  Формат: YYYY-MM-DDThh:mm:ss.mcsZ. Пример: 2020-03-18T07:34:50.359Z.  | [default to undefined]
**cutoff_to** | **string** | Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода.  Формат: YYYY-MM-DDThh:mm:ss.mcsZ. Пример: 2020-03-18T07:34:50.359Z.  | [default to undefined]
**delivering_date_from** | **string** | Минимальная дата передачи отправления в доставку. | [optional] [default to undefined]
**delivering_date_to** | **string** | Максимальная дата передачи отправления в доставку. | [optional] [default to undefined]
**delivery_method_id** | **Array&lt;number&gt;** | Идентификатор способа доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]
**is_quantum** | **boolean** | Укажите &#x60;true&#x60;, чтобы получить только отправления квантов.  По умолчанию — &#x60;false&#x60;, в ответе придут все отправления.  | [optional] [default to undefined]
**provider_id** | **Array&lt;number&gt;** | Идентификатор службы доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]
**status** | **string** | Статус отправления: - &#x60;acceptance_in_progress&#x60; — идёт приёмка, - &#x60;awaiting_approve&#x60; — ожидает подтверждения, - &#x60;awaiting_packaging&#x60; — ожидает упаковки, - &#x60;awaiting_registration&#x60; — ожидает регистрации, - &#x60;awaiting_deliver&#x60; — ожидает отгрузки, - &#x60;arbitration&#x60; — арбитраж, - &#x60;client_arbitration&#x60; — клиентский арбитраж доставки, - &#x60;delivering&#x60; — доставляется, - &#x60;driver_pickup&#x60; — у водителя, - &#x60;not_accepted&#x60; — не принят на сортировочном центре.  | [optional] [default to undefined]
**warehouse_id** | **Array&lt;number&gt;** | Идентификатор склада. Можно получить с помощью метода [/v1/warehouse/list](#operation/WarehouseAPI_WarehouseList). | [optional] [default to undefined]

## Example

```typescript
import { Postingv3GetFbsPostingUnfulfilledListRequestFilter } from './api';

const instance: Postingv3GetFbsPostingUnfulfilledListRequestFilter = {
    cutoff_from,
    cutoff_to,
    delivering_date_from,
    delivering_date_to,
    delivery_method_id,
    is_quantum,
    provider_id,
    status,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
