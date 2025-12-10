# CisSubstatusType

Детализация ошибки при проверке кода маркировки в системе :no-translate[«Честный ЗНАК»]:  * `WRONG_OWNER_INN` — проверка не пройдена. ИНН владельца кода отличается от ИНН продавца.  * `CIS_VALIDATION_ERROR` — проверка не пройдена.  * `CIS_GTIN_NOT_FOUND` — код маркировки не содержит [:no-translate[GTIN]](:no-translate[*gtin]).  * `CIS_SERIAL_NUMBER_NOT_FOUND` — код маркировки не содержит серийный номер.  * `INVALID_SYMBOLS_FOUND` — код маркировки содержит недопустимые символы.  * `CRYPTO_TAIL_FORMAT_MISMATCH_CIS_TYPE` — формат криптоподписи не соответствует типу кода маркировки.  * `INVALID_CRYPTO_TAIL` — криптоподпись не валидна.  * `INVALID_CRYPTO_KEY` — криптоключ не валиден.  * `VERIFICATION_FAILED_IN_EMITTER_COUNTRY` — код маркировки не прошел верификацию в стране эмитента.  * `UNSUPPORTED_AI_FOUND` — найденные в коде маркировки AI не поддерживаются.  * `CIS_NOT_FOUND_IN_GIS_MT` — код маркировки не найден в :no-translate[ГИС МТ].  * `NOT_PLACED_ON_MARKET` — код маркировки не введен в оборот.  * `NOT_PRINTED_ON_PACKAGE` — код маркировки не нанесен на упаковку.  * `EXPIRED_ITEM` — у маркированного товара истек срок годности.  * `SALE_BLOCKED_BY_OGB` — розничная продажа продукции заблокирована по решению ОГВ.  * `ITEM_SOLD` — маркированный товар был продан.  Возвращается только для статуса `INVALID`. 

## Enum

* `WrongOwnerInn` (value: `'WRONG_OWNER_INN'`)

* `CisValidationError` (value: `'CIS_VALIDATION_ERROR'`)

* `CisGtinNotFound` (value: `'CIS_GTIN_NOT_FOUND'`)

* `CisSerialNumberNotFound` (value: `'CIS_SERIAL_NUMBER_NOT_FOUND'`)

* `InvalidSymbolsFound` (value: `'INVALID_SYMBOLS_FOUND'`)

* `CryptoTailFormatMismatchCisType` (value: `'CRYPTO_TAIL_FORMAT_MISMATCH_CIS_TYPE'`)

* `InvalidCryptoTail` (value: `'INVALID_CRYPTO_TAIL'`)

* `InvalidCryptoKey` (value: `'INVALID_CRYPTO_KEY'`)

* `VerificationFailedInEmitterCountry` (value: `'VERIFICATION_FAILED_IN_EMITTER_COUNTRY'`)

* `UnsupportedAiFound` (value: `'UNSUPPORTED_AI_FOUND'`)

* `CisNotFoundInGisMt` (value: `'CIS_NOT_FOUND_IN_GIS_MT'`)

* `NotPlacedOnMarket` (value: `'NOT_PLACED_ON_MARKET'`)

* `NotPrintedOnPackage` (value: `'NOT_PRINTED_ON_PACKAGE'`)

* `ExpiredItem` (value: `'EXPIRED_ITEM'`)

* `SaleBlockedByOgb` (value: `'SALE_BLOCKED_BY_OGB'`)

* `ItemSold` (value: `'ITEM_SOLD'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
