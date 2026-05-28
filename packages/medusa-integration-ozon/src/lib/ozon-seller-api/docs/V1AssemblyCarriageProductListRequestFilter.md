# V1AssemblyCarriageProductListRequestFilter

Фильтр.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carriage_id** | **number** | Идентификатор перевозки. | [optional] [default to undefined]
**cutoff_from** | **string** | Фильтр по времени, до которого продавцу нужно собрать заказ. Начало периода.  Формат: &#x60;YYYY-MM-DDThh:mm:ss.mcsZ&#x60;. Пример: &#x60;2020-03-18T07:34:50.359Z&#x60;.  | [optional] [default to undefined]
**cutoff_to** | **string** | Фильтр по времени, до которого продавцу нужно собрать заказ. Конец периода.  Формат: &#x60;YYYY-MM-DDThh:mm:ss.mcsZ&#x60;. Пример: &#x60;2020-03-18T07:34:50.359Z&#x60;.  | [optional] [default to undefined]
**delivery_method_id** | **number** | Идентификатор метода доставки. Можно получить с помощью метода [/v1/delivery-method/list](#operation/WarehouseAPI_DeliveryMethodList). | [optional] [default to undefined]

## Example

```typescript
import { V1AssemblyCarriageProductListRequestFilter } from './api';

const instance: V1AssemblyCarriageProductListRequestFilter = {
    carriage_id,
    cutoff_from,
    cutoff_to,
    delivery_method_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
