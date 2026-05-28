# V3FbsPosting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addressee** | [**V3AddresseeFbsLists**](V3AddresseeFbsLists.md) |  | [optional] [default to undefined]
**analytics_data** | [**V3FbsPostingAnalyticsData**](V3FbsPostingAnalyticsData.md) |  | [optional] [default to undefined]
**available_actions** | **Array&lt;string&gt;** | Доступные действия и информация об отправлении: - &#x60;arbitration&#x60; — открыть спор; - &#x60;awaiting_delivery&#x60; — перевести в статус «Ожидает отгрузки»; - &#x60;can_create_chat&#x60; — начать чат с покупателем; - &#x60;cancel&#x60; — отменить отправление; - &#x60;click_track_number&#x60; — просмотреть по трек-номеру историю изменения статусов в личном кабинете; - &#x60;customer_phone_available&#x60; — телефон покупателя; - &#x60;has_weight_products&#x60; — весовые товары в отправлении; - &#x60;hide_region_and_city&#x60; — скрыть регион и город покупателя в отчёте; - &#x60;invoice_get&#x60; —  получить информацию из счёта-фактуры; - &#x60;invoice_send&#x60; — создать счёт-фактуру; - &#x60;invoice_update&#x60; — отредактировать счёт-фактуру; - &#x60;label_download_big&#x60; — скачать большую этикетку; - &#x60;label_download_small&#x60; — скачать маленькую этикетку; - &#x60;label_download&#x60; — скачать этикетку; - &#x60;non_int_delivered&#x60; — перевести в статус «Условно доставлен»; - &#x60;non_int_delivering&#x60; — перевести в статус «Доставляется»; - &#x60;non_int_last_mile&#x60; — перевести в статус «Курьер в пути»; - &#x60;product_cancel&#x60; — отменить часть товаров в отправлении; - &#x60;set_cutoff&#x60; — необходимо указать дату отгрузки, воспользуйтесь методом [/v1/posting/cutoff/set](#operation/PostingAPI_SetPostingCutoff); - &#x60;set_timeslot&#x60; — изменить время доставки покупателю; - &#x60;set_track_number&#x60; — указать или изменить трек-номер; - &#x60;ship_async_in_process&#x60; — отправление собирается; - &#x60;ship_async_retry&#x60; — собрать отправление повторно после ошибки сборки; - &#x60;ship_async&#x60; — собрать отправление; - &#x60;ship_with_additional_info&#x60; — необходимо заполнить дополнительную информацию; - &#x60;ship&#x60; — собрать отправление; - &#x60;update_cis&#x60; — изменить дополнительную информацию.  | [optional] [default to undefined]
**barcodes** | [**V3Barcodes**](V3Barcodes.md) |  | [optional] [default to undefined]
**cancellation** | [**V3Cancellation**](V3Cancellation.md) |  | [optional] [default to undefined]
**customer** | [**V3CustomerFbsLists**](V3CustomerFbsLists.md) |  | [optional] [default to undefined]
**delivering_date** | **string** | Дата передачи отправления в доставку. | [optional] [default to undefined]
**delivery_method** | [**V3DeliveryMethod**](V3DeliveryMethod.md) |  | [optional] [default to undefined]
**financial_data** | [**V3PostingFinancialData**](V3PostingFinancialData.md) |  | [optional] [default to undefined]
**in_process_at** | **string** | Дата и время начала обработки отправления. | [optional] [default to undefined]
**is_express** | **boolean** | Если использовалась быстрая доставка Ozon Express — &#x60;true&#x60;. | [optional] [default to undefined]
**is_multibox** | **boolean** | Признак, что в отправлении есть многокоробочный товар и нужно передать количество коробок для него:  - &#x60;true&#x60; — до сборки передайте количество коробок через метод [/v3/posting/multiboxqty/set](#operation/PostingAPI_PostingMultiBoxQtySetV3). - &#x60;false&#x60; — отправление собрано с указанием количества коробок в параметре &#x60;multi_box_qty&#x60; или в отправлении нет многокоробочного товара.  | [optional] [default to undefined]
**legal_info** | [**V2FboSinglePostingLegalInfo**](V2FboSinglePostingLegalInfo.md) |  | [optional] [default to undefined]
**multi_box_qty** | **number** | Количество коробок, в которые упакован товар. | [optional] [default to undefined]
**optional** | [**V3FbsPostingDetailOptional**](V3FbsPostingDetailOptional.md) |  | [optional] [default to undefined]
**order_id** | **number** | Идентификатор заказа, к которому относится отправление. | [optional] [default to undefined]
**order_number** | **string** | Номер заказа, к которому относится отправление. | [optional] [default to undefined]
**parent_posting_number** | **string** | Номер родительского отправления, в результате разделения которого появилось текущее. | [optional] [default to undefined]
**pickup_code_verified_at** | **string** | Дата и время успешной валидации кода курьера. Чтобы проверить код курьера, воспользуйтесь методом [/v1/posting/fbs/pick-up-code/verify](#operation/PostingAPI_PostingFBSPickupCodeVerify). | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;V3FbsPostingProduct&gt;**](V3FbsPostingProduct.md) | Список товаров в отправлении. | [optional] [default to undefined]
**prr_option** | **string** | Код услуги погрузочно-разгрузочных работ: - &#x60;lift&#x60; — подъём на лифте. - &#x60;stairs&#x60; — подъём по лестнице. - &#x60;none&#x60; — покупатель отказался от услуги, поднимать товары не нужно. - &#x60;delivery_default&#x60; — доставка включена в стоимость, по условиям оферты нужно доставить товар на этаж.  Параметр актуален для КГТ-отправлений с доставкой силами продавца или интегрированной службой.  | [optional] [default to undefined]
**quantum_id** | **number** | Идентификатор эконом-товара. | [optional] [default to undefined]
**require_blr_traceable_attrs** | **boolean** | &#x60;true&#x60;, если нужно заполнить атрибуты прослеживаемости.  | [optional] [default to undefined]
**requirements** | [**V3FbsPostingRequirementsV3**](V3FbsPostingRequirementsV3.md) |  | [optional] [default to undefined]
**shipment_date** | **string** | Дата и время, до которой необходимо собрать отправление. Показываем рекомендованное время отгрузки. По истечении этого времени начнёт применяться новый тариф, информацию о нём уточняйте в поле &#x60;tariffication&#x60;. | [optional] [default to undefined]
**shipment_date_without_delay** | **string** | Дата и время отгрузки без просрочки. | [optional] [default to undefined]
**status** | **string** | Статус отправления: - &#x60;acceptance_in_progress&#x60; — идёт приёмка, - &#x60;arbitration&#x60; — арбитраж, - &#x60;awaiting_approve&#x60; — ожидает подтверждения, - &#x60;awaiting_deliver&#x60; — ожидает отгрузки, - &#x60;awaiting_packaging&#x60; — ожидает упаковки, - &#x60;awaiting_registration&#x60; — ожидает регистрации, - &#x60;awaiting_verification&#x60; — создано, - &#x60;cancelled&#x60; — отменено, - &#x60;cancelled_from_split_pending&#x60; — отменён из-за разделения отправления, - &#x60;client_arbitration&#x60; — клиентский арбитраж доставки, - &#x60;delivering&#x60; — доставляется, - &#x60;driver_pickup&#x60; — у водителя, - &#x60;not_accepted&#x60; — не принят на сортировочном центре,  | [optional] [default to undefined]
**substatus** | **string** | Подстатус отправления: - &#x60;posting_acceptance_in_progress&#x60;— идёт приёмка, - &#x60;posting_in_arbitration&#x60; — арбитраж, - &#x60;posting_created&#x60; — создано, - &#x60;posting_in_carriage&#x60; — в перевозке, - &#x60;posting_not_in_carriage&#x60; — не добавлено в перевозку, - &#x60;posting_registered&#x60; — зарегистрировано, - &#x60;posting_transferring_to_delivery&#x60; (&#x60;status&#x3D;awaiting_deliver&#x60;) — передаётся в доставку, - &#x60;posting_awaiting_passport_data&#x60; — ожидает паспортных данных,  - &#x60;posting_created&#x60; — создано, - &#x60;posting_awaiting_registration&#x60; — ожидает регистрации, - &#x60;posting_registration_error&#x60; — ошибка регистрации, - &#x60;posting_transferring_to_delivery&#x60; (&#x60;status&#x3D;awaiting_registration&#x60;) — передаётся курьеру, - &#x60;posting_split_pending&#x60; — создано, - &#x60;posting_canceled&#x60; — отменено, - &#x60;posting_in_client_arbitration&#x60; — клиентский арбитраж доставки, - &#x60;posting_delivered&#x60; — доставлено, - &#x60;posting_received&#x60; — получено, - &#x60;posting_conditionally_delivered&#x60; — условно доставлено, - &#x60;posting_in_courier_service&#x60; — курьер в пути, - &#x60;posting_in_pickup_point&#x60; — в пункте выдачи, - &#x60;posting_on_way_to_city&#x60; — в пути в ваш город, - &#x60;posting_on_way_to_pickup_point&#x60; — в пути в пункт выдачи, - &#x60;posting_returned_to_warehouse&#x60; — возвращено на склад, - &#x60;posting_transferred_to_courier_service&#x60; — передаётся в службу доставки, - &#x60;posting_driver_pick_up&#x60; — у водителя, - &#x60;posting_not_in_sort_center&#x60; — не принято на сортировочном центре, - &#x60;ship_failed&#x60; — сборка не удалась.  | [optional] [default to undefined]
**tpl_integration_type** | **string** | Тип интеграции со службой доставки:   - &#x60;ozon&#x60; — доставка службой Ozon.   - &#x60;3pl_tracking&#x60; — доставка интегрированной службой.   - &#x60;non_integrated&#x60; — доставка сторонней службой.   - &#x60;aggregator&#x60; — доставка через партнёрскую доставку Ozon.   - &#x60;hybryd&#x60; — схема доставки Почты России.  | [optional] [default to undefined]
**tracking_number** | **string** | Трек-номер отправления. | [optional] [default to undefined]
**tariffication** | [**V3FbsTariffication**](V3FbsTariffication.md) |  | [optional] [default to undefined]

## Example

```typescript
import { V3FbsPosting } from './api';

const instance: V3FbsPosting = {
    addressee,
    analytics_data,
    available_actions,
    barcodes,
    cancellation,
    customer,
    delivering_date,
    delivery_method,
    financial_data,
    in_process_at,
    is_express,
    is_multibox,
    legal_info,
    multi_box_qty,
    optional,
    order_id,
    order_number,
    parent_posting_number,
    pickup_code_verified_at,
    posting_number,
    products,
    prr_option,
    quantum_id,
    require_blr_traceable_attrs,
    requirements,
    shipment_date,
    shipment_date_without_delay,
    status,
    substatus,
    tpl_integration_type,
    tracking_number,
    tariffication,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
