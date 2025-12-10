# OrderItemDetailDTO

Детали по товару в заказе.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**itemCount** | **number** | Количество единиц товара. | [default to undefined]
**itemStatus** | [**OrderItemStatusType**](OrderItemStatusType.md) |  | [default to undefined]
**updateDate** | **string** | Формат даты: &#x60;ДД-ММ-ГГГГ&#x60;.  | [default to undefined]

## Example

```typescript
import { OrderItemDetailDTO } from './api';

const instance: OrderItemDetailDTO = {
    itemCount,
    itemStatus,
    updateDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
