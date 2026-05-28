# V5FbsPostingProductExemplarStatusV5Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**products** | [**Array&lt;V5FbsPostingProductExemplarStatusV5ResponseProduct&gt;**](V5FbsPostingProductExemplarStatusV5ResponseProduct.md) | Список товаров. | [optional] [default to undefined]
**status** | **string** | Статус проверки всех экземпляров и доступности сборки:  - &#x60;ship_available&#x60; — сборка доступна;  - &#x60;ship_not_available&#x60; — сборка недоступна;  - &#x60;validation_in_process&#x60; — экземпляры на проверке;  - &#x60;update_available&#x60; — редактирование информации об экземплярах доступно;  - &#x60;update_not_available&#x60; — редактирование информации об экземплярах недоступно.  | [optional] [default to undefined]

## Example

```typescript
import { V5FbsPostingProductExemplarStatusV5Response } from './api';

const instance: V5FbsPostingProductExemplarStatusV5Response = {
    posting_number,
    products,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
