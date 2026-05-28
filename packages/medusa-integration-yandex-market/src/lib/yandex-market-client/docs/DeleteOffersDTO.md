# DeleteOffersDTO

Список товаров, которые не удалось удалить, потому что они хранятся на складе Маркета.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notDeletedOfferIds** | **Set&lt;string&gt;** | Список SKU товаров, которые не удалось удалить. | [optional] [default to undefined]

## Example

```typescript
import { DeleteOffersDTO } from './api';

const instance: DeleteOffersDTO = {
    notDeletedOfferIds,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
