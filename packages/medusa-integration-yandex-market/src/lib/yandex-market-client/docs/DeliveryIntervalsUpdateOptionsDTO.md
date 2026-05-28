# DeliveryIntervalsUpdateOptionsDTO

Доступные интервалы для курьерской доставки.  Возвращается только для типа изменения `UPDATE_DELIVERY_INTERVAL`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableDeliveryIntervals** | [**Array&lt;DeliveryIntervalsUpdateOptionDTO&gt;**](DeliveryIntervalsUpdateOptionDTO.md) | Интервалы дат и времени.  Если доступных интервалов нет, возвращается пустой массив.  | [default to undefined]

## Example

```typescript
import { DeliveryIntervalsUpdateOptionsDTO } from './api';

const instance: DeliveryIntervalsUpdateOptionsDTO = {
    availableDeliveryIntervals,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
