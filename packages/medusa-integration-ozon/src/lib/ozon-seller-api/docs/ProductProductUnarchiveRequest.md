# ProductProductUnarchiveRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **Array&lt;number&gt;** | Список идентификаторов товаров в системе продавца — &#x60;product_id&#x60;.  Вы можете передать до 100 идентификаторов за раз.   В сутки можно восстановить из архива не больше 100 товаров, которые были архивированы автоматически.   Лимит обновляется в 03:00 по московскому времени. На разархивацию товаров, перенесённых в архив вручную, ограничений нет.  | [default to undefined]

## Example

```typescript
import { ProductProductUnarchiveRequest } from './api';

const instance: ProductProductUnarchiveRequest = {
    product_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
