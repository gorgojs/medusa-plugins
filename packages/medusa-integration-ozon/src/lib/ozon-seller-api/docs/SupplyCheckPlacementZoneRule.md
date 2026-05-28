# SupplyCheckPlacementZoneRule

Правило распределения товаров в грузоместах по зонам размещения.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_cargoes_all** | **number** | Количество грузомест. | [optional] [default to undefined]
**count_cargoes_with_mono_placement_zone** | **number** | Количество грузомест с распределением по зонам размещения. | [optional] [default to undefined]
**is_applicable** | **boolean** | &#x60;true&#x60;, если правило применимо к текущей поставке.  | [optional] [default to undefined]
**satisfied** | **boolean** | &#x60;true&#x60;, если товары во всех грузоместах распределены по зонам размещения.  | [optional] [default to undefined]

## Example

```typescript
import { SupplyCheckPlacementZoneRule } from './api';

const instance: SupplyCheckPlacementZoneRule = {
    count_cargoes_all,
    count_cargoes_with_mono_placement_zone,
    is_applicable,
    satisfied,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
