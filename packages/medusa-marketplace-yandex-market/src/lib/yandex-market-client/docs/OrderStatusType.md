# OrderStatusType

Статус заказа:  * `PLACING` — оформляется, подготовка к резервированию.  * `RESERVED` — зарезервирован, но недооформлен.  * `UNPAID` — оформлен, но еще не оплачен (если выбрана оплата при оформлении).  * `PROCESSING` — находится в обработке.  * `DELIVERY` — передан в службу доставки.  * `PICKUP` — доставлен в пункт самовывоза.  * `DELIVERED` — получен покупателем.  * `CANCELLED` — отменен.  * `PENDING` — ожидает обработки со стороны продавца.  * `PARTIALLY_RETURNED` — возвращен частично.  * `RETURNED` — возвращен полностью.  * `UNKNOWN` — неизвестный статус.  Также могут возвращаться другие значения. Обрабатывать их не нужно. 

## Enum

* `Placing` (value: `'PLACING'`)

* `Reserved` (value: `'RESERVED'`)

* `Unpaid` (value: `'UNPAID'`)

* `Processing` (value: `'PROCESSING'`)

* `Delivery` (value: `'DELIVERY'`)

* `Pickup` (value: `'PICKUP'`)

* `Delivered` (value: `'DELIVERED'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Pending` (value: `'PENDING'`)

* `PartiallyReturned` (value: `'PARTIALLY_RETURNED'`)

* `Returned` (value: `'RETURNED'`)

* `Unknown` (value: `'UNKNOWN'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
