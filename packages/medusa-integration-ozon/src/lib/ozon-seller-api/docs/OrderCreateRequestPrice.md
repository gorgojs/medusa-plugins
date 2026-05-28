# OrderCreateRequestPrice

Цена товара. Чтобы отобразить покупателю бесплатную доставку, не передавайте объект.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **string** | Код валюты. | [optional] [default to undefined]
**nanos** | **number** | Часть стоимости в копейках. | [optional] [default to undefined]
**units** | **number** | Часть стоимости в рублях. | [optional] [default to undefined]

## Example

```typescript
import { OrderCreateRequestPrice } from './api';

const instance: OrderCreateRequestPrice = {
    currency_code,
    nanos,
    units,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
