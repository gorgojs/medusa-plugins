# Productv3GetProductListResponseResult

Результат.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;Productv3GetProductListResponseItem&gt;**](Productv3GetProductListResponseItem.md) | Список товаров. | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, передайте полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]
**total** | **number** | Всего товаров. | [optional] [default to undefined]

## Example

```typescript
import { Productv3GetProductListResponseResult } from './api';

const instance: Productv3GetProductListResponseResult = {
    items,
    last_id,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
