# StatusEnum

Статус изменения скидки от количества. Возможные значения: - `ERROR` — ошибка при изменении скидки. Вызовите метод [/v1/product/stairway-discount/by-quantity/set](#operation/ProductAPI_SetProductStairwayDiscountByQuantity) ещё раз. - `IN_PROCESS` — изменение в процессе. - `SUCCESS` — изменение скидки применено к товару. 

## Enum

* `InProcess` (value: `'IN_PROCESS'`)

* `Error` (value: `'ERROR'`)

* `Success` (value: `'SUCCESS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
