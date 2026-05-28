# V5FbsPostingProductExemplarValidateV5ResponseProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **string** | Код ошибки. | [optional] [default to undefined]
**exemplars** | [**Array&lt;V5FbsPostingProductExemplarValidateV5ResponseProductExemplar&gt;**](V5FbsPostingProductExemplarValidateV5ResponseProductExemplar.md) | Информация об экземплярах. | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**valid** | **boolean** | Результат прохождения проверки. &#x60;true&#x60;, если коды всех экземпляров соответствуют требованиям. | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarValidateV5ResponseProduct } from './api';

const instance: V5FbsPostingProductExemplarValidateV5ResponseProduct = {
    error,
    exemplars,
    product_id,
    valid,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
