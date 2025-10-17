# Place


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **number** | Высота единицы товара в сантиметрах | [optional] [default to undefined]
**length** | **number** | Длина единицы товара в сантиметрах | [optional] [default to undefined]
**width** | **number** | Ширина единицы товара в сантиметрах | [optional] [default to undefined]
**weight** | **number** | Вес единицы товара в граммах | [default to undefined]
**placeNumber** | **string** | Номер места в информационной системе клиента | [optional] [default to undefined]
**barcode** | **string** | ШК места | [optional] [default to undefined]
**items** | [**Array&lt;Item&gt;**](Item.md) |  | [default to undefined]

## Example

```typescript
import { Place } from './api';

const instance: Place = {
    height,
    length,
    width,
    weight,
    placeNumber,
    barcode,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
