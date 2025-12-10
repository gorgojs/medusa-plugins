# OrderStatsStatusType

Текущий статус заказа:  * `CANCELLED_BEFORE_PROCESSING` — заказ отменен до начала его обработки.  * `CANCELLED_IN_DELIVERY` — заказ отменен во время его доставки.  * `CANCELLED_IN_PROCESSING` — заказ отменен во время его обработки.  * `DELIVERY` — заказ передан службе доставки.  * `DELIVERED` — заказ доставлен.  * `PARTIALLY_DELIVERED` — заказ частично доставлен.      {% note warning \"Статус заказа может перейти в `PARTIALLY_DELIVERED` не сразу\" %}      Если в доставленном заказе был невыкуп, статус изменится только после получения заказа на складе Маркета.      {% endnote %}  * `PARTIALLY_RETURNED` — заказ частично возвращен покупателем.  * `PENDING` — заказ ожидает подтверждения.  * `PICKUP` — заказ доставлен в пункт выдачи.  * `PROCESSING` — заказ в обработке.  * `RESERVED` — товар зарезервирован на складе.  * `RETURNED` — заказ полностью возвращен покупателем.  * `UNKNOWN` — неизвестный статус заказа.  * `UNPAID` — заказ от юридического лица ожидает оплаты.  * `LOST` — заказ утерян. 

## Enum

* `CancelledBeforeProcessing` (value: `'CANCELLED_BEFORE_PROCESSING'`)

* `CancelledInDelivery` (value: `'CANCELLED_IN_DELIVERY'`)

* `CancelledInProcessing` (value: `'CANCELLED_IN_PROCESSING'`)

* `Delivery` (value: `'DELIVERY'`)

* `Delivered` (value: `'DELIVERED'`)

* `PartiallyDelivered` (value: `'PARTIALLY_DELIVERED'`)

* `PartiallyReturned` (value: `'PARTIALLY_RETURNED'`)

* `Pending` (value: `'PENDING'`)

* `Pickup` (value: `'PICKUP'`)

* `Processing` (value: `'PROCESSING'`)

* `Reserved` (value: `'RESERVED'`)

* `Returned` (value: `'RETURNED'`)

* `Unknown` (value: `'UNKNOWN'`)

* `Unpaid` (value: `'UNPAID'`)

* `Lost` (value: `'LOST'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
