# OrderLabelDTO

Данные для печати ярлыка.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **number** | Идентификатор заказа. | [default to undefined]
**placesNumber** | **number** | Количество коробок в заказе. | [default to undefined]
**url** | **string** |  | [default to undefined]
**parcelBoxLabels** | [**Array&lt;ParcelBoxLabelDTO&gt;**](ParcelBoxLabelDTO.md) | Информация на ярлыке. | [default to undefined]

## Example

```typescript
import { OrderLabelDTO } from './api';

const instance: OrderLabelDTO = {
    orderId,
    placesNumber,
    url,
    parcelBoxLabels,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
