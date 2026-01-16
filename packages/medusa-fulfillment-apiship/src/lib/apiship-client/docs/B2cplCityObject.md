# B2cplCityObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**region** | **string** | Регион/область | [optional] [default to undefined]
**residence** | **string** | Населенный пункт | [optional] [default to undefined]
**zipFirst** | **string** | Начало диапазона почтовых индексов | [optional] [default to undefined]
**zipLast** | **string** | Конец диапазона почтовых индексов | [optional] [default to undefined]
**transportDays** | **number** | Длительность магистральной перевозки между Москвой и городом получателем в рабочих днях | [optional] [default to undefined]
**flagCourier** | **string** | Возможность курьерской доставки в этом диапазоне | [optional] [default to undefined]
**flagPvz** | **string** | Возможность ПВЗ доставки в этом диапазоне | [optional] [default to undefined]
**flagAvia** | **string** | Возможность доставки авиа. 0 – нет авиа доставки, 1 – только авиа доставка, 2 – возможна как наземная, так и авиа доставки | [optional] [default to undefined]
**cityGuid** | **string** | ФИАС для города/села/поселка | [optional] [default to undefined]

## Example

```typescript
import { B2cplCityObject } from './api';

const instance: B2cplCityObject = {
    id,
    region,
    residence,
    zipFirst,
    zipLast,
    transportDays,
    flagCourier,
    flagPvz,
    flagAvia,
    cityGuid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
