# ValidationResultItem

Информация о товаре.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | [**ItemSize**](ItemSize.md) |  | [optional] [default to undefined]
**sku** | **number** | Идентификатор товара в системе Ozon — SKU. | [optional] [default to undefined]
**weight_g** | **number** | Вес товара в граммах. | [optional] [default to undefined]

## Example

```typescript
import { ValidationResultItem } from './api';

const instance: ValidationResultItem = {
    size,
    sku,
    weight_g,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
