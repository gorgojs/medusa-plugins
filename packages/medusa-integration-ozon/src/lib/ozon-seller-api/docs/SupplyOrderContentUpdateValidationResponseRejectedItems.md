# SupplyOrderContentUpdateValidationResponseRejectedItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод товара. | [optional] [default to undefined]
**name** | **string** | Название товара. | [optional] [default to undefined]
**offer_id** | **string** | Артикул товара. | [optional] [default to undefined]
**origin_quantity** | **number** | Исходное количество товара. | [optional] [default to undefined]
**origin_total_volume_in_litres** | **number** | Исходное количество товара в литрах. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**rejection_reason** | [**Array&lt;RejectedItemsRejectionReasonEnum&gt;**](RejectedItemsRejectionReasonEnum.md) | Причина отклонения товара:   - &#x60;UNSPECIFIED&#x60; — не определена;   - &#x60;UNKNOWN&#x60; — неизвестный тип;   - &#x60;OUT_OF_ASSORTMENT&#x60; — товара нет в ассортименте поставки;   - &#x60;INVALID&#x60; — некорректные данные по товару;   - &#x60;INCOMPATIBLE_WAREHOUSE&#x60; — товар нельзя поставить на выбранный склад;   - &#x60;EMPTY_BARCODE&#x60; — штрихкод не указан;   - &#x60;EMPTY_PS_ATTRIBUTE&#x60; — не заполнен обязательный атрибут;   - &#x60;MULTIPLICITY&#x60; — количество товара не кратно упаковке;   - &#x60;NO_PRICE&#x60; — цена не указана;   - &#x60;INVALID_ITEM_COUNT_MAX&#x60; — превышено максимальное количество;   - &#x60;INVALID_ITEM_COUNT_ZERO&#x60; — количество должно быть больше 0;   - &#x60;INCOMPATIBLE_SHIPMENT_TYPE&#x60; — товар недоступен для выбранного типа отгрузки;   - &#x60;ECONOM_QUANT_IS_NOT_FROZEN&#x60; — квант для тарифа «Эконом» не заморожен;   - &#x60;QUANTITY_NOT_MULTIPLE_BY_QUANT&#x60; — количество товара не кратно кванту;   - &#x60;INVALID_QUANT_VALUE&#x60; — некорректное значение кванта;   - &#x60;JEWELRY_FORBIDDEN_FOR_ECONOM&#x60; — ювелирные изделия недоступны для тарифа «Эконом»;   - &#x60;NON_UNIQUE_ECONOM_ITEM_IN_REQUEST&#x60; — в запросе есть дубликаты SKU для тарифа «Эконом»;   - &#x60;NON_UNIQUE_ECONOM_ITEM_IN_DESTINATION_BUNDLE&#x60; — в грузоместе есть дубликаты SKU для тарифа «Эконом»;   - &#x60;SKU_REJECTED_BY_ACCEPTANCE_RESTRICTIONS&#x60; — товар не принимается по ограничениям приёмки;   - &#x60;SKU_WITH_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар с тегом электронной ТТН недоступен;   - &#x60;SKU_WITHOUT_ETTN_REQUIRED_TAG_NOT_ALLOWED&#x60; — товар без тега электронной ТТН;   - &#x60;SKU_WITH_TRACEABLE_TAG_NOT_ALLOWED&#x60; — товары с тегом прослеживаемости недоступны;   - &#x60;EMPTY_CLUSTER&#x60; — не указан кластер;   - &#x60;SKU_IS_RESTRICTED&#x60; — товар запрещён к поставке;   - &#x60;SKU_WITH_UTD_REQUIRED_TAG_NOT_ALLOWED&#x60; — товары с тегом УПД недоступны.  | [optional] [default to undefined]
**restrictions** | [**RejectedItemsRestrictions**](RejectedItemsRestrictions.md) |  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**total_volume_in_litres** | **number** | Объём всех товаров в литрах. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderContentUpdateValidationResponseRejectedItems } from './api';

const instance: SupplyOrderContentUpdateValidationResponseRejectedItems = {
    barcode,
    name,
    offer_id,
    origin_quantity,
    origin_total_volume_in_litres,
    quantity,
    rejection_reason,
    restrictions,
    sku,
    total_volume_in_litres,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
