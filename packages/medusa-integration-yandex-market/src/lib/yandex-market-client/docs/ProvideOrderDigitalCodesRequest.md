# ProvideOrderDigitalCodesRequest

Запрос на передачу ключей цифровых товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrderDigitalItemDTO&gt;**](OrderDigitalItemDTO.md) | Список проданных товаров.  Для товара с одинаковым &#x60;id&#x60; передавайте один элемент и массив &#x60;codes&#x60; по количеству ключей.  | [default to undefined]

## Example

```typescript
import { ProvideOrderDigitalCodesRequest } from './api';

const instance: ProvideOrderDigitalCodesRequest = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
