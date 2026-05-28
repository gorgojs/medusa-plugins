# SupplyCheckIsValidDistributionRule

Правило совпадения составов грузомест с составом поставки.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_distributed_sku** | **number** | Количество SKU, которые совпадают с поставкой. | [optional] [default to undefined]
**count_sku_total** | **number** | Общее количество SKU. | [optional] [default to undefined]
**is_applicable** | **boolean** | &#x60;true&#x60;, если правило применимо к текущей поставке.  | [optional] [default to undefined]
**percents_int** | **number** | Процент совпадения состава грузомест с составом поставки. | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если состав грузомест совпадает с составом поставки.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckIsValidDistributionRule } from './api';

const instance: SupplyCheckIsValidDistributionRule = {
    count_distributed_sku,
    count_sku_total,
    is_applicable,
    percents_int,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
