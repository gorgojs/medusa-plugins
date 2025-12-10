# CdekCityObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fiasGuid** | **string** | Код адресного объекта в ФИАС | [optional] [default to undefined]
**fullName** | **string** | Полное название города с регионом | [optional] [default to undefined]
**cityUuid** | **string** | UUID записи | [optional] [default to undefined]
**cdekId** | **number** | Код города по базе СДЭК | [optional] [default to undefined]
**cityName** | **string** | Название города из системы СДЭК | [optional] [default to undefined]
**oblName** | **string** | Название региона | [optional] [default to undefined]
**countryCode** | **string** | Код страны | [optional] [default to undefined]
**codCostLimit** | **string** | Ограничение на сумму наложенного платежа | [optional] [default to undefined]

## Example

```typescript
import { CdekCityObject } from './api';

const instance: CdekCityObject = {
    fiasGuid,
    fullName,
    cityUuid,
    cdekId,
    cityName,
    oblName,
    countryCode,
    codCostLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
