# V1OrderErrorTypeEnum

Ошибка регистрации поставки:  - `ORDER_ERROR_TYPE_UNSPECIFIED` — не определена;  - `INVALID_NUMBER_OF_PACKAGE_UNITS` — указано неверное количество грузомест в заявке;  - `MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED` — превышено максимальное количество уникальных SKU в заявке;  - `MAXIMUM_BUNDLE_VOLUME_REACHED` — достигнут максимальный объём поставки;  - `BUNDLE_ID_EMPTY` — состав поставки пуст;  - `INVALID_SUPPLY_TYPE` — тип поставки не указан или указан неверный;  - `INVALID_TIMESLOT` — таймслот не указан или указан неверный;  - `INVALID_WHC_NUMBER` — неверный идентификатор поставки WHC;  - `DRAFT_LOCKED` — заявка ожидает переноса в ордер;  - `DROP_OFF_POINTS_IS_EMPTY` — для поставки drop-off не указано место отгрузки;  - `WAREHOUSE_IS_EMPTY` — не указаны данные склада;  - `BUSINESS_FLOW_TYPE_IS_EMPTY` — не определён тип бизнес-процесса;  - `WAS_CANCELLED` — поставка уже отменена;  - `PICK_UP_DETAILS_IS_EMPTY` — для поставки pick-up не указаны данные по отгрузке курьеру со склада продавца;  - `INVALID_PICK_UP_DETAILS` — для поставки pick-up указаны неверные данные по отгрузке курьеру со склада продавца;  - `INVALID_PICK_UP_DATE` — для поставки pick-up указана неверная дата отгрузки курьеру со склада продавца;  - `INTERNAL_ERROR` — ошибка при проверке параметров. 

## Enum

* `OrderErrorTypeUnspecified` (value: `'ORDER_ERROR_TYPE_UNSPECIFIED'`)

* `InvalidNumberOfPackageUnits` (value: `'INVALID_NUMBER_OF_PACKAGE_UNITS'`)

* `MaximumNumberOfUniqueSkuReached` (value: `'MAXIMUM_NUMBER_OF_UNIQUE_SKU_REACHED'`)

* `MaximumBundleVolumeReached` (value: `'MAXIMUM_BUNDLE_VOLUME_REACHED'`)

* `BundleIdEmpty` (value: `'BUNDLE_ID_EMPTY'`)

* `InvalidSupplyType` (value: `'INVALID_SUPPLY_TYPE'`)

* `InvalidTimeslot` (value: `'INVALID_TIMESLOT'`)

* `InvalidWhcNumber` (value: `'INVALID_WHC_NUMBER'`)

* `DraftLocked` (value: `'DRAFT_LOCKED'`)

* `DropOffPointsIsEmpty` (value: `'DROP_OFF_POINTS_IS_EMPTY'`)

* `WarehouseIsEmpty` (value: `'WAREHOUSE_IS_EMPTY'`)

* `BusinessFlowTypeIsEmpty` (value: `'BUSINESS_FLOW_TYPE_IS_EMPTY'`)

* `WasCancelled` (value: `'WAS_CANCELLED'`)

* `PickUpDetailsIsEmpty` (value: `'PICK_UP_DETAILS_IS_EMPTY'`)

* `InvalidPickUpDetails` (value: `'INVALID_PICK_UP_DETAILS'`)

* `InvalidPickUpDate` (value: `'INVALID_PICK_UP_DATE'`)

* `InternalError` (value: `'INTERNAL_ERROR'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
