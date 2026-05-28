# GetImportProductsInfoResponseResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_id** | **string** | Идентификатор товара в системе продавца — артикул.  Максимальная длина строки в значении поля — 50 символов.  | [optional] [default to undefined]
**product_id** | **number** | Идентификатор товара в системе продавца — &#x60;product_id&#x60;. | [optional] [default to undefined]
**status** | **string** | Статус создания или обновления товара. Информация о товаре обрабатывается очередями. Возможные значения параметра: - &#x60;pending&#x60; — товар в очереди на обработку; - &#x60;imported&#x60; — товар успешно загружен; - &#x60;failed&#x60; — товар загружен с ошибками; - &#x60;skipped&#x60; — товар не был обновлен, так как запрос не содержал изменений.  | [optional] [default to undefined]
**errors** | [**Array&lt;V1ItemError&gt;**](V1ItemError.md) | Массив ошибок. | [optional] [default to undefined]

## Example

```typescript
import { GetImportProductsInfoResponseResultItem } from './api';

const instance: GetImportProductsInfoResponseResultItem = {
    offer_id,
    product_id,
    status,
    errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
