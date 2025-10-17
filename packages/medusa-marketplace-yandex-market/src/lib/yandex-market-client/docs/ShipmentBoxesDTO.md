# ShipmentBoxesDTO

В ответе Маркет возвращает переданный вами список грузовых мест. Не обращайте на это поле внимания. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxes** | [**Array&lt;ParcelBoxDTO&gt;**](ParcelBoxDTO.md) | Список грузовых мест. По его длине Маркет определил количество мест.  | [default to undefined]

## Example

```typescript
import { ShipmentBoxesDTO } from './api';

const instance: ShipmentBoxesDTO = {
    boxes,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
