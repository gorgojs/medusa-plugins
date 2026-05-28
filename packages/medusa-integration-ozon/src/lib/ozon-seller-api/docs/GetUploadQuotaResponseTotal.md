# GetUploadQuotaResponseTotal

Лимит на ассортимент.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Количество товаров, которое можно создать в личном кабинете. Если значение &#x60;-1&#x60;, лимит не ограничен. | [optional] [default to undefined]
**usage** | **number** | Сколько товаров уже создано. | [optional] [default to undefined]

## Example

```typescript
import { GetUploadQuotaResponseTotal } from './api';

const instance: GetUploadQuotaResponseTotal = {
    limit,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
