# SupplyRequestDocumentType

Тип документа:  * **Документы, которые загружает магазин**   * `SUPPLY` — список товаров.   * `ADDITIONAL_SUPPLY` — список товаров в дополнительной поставке.   * `VIRTUAL_DISTRIBUTION_CENTER_SUPPLY` — список товаров в [мультипоставке](*multisupply).   * `TRANSFER` — список товаров для утилизации.   * `WITHDRAW` — список товаров для вывоза.  * **Поставка товаров**   * `VALIDATION_ERRORS` — ошибки по товарам в поставке.   * `CARGO_UNITS` — ярлыки для грузомест.  * **Дополнительная поставка и непринятые товары**   * `ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS` — товары, которые подходят для дополнительной поставки.   * `ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS` — вывоз непринятых товаров.  * **Маркировка товаров**   * `INBOUND_UTD` — входящий УПД.   * `OUTBOUND_UTD` — исходящий УПД.   * `IDENTIFIERS` — коды маркировки товаров.   * `CIS_FACT` — принятые товары с кодами маркировки.   * `ITEMS_WITH_CISES` — товары, для которых нужна маркировка.   * `REPORT_OF_WITHDRAW_WITH_CISES` — маркированные товары для вывоза со склада.   * `SECONDARY_ACCEPTANCE_CISES` — маркированные товары, которые приняты после вторичной приемки.   * `RNPT_FACT` — принятые товары с регистрационным номером партии товара (РНПТ).  * **Акты**   * `ACT_OF_WITHDRAW` — акт возврата.   * `ANOMALY_CONTAINERS_WITHDRAW_ACT` — акт изъятия непринятого товара.   * `ACT_OF_WITHDRAW_FROM_STORAGE` — акт списания с ответственного хранения.   * `ACT_OF_RECEPTION_TRANSFER` — акт приема-передачи.   * `ACT_OF_DISCREPANCY` — акт о расхождениях.   * `SECONDARY_RECEPTION_ACT` — акт вторичной приемки. 

## Enum

* `Supply` (value: `'SUPPLY'`)

* `AdditionalSupply` (value: `'ADDITIONAL_SUPPLY'`)

* `VirtualDistributionCenterSupply` (value: `'VIRTUAL_DISTRIBUTION_CENTER_SUPPLY'`)

* `Transfer` (value: `'TRANSFER'`)

* `InboundUtd` (value: `'INBOUND_UTD'`)

* `OutboundUtd` (value: `'OUTBOUND_UTD'`)

* `AdditionalSupplyAcceptableGoods` (value: `'ADDITIONAL_SUPPLY_ACCEPTABLE_GOODS'`)

* `AdditionalSupplyUnacceptableGoods` (value: `'ADDITIONAL_SUPPLY_UNACCEPTABLE_GOODS'`)

* `ValidationErrors` (value: `'VALIDATION_ERRORS'`)

* `Withdraw` (value: `'WITHDRAW'`)

* `ActOfWithdraw` (value: `'ACT_OF_WITHDRAW'`)

* `AnomalyContainersWithdrawAct` (value: `'ANOMALY_CONTAINERS_WITHDRAW_ACT'`)

* `ActOfWithdrawFromStorage` (value: `'ACT_OF_WITHDRAW_FROM_STORAGE'`)

* `ActOfReceptionTransfer` (value: `'ACT_OF_RECEPTION_TRANSFER'`)

* `ActOfDiscrepancy` (value: `'ACT_OF_DISCREPANCY'`)

* `SecondaryReceptionAct` (value: `'SECONDARY_RECEPTION_ACT'`)

* `CargoUnits` (value: `'CARGO_UNITS'`)

* `Identifiers` (value: `'IDENTIFIERS'`)

* `CisFact` (value: `'CIS_FACT'`)

* `ItemsWithCises` (value: `'ITEMS_WITH_CISES'`)

* `ReportOfWithdrawWithCises` (value: `'REPORT_OF_WITHDRAW_WITH_CISES'`)

* `SecondaryAcceptanceCises` (value: `'SECONDARY_ACCEPTANCE_CISES'`)

* `RnptFact` (value: `'RNPT_FACT'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
