# SupplyCheckPackageUnitWithDistributionRule

Правило заполнения состава грузомест.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_all** | **number** | Общее количество грузомест. | [optional] [default to undefined]
**count_with_distribution** | **number** | Количество заполненных грузомест. | [optional] [default to undefined]
**is_applicable** | **boolean** | &#x60;true&#x60;, если правило применимо к текущей поставке.  | [optional] [default to undefined]
**is_required** | **boolean** | &#x60;true&#x60;, если правило обязательно для текущей поставки.  | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если указаны составы для всех грузомест.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckPackageUnitWithDistributionRule } from './api';

const instance: SupplyCheckPackageUnitWithDistributionRule = {
    count_all,
    count_with_distribution,
    is_applicable,
    is_required,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
