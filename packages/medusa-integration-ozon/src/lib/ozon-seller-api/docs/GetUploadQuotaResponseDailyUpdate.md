# GetUploadQuotaResponseDailyUpdate

Суточный лимит на обновление товаров.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **number** | Количество товаров, которое можно обновить за сутки. Если значение &#x60;-1&#x60;, лимит не ограничен. | [optional] [default to undefined]
**reset_at** | **string** | Время в формате UTC, когда сбросится значение счётчика за текущие сутки. | [optional] [default to undefined]
**usage** | **number** | Сколько товаров обновлено за текущие сутки. | [optional] [default to undefined]

## Example

```typescript
import { GetUploadQuotaResponseDailyUpdate } from './api';

const instance: GetUploadQuotaResponseDailyUpdate = {
    limit,
    reset_at,
    usage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
