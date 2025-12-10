# WaybillItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerKey** | **string** | Ключ службы доставки | [optional] [default to undefined]
**file** | **string** | Путь к накладной | [optional] [default to undefined]
**orderIds** | **Array&lt;number&gt;** | Массив ID заказов, для которой сгенерирована накладная | [optional] [default to undefined]

## Example

```typescript
import { WaybillItem } from './api';

const instance: WaybillItem = {
    providerKey,
    file,
    orderIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
