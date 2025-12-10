# ProvideOrderDigitalCodesRequest

Запрос на передачу ключей цифровых товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrderDigitalItemDTO&gt;**](OrderDigitalItemDTO.md) | Список проданных товаров.  Если в заказе есть несколько **одинаковых** товаров (например, несколько ключей к одной и той же подписке), передайте ключи в виде массива к этому товару. Параметр &#x60;id&#x60; у этих элементов должен быть один и тот же.  | [default to undefined]

## Example

```typescript
import { ProvideOrderDigitalCodesRequest } from './api';

const instance: ProvideOrderDigitalCodesRequest = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
