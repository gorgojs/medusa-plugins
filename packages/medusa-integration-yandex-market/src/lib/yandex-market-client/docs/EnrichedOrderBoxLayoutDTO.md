# EnrichedOrderBoxLayoutDTO

Информация о коробке.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;OrderBoxLayoutItemDTO&gt;**](OrderBoxLayoutItemDTO.md) | Список товаров в коробке.  Если в коробке едет часть большого товара, в списке может быть только один пункт.  | [default to undefined]
**boxId** | **number** | Идентификатор коробки. | [optional] [default to undefined]

## Example

```typescript
import { EnrichedOrderBoxLayoutDTO } from './api';

const instance: EnrichedOrderBoxLayoutDTO = {
    items,
    boxId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
