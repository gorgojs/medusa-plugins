# SupplyRequestStatusType

Статус заявки на поставку:  * `CREATED` — создан черновик заявки. * `FINISHED` — заявка завершена, товары:   * приняты на складе;   * переданы на другой склад при перемещении;   * переданы продавцу при вывозе;   * утилизированы. * `CANCELLED` — заявка отменена. * `INVALID` — ошибка обработки. * `VALIDATED` — заявка в обработке. * `PUBLISHED` — создана заявка. * `ARRIVED_TO_SERVICE` — поставка прибыла на склад хранения. * `ARRIVED_TO_XDOC_SERVICE` — поставка прибыла на транзитный склад. * `SHIPPED_TO_SERVICE` — поставка отправлена с транзитного склада на склад хранения. * `CANCELLATION_REQUESTED` — запрошена отмена заявки. * `CANCELLATION_REJECTED` — заявка не будет отменена. * `REGISTERED_IN_ELECTRONIC_QUEUE` — поставка зарегистрирована в электронной очереди. * `READY_FOR_UTILIZATION` — товары готовы к утилизации. * `TRANSIT_MOVING` — перемещение товаров на склад вывоза. * `WAREHOUSE_HANDLING` — вторичная приемка товаров или их сборка для вывоза или утилизации. * `ACCEPTED_BY_WAREHOUSE_SYSTEM` — информация о заявке направлена на склад. * `READY_TO_WITHDRAW` — товары готовы к выдаче. 

## Enum

* `Created` (value: `'CREATED'`)

* `Finished` (value: `'FINISHED'`)

* `Cancelled` (value: `'CANCELLED'`)

* `Invalid` (value: `'INVALID'`)

* `Validated` (value: `'VALIDATED'`)

* `Published` (value: `'PUBLISHED'`)

* `ArrivedToService` (value: `'ARRIVED_TO_SERVICE'`)

* `ArrivedToXdocService` (value: `'ARRIVED_TO_XDOC_SERVICE'`)

* `ShippedToService` (value: `'SHIPPED_TO_SERVICE'`)

* `CancellationRequested` (value: `'CANCELLATION_REQUESTED'`)

* `CancellationRejected` (value: `'CANCELLATION_REJECTED'`)

* `RegisteredInElectronicQueue` (value: `'REGISTERED_IN_ELECTRONIC_QUEUE'`)

* `ReadyForUtilization` (value: `'READY_FOR_UTILIZATION'`)

* `TransitMoving` (value: `'TRANSIT_MOVING'`)

* `WarehouseHandling` (value: `'WAREHOUSE_HANDLING'`)

* `AcceptedByWarehouseSystem` (value: `'ACCEPTED_BY_WAREHOUSE_SYSTEM'`)

* `ReadyToWithdraw` (value: `'READY_TO_WITHDRAW'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
