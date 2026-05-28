# V1FbpDraftDirectRegistrateResponseRegistrationErrorBundleError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1BundleItemErrorEnum&gt;**](V1BundleItemErrorEnum.md) | Ошибка:    - &#x60;BUNDLE_ITEM_ERROR_UNSPECIFIED&#x60; — не определена;    - &#x60;OUT_OF_ASSORTMENT&#x60; — товар не найден;    - &#x60;INVALID&#x60; — товар не создан;    - &#x60;INCOMPATIBLE_WAREHOUSE&#x60; — неверный идентификатор склада;    - &#x60;INVALID_BARCODE&#x60; — не указан штрихкод;    - &#x60;MULTIPLICITY&#x60; — количество товара не кратно требуемой партии;    - &#x60;NO_PRICE&#x60; — не указана цена;    - &#x60;BANNED&#x60; — товар не доступен к продаже или поставке на выбранный склад;    - &#x60;ZERO_QUANTITY&#x60; — количество товаров в поставке равно 0;    - &#x60;QUANTITY_GREATER_THEN_MAX&#x60; — количество товаров одной SKU больше максимального значения.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftDirectRegistrateResponseRegistrationErrorBundleError } from './api';

const instance: V1FbpDraftDirectRegistrateResponseRegistrationErrorBundleError = {
    errors,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
