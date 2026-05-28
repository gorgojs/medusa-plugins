# OfferMappingErrorType

Типы ошибок и предупреждений:  * `UNKNOWN_CATEGORY` — указана неизвестная категория. * `INVALID_CATEGORY` — указана нелистовая категория. Укажите ту, которая не имеет дочерних категорий. * `EMPTY_MARKET_CATEGORY` — не указана категория Маркета при передаче характеристик категории. * `UNKNOWN_PARAMETER` — передана характеристика, которой нет среди характеристик категории. * `UNEXPECTED_BOOLEAN_VALUE` — вместо boolean-значения передано что-то другое. * `NUMBER_FORMAT` — передана строка, не обозначающая число, вместо числа. * `INVALID_UNIT_ID` — передана единица измерения, недопустимая для характеристики. * `INVALID_GROUP_ID_LENGTH` — в названии превышено допустимое значение символов — 255. * `INVALID_GROUP_ID_CHARACTERS` — переданы [недопустимые символы](*ascii-code). * `INVALID_PICKER_URL` — передана ссылка на изображение для миниатюры, которой нет в переданных ссылках на изображение товара. * `LOCKED_DIMENSIONS` — переданы габариты упаковки, которые нельзя изменить. * `INVALID_COMMODITY_CODE` — передан некорректный товарный код.  Проверить, какие категорийные характеристики доступны для заданной категории, и получить их настройки можно с помощью запроса [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters). 

## Enum

* `UnknownCategory` (value: `'UNKNOWN_CATEGORY'`)

* `InvalidCategory` (value: `'INVALID_CATEGORY'`)

* `EmptyMarketCategory` (value: `'EMPTY_MARKET_CATEGORY'`)

* `UnknownParameter` (value: `'UNKNOWN_PARAMETER'`)

* `UnexpectedBooleanValue` (value: `'UNEXPECTED_BOOLEAN_VALUE'`)

* `NumberFormat` (value: `'NUMBER_FORMAT'`)

* `InvalidUnitId` (value: `'INVALID_UNIT_ID'`)

* `InvalidGroupIdLength` (value: `'INVALID_GROUP_ID_LENGTH'`)

* `InvalidGroupIdCharacters` (value: `'INVALID_GROUP_ID_CHARACTERS'`)

* `InvalidPickerUrl` (value: `'INVALID_PICKER_URL'`)

* `LockedDimensions` (value: `'LOCKED_DIMENSIONS'`)

* `InvalidCommodityCode` (value: `'INVALID_COMMODITY_CODE'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
