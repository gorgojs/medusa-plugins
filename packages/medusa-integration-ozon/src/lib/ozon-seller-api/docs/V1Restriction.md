# V1Restriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**max_posting_weight** | **number** | Ограничение по максимальному весу в граммах. | [optional] [default to undefined]
**min_posting_weight** | **number** | Ограничение по минимальному весу в граммах. | [optional] [default to undefined]
**width** | **number** | Ограничение по ширине в сантиметрах. | [optional] [default to undefined]
**length** | **number** | Ограничение по длине в сантиметрах. | [optional] [default to undefined]
**height** | **number** | Ограничение по высоте в сантиметрах. | [optional] [default to undefined]
**max_posting_price** | **number** | Ограничение по максимальной стоимости отправления в рублях. | [optional] [default to undefined]
**min_posting_price** | **number** | Ограничение по минимальной стоимости отправления в рублях. | [optional] [default to undefined]

## Example

```typescript
import { V1Restriction } from './api';

const instance: V1Restriction = {
    posting_number,
    max_posting_weight,
    min_posting_weight,
    width,
    length,
    height,
    max_posting_price,
    min_posting_price,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
