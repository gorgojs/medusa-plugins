# Productv4GetProductAttributesV4Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**Array&lt;Productv4GetProductAttributesV4ResponseResult&gt;**](Productv4GetProductAttributesV4ResponseResult.md) | Результаты запроса. | [optional] [default to undefined]
**last_id** | **string** | Идентификатор последнего значения на странице.  Чтобы получить следующие значения, укажите полученное значение в следующем запросе в параметре &#x60;last_id&#x60;.  | [optional] [default to undefined]
**total** | **string** | Количество товаров в списке. | [optional] [default to undefined]

## Example

```typescript
import { Productv4GetProductAttributesV4Response } from './api';

const instance: Productv4GetProductAttributesV4Response = {
    result,
    last_id,
    total,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
