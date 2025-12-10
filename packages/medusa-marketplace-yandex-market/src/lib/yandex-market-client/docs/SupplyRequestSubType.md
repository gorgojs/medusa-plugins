# SupplyRequestSubType

Подтип заявки:  * `DEFAULT` — поставка товаров на склад хранения или вывоз с него. * `XDOC` — поставка товаров через транзитный склад или вывоз с него. * `INVENTORYING_SUPPLY` — инвентаризация на складе по запросу магазина. * `INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER` — инвентаризация на складе по запросу склада. * `MOVEMENT_SUPPLY` — входящее перемещение между складами.      При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`. * `ADDITIONAL_SUPPLY` — дополнительная поставка непринятых товаров. * `VIRTUAL_DISTRIBUTION_CENTER` — родительская заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply). * `VIRTUAL_DISTRIBUTION_CENTER_CHILD` — дочерняя заявка при поставке товаров на склад хранения или [мультипоставке](*multisupply).      Для нее не возвращается `transitLocation`. * `FORCE_PLAN` — автоматическая утилизация по запросу склада. * `FORCE_PLAN_ANOMALY_PER_SUPPLY` — утилизация непринятых товаров. * `PLAN_BY_SUPPLIER` — утилизация по запросу магазина. * `ANOMALY_WITHDRAW` — вывоз непринятых товаров. * `FIX_LOST_INVENTORYING` — товары, которые не нашли после второй инвентаризации. * `OPER_LOST_INVENTORYING` — товары, которые не нашли после первой инвентаризации. * `MOVEMENT_WITHDRAW` — исходящее перемещение между складами.      При перемещении между складами создаются 2 заявки — `MOVEMENT_SUPPLY` и `MOVEMENT_WITHDRAW`. * `MISGRADING_SUPPLY` — пересортица в большую сторону. * `MISGRADING_WITHDRAW` — пересортица в меньшую сторону. * `MAN_UTIL` — ручная утилизация по запросу склада. * `WITHDRAW_AUTO_UTILIZATION` — автоматическая утилизация товаров в заявке на вывоз, когда истек срок их хранения. 

## Enum

* `Default` (value: `'DEFAULT'`)

* `Xdoc` (value: `'XDOC'`)

* `InventoryingSupply` (value: `'INVENTORYING_SUPPLY'`)

* `InventoryingSupplyWarehouseBasedPerSupplier` (value: `'INVENTORYING_SUPPLY_WAREHOUSE_BASED_PER_SUPPLIER'`)

* `MovementSupply` (value: `'MOVEMENT_SUPPLY'`)

* `AdditionalSupply` (value: `'ADDITIONAL_SUPPLY'`)

* `VirtualDistributionCenter` (value: `'VIRTUAL_DISTRIBUTION_CENTER'`)

* `VirtualDistributionCenterChild` (value: `'VIRTUAL_DISTRIBUTION_CENTER_CHILD'`)

* `ForcePlan` (value: `'FORCE_PLAN'`)

* `ForcePlanAnomalyPerSupply` (value: `'FORCE_PLAN_ANOMALY_PER_SUPPLY'`)

* `PlanBySupplier` (value: `'PLAN_BY_SUPPLIER'`)

* `AnomalyWithdraw` (value: `'ANOMALY_WITHDRAW'`)

* `FixLostInventorying` (value: `'FIX_LOST_INVENTORYING'`)

* `OperLostInventorying` (value: `'OPER_LOST_INVENTORYING'`)

* `MovementWithdraw` (value: `'MOVEMENT_WITHDRAW'`)

* `MisgradingSupply` (value: `'MISGRADING_SUPPLY'`)

* `MisgradingWithdraw` (value: `'MISGRADING_WITHDRAW'`)

* `ManUtil` (value: `'MAN_UTIL'`)

* `WithdrawAutoUtilization` (value: `'WITHDRAW_AUTO_UTILIZATION'`)

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
