# UploadPostingCodesRequestPostingLineExemplarInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exemplar_keys** | **Array&lt;string&gt;** | Список кодов цифрового товара. Количество кодов должно совпадать со значением параметра &#x60;exemplar_qty&#x60;. | [optional] [default to undefined]
**exemplar_qty** | **number** | Количество кодов цифрового товара, которые вы передаёте покупателю. &lt;br&gt;&lt;br&gt;  Сумма значений в параметрах &#x60;exemplar_qty &#x60; и &#x60;not_available_exemplar_qty&#x60; должна равняться количеству кодов в заказе. Получите это значение в параметре &#x60;required_qty_for_digital_code&#x60; в ответе метода [/v1/posting/digital/list](#operation/ListPostingCodes). | [default to undefined]
**not_available_exemplar_qty** | **number** | Количество кодов цифрового товара, которые вы не можете передать покупателю. &lt;br&gt;&lt;br&gt; Сумма значений в параметрах &#x60;exemplar_qty &#x60; и &#x60;not_available_exemplar_qty&#x60; должна равняться количеству кодов в заказе. Получите это значение в параметре &#x60;required_qty_for_digital_code&#x60; в ответе метода [/v1/posting/digital/list](#operation/ListPostingCodes). | [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [default to undefined]

## Example

```typescript
import { UploadPostingCodesRequestPostingLineExemplarInfo } from './api';

const instance: UploadPostingCodesRequestPostingLineExemplarInfo = {
    exemplar_keys,
    exemplar_qty,
    not_available_exemplar_qty,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
