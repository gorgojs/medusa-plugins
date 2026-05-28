# GetPromoConstraintsDTO

Ограничения в акции.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouseIds** | **Set&lt;number&gt;** | Идентификаторы складов, для которых действует акция. Товары, которые лежат на других складах, не будут продаваться по акции.  Параметр возвращается, только если в условиях акции есть ограничение по складу.  | [optional] [default to undefined]

## Example

```typescript
import { GetPromoConstraintsDTO } from './api';

const instance: GetPromoConstraintsDTO = {
    warehouseIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
