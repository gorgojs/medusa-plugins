# OperationPosting

Информация об отправлении.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_schema** | **string** | Схема доставки:   - &#x60;FBO&#x60; — доставка со склада Ozon,   - &#x60;FBS&#x60; — доставка со своего склада,   - &#x60;CROSSBORDER&#x60; — доставка из-за рубежа,   - &#x60;RFBS&#x60; — доставка по выбору продавца,   - &#x60;FBP&#x60; — доставка с партнёрских складов Ozon,   - &#x60;FBOECONOMY&#x60; — доставка эконом-товаров со склада Ozon,   - &#x60;FBSECONOMY&#x60; — доставка эконом-товаров со своего склада.  | [optional] [default to undefined]
**order_date** | **string** | Дата принятия отправления в обработку. | [optional] [default to undefined]
**posting_number** | **string** | Номер отправления. | [optional] [default to undefined]
**warehouse_id** | **number** | Идентификатор склада. | [optional] [default to undefined]

## Example

```typescript
import { OperationPosting } from './api';

const instance: OperationPosting = {
    delivery_schema,
    order_date,
    posting_number,
    warehouse_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
