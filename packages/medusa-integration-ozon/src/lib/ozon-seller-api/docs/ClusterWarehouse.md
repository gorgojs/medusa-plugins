# ClusterWarehouse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_status** | [**WarehouseAvailabilityStatus**](WarehouseAvailabilityStatus.md) |  | [optional] [default to undefined]
**bundle_id** | **string** | Идентификатор товарного состава. | [optional] [default to undefined]
**restricted_bundle_id** | **string** | Комплект товаров, которые не попадают в поставку. Используйте значение параметра в методе [/v1/supply-order/bundle](#operation/SupplyOrderBundle), чтобы получить подробную информацию. | [optional] [default to undefined]
**storage_warehouse** | [**WarehouseStorageWarehouse**](WarehouseStorageWarehouse.md) |  | [optional] [default to undefined]
**supply_tags** | [**Array&lt;WarehouseSupplyTagEnum&gt;**](WarehouseSupplyTagEnum.md) | Метки товаров в заявке на поставку:  - &#x60;UNSPECIFIED&#x60; — не определена;  - &#x60;TRACEABLE&#x60; — товар с признаком прослеживаемости;  - &#x60;ETTN_REQUIRED&#x60; — товар, для которого необходима электронная ТТН;  - &#x60;EVSD_REQUIRED&#x60; — товар с сертификацией «Меркурий»;  - &#x60;MARKING_REQUIRED&#x60; — товар с обязательной маркировкой «Честный ЗНАК»;  - &#x60;MARKING_POSSIBLE&#x60; — товар с возможной маркировкой «Честный ЗНАК»;  - &#x60;JEWELRY&#x60; — товар с признаком ювелирного изделия;  - &#x60;FREEZE_STOCK_FOR_MARKING_AFTER_ACCEPTANCE&#x60; — заморозка стока для поставок, в которых есть маркируемые товары и не был передан УПД;  - &#x60;UTD_REQUIRED&#x60; — товар с обязательным УПД;  - &#x60;UNDEFINED&#x60; — неизвестная.  | [optional] [default to undefined]
**total_rank** | **number** | Ранг склада в кластере. | [optional] [default to undefined]
**total_score** | **number** | Рейтинг склада. | [optional] [default to undefined]

## Example

```typescript
import { ClusterWarehouse } from './api';

const instance: ClusterWarehouse = {
    availability_status,
    bundle_id,
    restricted_bundle_id,
    storage_warehouse,
    supply_tags,
    total_rank,
    total_score,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
