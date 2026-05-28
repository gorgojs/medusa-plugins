# ProductCertificateUnbindResponseItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Сообщение об ошибке при отвязывании товара. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**updated** | **boolean** | Был ли отвязан товар от сертификата: - &#x60;true&#x60; — отвязан, - &#x60;false&#x60; — не отвязан.  | [optional] [default to undefined]

## Example

```typescript
import { ProductCertificateUnbindResponseItem } from './api';

const instance: ProductCertificateUnbindResponseItem = {
    error,
    product_id,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
