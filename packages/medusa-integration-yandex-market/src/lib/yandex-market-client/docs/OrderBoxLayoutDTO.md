# OrderBoxLayoutDTO

Информация о коробке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrderBoxLayoutItemDTO&gt;**](OrderBoxLayoutItemDTO.md) | Список товаров в коробке.  Если в коробке едет часть большого товара, в списке может быть только один пункт.  | [default to undefined]

## Example

```typescript
import { OrderBoxLayoutDTO } from './api';

const instance: OrderBoxLayoutDTO = {
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
