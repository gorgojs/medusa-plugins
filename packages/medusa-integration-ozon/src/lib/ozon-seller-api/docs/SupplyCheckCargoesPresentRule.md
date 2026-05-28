# SupplyCheckCargoesPresentRule

Правило указания грузомест.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargo_count_per_type** | [**Array&lt;CargoesPresentRuleCargoCountPerType&gt;**](CargoesPresentRuleCargoCountPerType.md) | Количество грузомест каждого типа. | [optional] [default to undefined]
**count** | **number** | Общее количество грузомест. | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если грузоместа указаны.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckCargoesPresentRule } from './api';

const instance: SupplyCheckCargoesPresentRule = {
    cargo_count_per_type,
    count,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
