# OfferContentErrorType

Типы ошибок и предупреждений:  * `OFFER_NOT_FOUND` — такого товара нет в каталоге. * `UNKNOWN_CATEGORY` — указана неизвестная категория. * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий. * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории. * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое. * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа. * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики. * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255. * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code).  Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters). 

## Enum

* `OfferNotFound` (value: `'OFFER_NOT_FOUND'`)

* `UnknownCategory` (value: `'UNKNOWN_CATEGORY'`)

* `InvalidCategory` (value: `'INVALID_CATEGORY'`)

* `UnknownParameter` (value: `'UNKNOWN_PARAMETER'`)

* `UnexpectedBooleanValue` (value: `'UNEXPECTED_BOOLEAN_VALUE'`)

* `NumberFormat` (value: `'NUMBER_FORMAT'`)

* `InvalidUnitId` (value: `'INVALID_UNIT_ID'`)

* `InvalidGroupIdLength` (value: `'INVALID_GROUP_ID_LENGTH'`)

* `InvalidGroupIdCharacters` (value: `'INVALID_GROUP_ID_CHARACTERS'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
