# ErrorErrorMessageEnum

Возможные ошибки:  - `UNSPECIFIED` — ошибка не определена;  - `EMPTY_ITEMS_LIST` — передан пустой список `items`;  - `ITEMS_COUNT_MORE_THAN_MAX` — превышено количество `sku`;  - `UNKNOWN_CLUSTER_IDS` — кластер с таким `id` не существует;  - `ITEMS_VALIDATION` — ошибки валидации товарного состава;  - `DROP_OFF_POINT_DOES_NOT_EXIST` — точка отгрузки с таким `id` не существует;  - `DROP_OFF_POINT_HAS_NO_TIMESLOTS` — нет доступных таймслотов на точке отгрузки;  - `TOTAL_VOLUME_IN_LITRES_INVALID` — объём поставляемых товаров слишком большой для этой точки;  - `SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE` — требуется распределение SKU, но оно невозможно;  - `CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER` — поставка кросс-докингом через пункт выдачи заказов недоступна для продавца;  - `DUPLICATE_SKUS_IN_REQUEST` — в запросе есть дубликаты SKU;  - `CAN_NOT_CREATE_DRAFT` — не удалось создать черновик;  - `DRAFT_TOTALS_INVALID_ERROR` — некорректные итоговые данные в черновике;  - `CAN_NOT_START_CALCULATION` — не удалось начать расчёт;  - `PICKUP_IS_NOT_AVAILABLE` — самовывоз недоступен;  - `DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP` — точка отгрузки несовместима с самовывозом;  - `UNDEFINED` — неизвестная ошибка. 

## Enum

* `Unspecified` (value: `'UNSPECIFIED'`)

* `EmptyItemsList` (value: `'EMPTY_ITEMS_LIST'`)

* `ItemsCountMoreThanMax` (value: `'ITEMS_COUNT_MORE_THAN_MAX'`)

* `UnknownClusterIds` (value: `'UNKNOWN_CLUSTER_IDS'`)

* `ItemsValidation` (value: `'ITEMS_VALIDATION'`)

* `DropOffPointDoesNotExist` (value: `'DROP_OFF_POINT_DOES_NOT_EXIST'`)

* `DropOffPointHasNoTimeslots` (value: `'DROP_OFF_POINT_HAS_NO_TIMESLOTS'`)

* `TotalVolumeInLitresInvalid` (value: `'TOTAL_VOLUME_IN_LITRES_INVALID'`)

* `SkuDistributionRequiredButNotPossible` (value: `'SKU_DISTRIBUTION_REQUIRED_BUT_NOT_POSSIBLE'`)

* `CrossDockInDeliveryPointDisabledForSeller` (value: `'CROSS_DOCK_IN_DELIVERY_POINT_DISABLED_FOR_SELLER'`)

* `DuplicateSkusInRequest` (value: `'DUPLICATE_SKUS_IN_REQUEST'`)

* `CanNotCreateDraft` (value: `'CAN_NOT_CREATE_DRAFT'`)

* `DraftTotalsInvalidError` (value: `'DRAFT_TOTALS_INVALID_ERROR'`)

* `CanNotStartCalculation` (value: `'CAN_NOT_START_CALCULATION'`)

* `PickupIsNotAvailable` (value: `'PICKUP_IS_NOT_AVAILABLE'`)

* `DropOffNotCompatibleWithPickup` (value: `'DROP_OFF_NOT_COMPATIBLE_WITH_PICKUP'`)

* `Undefined` (value: `'UNDEFINED'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
