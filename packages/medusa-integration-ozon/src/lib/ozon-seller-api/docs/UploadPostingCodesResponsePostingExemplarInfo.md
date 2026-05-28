# UploadPostingCodesResponsePostingExemplarInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failed_exemplars** | [**Array&lt;PostingExemplarInfoExemplarError&gt;**](PostingExemplarInfoExemplarError.md) | Список кодов цифровых товаров с ошибками. | [optional] [default to undefined]
**received_qty** | **number** | Количество кодов цифрового товара, которые были приняты. | [optional] [default to undefined]
**rejected_qty** | **number** | Количество кодов цифровых товаров, которые не были приняты или переданы. | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]

## Example

```typescript
import { UploadPostingCodesResponsePostingExemplarInfo } from './api';

const instance: UploadPostingCodesResponsePostingExemplarInfo = {
    failed_exemplars,
    received_qty,
    rejected_qty,
    sku,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
