# LogisticPointDimensionRestrictionsDTO

Ограничения по размеру одного товара.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**weight** | **number** | Максимальный вес в граммах. | [default to undefined]
**height** | **number** | Максимальная высота в сантиметрах. | [default to undefined]
**width** | **number** | Максимальная ширина в сантиметрах. | [default to undefined]
**length** | **number** | Максимальная длина в сантиметрах. | [default to undefined]
**dimensionsSum** | **number** | Максимальная сумма измерений в сантиметрах. | [default to undefined]

## Example

```typescript
import { LogisticPointDimensionRestrictionsDTO } from './api';

const instance: LogisticPointDimensionRestrictionsDTO = {
    weight,
    height,
    width,
    length,
    dimensionsSum,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
