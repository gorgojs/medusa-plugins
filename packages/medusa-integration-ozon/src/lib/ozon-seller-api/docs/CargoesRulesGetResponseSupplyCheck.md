# CargoesRulesGetResponseSupplyCheck

Чек-лист правил заполнения грузомест.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cargoes_presents_rule** | [**SupplyCheckCargoesPresentRule**](SupplyCheckCargoesPresentRule.md) |  | [optional] [default to undefined]
**edit_deadline_expire_rule** | [**SupplyCheckEditDeadlineExpireRule**](SupplyCheckEditDeadlineExpireRule.md) |  | [optional] [default to undefined]
**expire_dates_presented_rule** | [**SupplyCheckExpireDatePresentedRule**](SupplyCheckExpireDatePresentedRule.md) |  | [optional] [default to undefined]
**is_valid_distribution_rule** | [**SupplyCheckIsValidDistributionRule**](SupplyCheckIsValidDistributionRule.md) |  | [optional] [default to undefined]
**package_units_with_distribution_rule** | [**SupplyCheckPackageUnitWithDistributionRule**](SupplyCheckPackageUnitWithDistributionRule.md) |  | [optional] [default to undefined]
**placement_zones_rule** | [**SupplyCheckPlacementZoneRule**](SupplyCheckPlacementZoneRule.md) |  | [optional] [default to undefined]
**supply_id** | **number** | Идентификатор поставки. | [optional] [default to undefined]

## Example

```typescript
import { CargoesRulesGetResponseSupplyCheck } from './api';

const instance: CargoesRulesGetResponseSupplyCheck = {
    cargoes_presents_rule,
    edit_deadline_expire_rule,
    expire_dates_presented_rule,
    is_valid_distribution_rule,
    package_units_with_distribution_rule,
    placement_zones_rule,
    supply_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
