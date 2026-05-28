# SupplyRequestReferenceType

Тип связи между двумя заявками:  * `VIRTUAL_DISTRIBUTION` — [мультипоставка](*multisupply).  * `WITHDRAW` — вывоз непринятых товаров.      Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ANOMALY_WITHDRAW`.  * `UTILIZATION` — утилизация непринятых товаров.      Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `FORCE_PLAN_ANOMALY_PER_SUPPLY`.  * `ADDITIONAL_SUPPLY` — дополнительная поставка.      Подтипы заявки: `DEFAULT`, `XDOC`, `VIRTUAL_DISTRIBUTION_CENTER_CHILD` и `ADDITIONAL_SUPPLY`. 

## Enum

* `VirtualDistribution` (value: `'VIRTUAL_DISTRIBUTION'`)

* `Withdraw` (value: `'WITHDRAW'`)

* `Utilization` (value: `'UTILIZATION'`)

* `AdditionalSupply` (value: `'ADDITIONAL_SUPPLY'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
