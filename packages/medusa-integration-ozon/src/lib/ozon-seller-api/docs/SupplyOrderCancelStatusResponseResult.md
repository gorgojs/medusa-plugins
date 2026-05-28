# SupplyOrderCancelStatusResponseResult

Информация об отмене заявки на поставку.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_order_cancelled** | **boolean** | &#x60;true&#x60;, если заявка на поставку отменена.  | [optional] [default to undefined]
**supplies** | [**Array&lt;SupplyOrderCancelStatusResponseCancelSupplyResults&gt;**](SupplyOrderCancelStatusResponseCancelSupplyResults.md) | Список отменённых поставок. | [optional] [default to undefined]

## Example

```typescript
import { SupplyOrderCancelStatusResponseResult } from './api';

const instance: SupplyOrderCancelStatusResponseResult = {
    is_order_cancelled,
    supplies,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
