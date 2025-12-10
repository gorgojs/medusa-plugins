# UpdateOrderStorageLimitRequest

Запрос на обновление срока хранения заказа в ПВЗ.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newDate** | **string** | Новая дата, до которой заказ будет храниться в пункте выдачи.  Срок хранения можно увеличить не больше, чем на 30 дней.  Формат даты: &#x60;ГГГГ-ММ-ДД&#x60;.  | [default to undefined]

## Example

```typescript
import { UpdateOrderStorageLimitRequest } from './api';

const instance: UpdateOrderStorageLimitRequest = {
    newDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
