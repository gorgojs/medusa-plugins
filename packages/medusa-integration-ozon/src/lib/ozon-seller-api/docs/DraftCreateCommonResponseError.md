# DraftCreateCommonResponseError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | [**ErrorErrorMessageEnum**](ErrorErrorMessageEnum.md) |  | [optional] [default to undefined]
**error_reasons** | [**Array&lt;ErrorErrorReasonEnum&gt;**](ErrorErrorReasonEnum.md) | Причина ошибки: - &#x60;UNSPECIFIED&#x60; — не определена; - &#x60;ALL_ITEMS_COUNT_INVALID&#x60; — в товарном составе больше 5000 SKU; - &#x60;ALL_ITEMS_VOLUME_INVALID&#x60; — в товарном составе объём товаров больше 100 000 литров; - &#x60;ALL_BUNDLES_EMPTY&#x60; — товарные составы пустые; - &#x60;HAS_EMPTY_BUNDLE&#x60; — минимум 1 товарный состав в черновике пустой; - &#x60;DISABLED_FOR_SELLER&#x60; — отгрузка курьером отключена для продавца; - &#x60;NO_ACTIVE_SELLER_WAREHOUSE&#x60; — нет активного склада продавца; - &#x60;INVALID_SELLER_WAREHOUSE&#x60; — склад продавца недоступен.  | [optional] [default to undefined]
**items_validation** | [**Array&lt;DraftCreateCommonResponseErrorItemsValidation&gt;**](DraftCreateCommonResponseErrorItemsValidation.md) | Ошибки валидации. | [optional] [default to undefined]
**macrolocal_cluster_ids** | **Array&lt;string&gt;** | Список идентификаторов кластера. | [optional] [default to undefined]
**message** | **string** | Сообщение об ошибке. | [optional] [default to undefined]
**skus** | **Array&lt;string&gt;** | Список идентификаторов товаров — SKU. | [optional] [default to undefined]

## Example

```typescript
import { DraftCreateCommonResponseError } from './api';

const instance: DraftCreateCommonResponseError = {
    error_message,
    error_reasons,
    items_validation,
    macrolocal_cluster_ids,
    message,
    skus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
