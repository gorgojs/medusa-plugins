# ItemValidationErrorType

Тип ошибки:   - `SUPPLY_ITEM_NOT_FOUND` — товар не найден;   - `DUPLICATED_SUPPLY_ITEM` — найден дубликат товара;   - `BEFORE_DEADLINE` — некорректный срок годности;   - `SAME_BARCODES` — у разных SKU одинаковые штрихкоды;   - `SAME_ARTICLES` — у разных SKU одинаковые артикулы;   - `NOT_UNIQUE_SKU_BY_PRODUCT` — одинаковый SKU в грузоместе используется для разных товаров;   - `QUANTITY_NOT_DIVISIBLE_BY_QUANT` — количество SKU в грузоместе не кратно кванту;   - `NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO` — в грузоместе отсутствует палетная SKU;   - `NOT_ONE_QUANT_PALLET_SKU` — в квантовом палетном грузоместе должен быть только один квант;   - `NOT_ECONOM_SKU` — в эконом-поставке указан не эконом-SKU;   - `QUANTITY_LESS_ONE` — количество SKU в эконом-поставке меньше 1;   - `SUPPLY_ITEM_WITH_QUANT_NOT_FOUND` — товар не найден по артикулу, штрихкоду и размеру кванта. 

## Enum

* `SupplyItemNotFound` (value: `'SUPPLY_ITEM_NOT_FOUND'`)

* `DuplicatedSupplyItem` (value: `'DUPLICATED_SUPPLY_ITEM'`)

* `BeforeDeadline` (value: `'BEFORE_DEADLINE'`)

* `SameBarcodes` (value: `'SAME_BARCODES'`)

* `SameArticles` (value: `'SAME_ARTICLES'`)

* `NotUniqueSkuByProduct` (value: `'NOT_UNIQUE_SKU_BY_PRODUCT'`)

* `QuantityNotDivisibleByQuant` (value: `'QUANTITY_NOT_DIVISIBLE_BY_QUANT'`)

* `NotSinglePalletSkuInPalletCargo` (value: `'NOT_SINGLE_PALLET_SKU_IN_PALLET_CARGO'`)

* `NotOneQuantPalletSku` (value: `'NOT_ONE_QUANT_PALLET_SKU'`)

* `NotEconomSku` (value: `'NOT_ECONOM_SKU'`)

* `QuantityLessOne` (value: `'QUANTITY_LESS_ONE'`)

* `SupplyItemWithQuantNotFound` (value: `'SUPPLY_ITEM_WITH_QUANT_NOT_FOUND'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
