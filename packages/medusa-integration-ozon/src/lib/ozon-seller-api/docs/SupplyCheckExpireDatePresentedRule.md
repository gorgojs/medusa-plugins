# SupplyCheckExpireDatePresentedRule

Правило указания сроков годности для товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_sku_with_expiration** | **number** | Количество SKU с корректным сроком годности. | [optional] [default to undefined]
**count_sku_with_expiration_filled** | **number** | Количество SKU, для которых обязателен срок годности. | [optional] [default to undefined]
**is_applicable** | **boolean** | &#x60;true&#x60;, если правило применимо к текущей поставке.  | [optional] [default to undefined]
**is_required** | **boolean** | &#x60;true&#x60;, если правило обязательно для текущей поставки.  | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если сроки годности указаны корректно.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckExpireDatePresentedRule } from './api';

const instance: SupplyCheckExpireDatePresentedRule = {
    count_sku_with_expiration,
    count_sku_with_expiration_filled,
    is_applicable,
    is_required,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
