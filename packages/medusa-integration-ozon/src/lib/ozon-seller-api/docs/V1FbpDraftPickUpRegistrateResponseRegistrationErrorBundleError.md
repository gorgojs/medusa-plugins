# V1FbpDraftPickUpRegistrateResponseRegistrationErrorBundleError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Array&lt;V1BundleItemErrorEnum&gt;**](V1BundleItemErrorEnum.md) | Ошибки: - &#x60;BUNDLE_ITEM_ERROR_UNSPECIFIED&#x60; — не определена; - &#x60;OUT_OF_ASSORTMENT&#x60; — товара нет в ассортименте поставки; - &#x60;INVALID&#x60; — неверный статус; - &#x60;INCOMPATIBLE_WAREHOUSE&#x60; — неверный идентификатор склада; - &#x60;INVALID_BARCODE&#x60; — штрихкод не указан; - &#x60;MULTIPLICITY&#x60; — количество товара не кратно упаковке; - &#x60;NO_PRICE&#x60; — цена не указана; - &#x60;BANNED&#x60; — товар заблокирован; - &#x60;ZERO_QUANTITY&#x60; — количество товара не может быть 0; - &#x60;QUANTITY_GREATER_THEN_MAX&#x60; — превышено максимальное количество товара для одного SKU.  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { V1FbpDraftPickUpRegistrateResponseRegistrationErrorBundleError } from './api';

const instance: V1FbpDraftPickUpRegistrateResponseRegistrationErrorBundleError = {
    errors,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
