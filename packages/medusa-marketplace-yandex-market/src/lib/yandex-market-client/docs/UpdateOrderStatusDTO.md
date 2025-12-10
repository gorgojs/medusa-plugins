# UpdateOrderStatusDTO

Список заказов.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | Идентификатор заказа. | [optional] [default to undefined]
**status** | [**OrderStatusType**](OrderStatusType.md) |  | [optional] [default to undefined]
**substatus** | [**OrderSubstatusType**](OrderSubstatusType.md) |  | [optional] [default to undefined]
**updateStatus** | [**OrderUpdateStatusType**](OrderUpdateStatusType.md) |  | [optional] [default to undefined]
**errorDetails** | **string** | Ошибка при изменении статуса заказа. Содержит описание ошибки и идентификатор заказа.  Возвращается, если параметр &#x60;updateStatus&#x60; принимает значение &#x60;ERROR&#x60;.  | [optional] [default to undefined]

## Example

```typescript
import { UpdateOrderStatusDTO } from './api';

const instance: UpdateOrderStatusDTO = {
    id,
    status,
    substatus,
    updateStatus,
    errorDetails,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
