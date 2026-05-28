# V1FbpDraftDirectProductValidateResponseRejectedItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**barcode** | **string** | Штрихкод. | [optional] [default to undefined]
**icon_name** | **string** | Ссылка на изображение товара. | [optional] [default to undefined]
**name** | **string** | Наименование товара. | [optional] [default to undefined]
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул. | [optional] [default to undefined]
**quantity** | **number** | Количество товара. | [optional] [default to undefined]
**rejection_reasons** | [**Array&lt;V1BundleItemErrorEnum&gt;**](V1BundleItemErrorEnum.md) | Причины отклонения:    - &#x60;BUNDLE_ITEM_ERROR_UNSPECIFIED&#x60; — не определена;    - &#x60;OUT_OF_ASSORTMENT&#x60; — товар не найден;    - &#x60;INVALID&#x60; — товар не создан;    - &#x60;INCOMPATIBLE_WAREHOUSE&#x60; — неверный идентификатор склада;    - &#x60;INVALID_BARCODE&#x60; — не указан штрихкод;    - &#x60;MULTIPLICITY&#x60; — количество товара не кратно требуемой партии;    - &#x60;NO_PRICE&#x60; — не указана цена;    - &#x60;BANNED&#x60; — товар не доступен к продаже или поставке на выбранный склад;    - &#x60;ZERO_QUANTITY&#x60; — количество товаров в поставке равно 0;    - &#x60;QUANTITY_GREATER_THEN_MAX&#x60; — количество товаров одной SKU больше максимального значения.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**volume** | **number** | Объём товара. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectProductValidateResponseRejectedItem } from './api';

const instance: V1FbpDraftDirectProductValidateResponseRejectedItem = {
    barcode,
    icon_name,
    name,
    offer_id,
    quantity,
    rejection_reasons,
    sku,
    volume,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
