# PayReceiptFullResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Номер чека | [optional] [default to undefined]
**providerNumber** | **string** | Номер чека в системе ОФД | [optional] [default to undefined]
**status** | **number** | Статус чека 0-новый, 1-был отправлен в ОФД, 2-обрабатывается ОФД, 3-успешно обработан, 4-ошибка | [optional] [default to undefined]
**statusDescription** | **string** | Текстовое описание текущего статуса (или текст ошибки при соответствующем статусе) | [optional] [default to undefined]
**created** | **string** | Дата создания чека | [optional] [default to undefined]
**receiptImage** | **string** | Ссылка на изображение чека | [optional] [default to undefined]
**fiscalData** | [**PayReceiptFiscalData**](PayReceiptFiscalData.md) |  | [optional] [default to undefined]
**payReceipt** | [**PayReceiptData**](PayReceiptData.md) |  | [optional] [default to undefined]
**items** | [**Array&lt;PayReceiptItem&gt;**](PayReceiptItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PayReceiptFullResponse } from './api';

const instance: PayReceiptFullResponse = {
    id,
    providerNumber,
    status,
    statusDescription,
    created,
    receiptImage,
    fiscalData,
    payReceipt,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
